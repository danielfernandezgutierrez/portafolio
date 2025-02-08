"use client"
import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

// Define el tipo de los certificados
type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
  issuer: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Data Science Professional Certificate",
    image: "/certs/Data_Science_Professional_Certificate_Badge2025.webp", 
    link: "https://www.credly.com/badges/435a41ae-de3c-47d1-9ed9-2638490c559d/public_url",
    issuer: "IBM"
  },

  {
    id: 2,
    title: "Generative AI with Large Language Models",
    image: "/certs/Deeplearning-AI.webp",
    link: "https://coursera.org/share/c6f5b7bdc44ca47d2da258d65f3503b1",
    issuer: "DeepLearning.AI and AWS"
  },
  
];

const Certs = () => {
const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
const { t } = useTranslation();

return (
    <section id="certs" className="min-h-screen flex items-center justify-center py-20">
    <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center gap-4 mb-16">
        <Award className="w-8 h-8" />
        <h2 className="text-4xl font-bold">{t('certs.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
            <div 
            key={cert.id} 
            className="relative group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
            >
            <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                width={1638}    // Dimensión más apropiada para una foto de perfil
                height={1157}   // Manteniendo el aspect ratio cuadrado
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm">{cert.issuer}</p>
                    <p className="mt-2 text-sm">{t('certs.button')}</p>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        {selectedCert && (
            <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto dark:bg-neutral-900">
            <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                <span>{selectedCert.title}</span>
                <div className="flex gap-2">
                    <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors"
                    >
                    <ExternalLink className="w-5 h-5" />
                    </a>
                    <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors"
                    >
                    <X className="w-5 h-5" />
                    </button>
                </div>
                </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
                <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-[60vh] object-contain rounded-lg"
                width={1638}    // Dimensión más apropiada para una foto de perfil
                height={1157}   // Manteniendo el aspect ratio cuadrado
                />
                <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('certs.emitido')} {selectedCert.issuer}
                </p>
                </div>
            </div>
            </DialogContent>
        )}
        </Dialog>
    </div>
    </section>
);
};

export default Certs;