"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation(); // Agregamos i18n para obtener el idioma actual

  // Esperar a que el componente se monte
  useEffect(() => {
    setMounted(true);
  }, []);

  // Función para obtener la ruta del CV según el idioma
  const getCVPath = () => {
    return i18n.language === 'es' 
      ? "/Daniel/CV_DANIEL_FERANANDEZ_GUTIERREZ_2025.pdf"
      : "/Daniel/CV_DANIEL_FERANANDEZ_GUTIERREZ_2025_EN.pdf";
  };


  // Función para obtener el texto del botón según el idioma
  const getCVButtonText = () => {
    return i18n.language === 'es'
      ? "Descargar CV"
      : "Download English CV";
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/in/daniel-esthefano-fernandez-gutierrez-5a1539165/' },
    { name: 'Github', icon: '/icons/github.svg', darkIcon: "/icons/githubdark.svg", url: 'https://github.com/danielfernandezgutierrez' },
    { name: 'Gmail', icon: '/icons/gmail.svg', url: 'mailto:danielsam.fergu@gmail.com' },
  
  ];

  const getIconSrc = (link: { name: string; icon: string; url: string; darkIcon?: undefined; } | { name: string; icon: string; darkIcon: string; url: string; }) => {
    if (!mounted) return link.icon;
    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    return link.darkIcon && currentTheme === 'dark' ? link.darkIcon : link.icon;
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto px-4 py-16"
      >
        <Card className="border-0 shadow-none bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-8 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex flex-col items-center gap-2 mb-2">
                  <Badge 
                    className="text-sm font-medium px-4 py-1 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
                    {t('hero.badge')}
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Daniel Fernandez{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 dark:from-green-700 dark:to-green-800">
                      Gutierrez
                  </span>

                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
              >
                {t('hero.text')}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center gap-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:scale-110 transition-all duration-300 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                      >
                        <Image
                          src={getIconSrc(link)}
                          alt={link.name}
                          width={24}
                          height={24}
                          className="w-5 h-5"
                          priority
                        />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <a href={getCVPath()} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  {getCVButtonText()}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Hero;