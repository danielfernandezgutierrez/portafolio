"use client"
import React from 'react';
import { User, Code, Globe, Rocket, AppWindow } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      key: 'webdev'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      key: 'design'
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      key: 'optimization'
    },
    {
      icon: <AppWindow className="w-5 h-5" />,
      key: 'desktop'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-16">
          <User className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
          <h2 className="text-3xl font-light tracking-tight text-neutral-800 dark:text-neutral-200">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Imagen */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/Daniel/me.webp"
                alt="Daniel Fernandez Gutierrez"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={1920}    // Dimensión más apropiada para una foto de perfil
                height={2560}   // Manteniendo el aspect ratio cuadrado
              />
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-10">
            <div className="prose dark:prose-invert max-w-none space-y-6">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.text2')}
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.text3')}
              </p>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 shadow-none bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                    {t(`about.features.${feature.key}.title`)}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t(`about.features.${feature.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;