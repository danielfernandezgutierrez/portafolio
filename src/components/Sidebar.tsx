"use client"
import React, { useState, useEffect } from 'react'
import { Home, User, FileText, Book, Server, Mail, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      
      const current = sections.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        // Ajustamos el área de detección para que sea más precisa
        return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3
      })

      if (current && current.id !== activeSection) {
        setActiveSection(current.id)
      }
    }

    // Agregamos el evento de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Llamamos a handleScroll inmediatamente para establecer la sección inicial
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection]) // Incluimos activeSection como dependencia

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 60; // Ajusta según el tamaño fijo del encabezado
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Inicio', icon: Home, id: 'home' },
    { name: 'Sobre mí', icon: User, id: 'about' },
    { name: 'Tecnologías', icon: Server, id: 'tech' },
    { name: 'Proyectos', icon: FileText, id: 'projects' },
    { name: 'Certificados', icon: Book, id: 'certs' },
    { name: 'Contacto', icon: Mail, id: 'contact' }
  ]

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = currentTheme === 'dark'

  if (!mounted) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={`
          fixed top-0 h-screen z-40
          transition-all duration-300 ease-in-out
          ${isDark ? 'bg-neutral-900/95 text-neutral-200 border-neutral-700' : 'bg-white/95 text-gray-800 border-gray-200'}
          backdrop-blur-sm
          ${isOpen ? 'left-0' : '-left-full md:left-0'}
          w-64 md:w-20 border-r shadow-lg flex flex-col items-center py-8
        `}
      >
        <div className="flex flex-col items-center gap-8 w-full mt-8 md:mt-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            const activeColor = isDark ? 'text-blue-400' : 'text-blue-600'
            const inactiveColor = isDark ? 'text-neutral-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative w-full px-6 md:px-3 py-4 flex items-center md:flex-col md:justify-center gap-4 md:gap-2
                  transition-all duration-300 ease-in-out group
                  ${isActive 
                    ? `${activeColor} after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 
                      after:h-12 after:w-1 after:rounded-l-md after:bg-current` 
                    : inactiveColor}
                `}
              >
                <item.icon 
                  className={`
                    w-6 h-6 transition-transform duration-300 
                    group-hover:scale-110 
                    ${isActive ? 'scale-110' : ''}
                  `} 
                />
                <span className="md:hidden">{item.name}</span>
                <span 
                  className={`
                    hidden md:block text-xs font-medium opacity-0 group-hover:opacity-100 
                    transition-all duration-300 absolute left-24 
                    px-3 py-2 rounded-md whitespace-nowrap shadow-lg
                    before:absolute before:left-[-0.5rem] before:top-1/2 
                    before:-translate-y-1/2 before:border-[6px] before:border-transparent
                    ${isDark 
                      ? 'bg-neutral-800 text-neutral-200 before:border-r-neutral-800'
                      : 'bg-gray-800 text-white before:border-r-gray-800'}
                  `}
                >
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default Sidebar