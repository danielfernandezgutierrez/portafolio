'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const response = await emailjs.send(
            'Portfolio-Contact',
            'template_czatkd1',
            {
              from_name: formData.nombre,
              reply_to: formData.correo,
              subject: formData.asunto,
              message: formData.mensaje,
            },
            '0M277pAq9VZnYfBbu'
          );

          if (response.status === 200) {
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.description'),
        });
        setFormData({
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch {
      toast({
        variant: "destructive",
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
      });
    }
  }
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.info.location.title'),
      content: t('contact.info.location.content'),
      link: null
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      link: "mailto: danielsam.fergu@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.info.whatsapp.title'),
      content: t('contact.info.whatsapp.content'),
      link: "https://wa.me/+56934681636"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center gap-4 mb-16">
          <Send className="w-8 h-8" />
          <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{info.title}:</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30275.992795608323!2d-70.30056313156737!3d-18.461038446136754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa98ad932c235%3A0x27f5886c04d8d71d!2sArica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl!4v1737144913688!5m2!1ses!2scl"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-xl font-semibold text-gray-800 text-center dark:text-white">{t('contact.form.title')}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="nombre"
                      placeholder={t('contact.form.name')}
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="correo"
                      placeholder={t('contact.form.email')}
                      required
                      value={formData.correo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    name="asunto"
                    placeholder={t('contact.form.subject')}
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="mensaje"
                    placeholder={t('contact.form.message')}
                    required
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.sendButton')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;