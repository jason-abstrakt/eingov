'use client';

import { ShieldCheck, ArrowRight, FileText, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Language = 'en' | 'es';

const content = {
  en: {
    // Header
    help: "Help",
    news: "News",
    english: "English",
    taxPros: "Tax Pros",
    signIn: "Sign in",
    searchPlaceholder: "Search",

    // Nav
    navFile: "File",
    navPay: "Pay",
    navRefunds: "Refunds",
    navCredits: "Credits & Deductions",
    navForms: "Forms",
    navFraud: "Report Fraud",

    // Breadcrumb
    breadcrumbHome: "Home",
    breadcrumbFile: "File",
    breadcrumbBusiness: "Businesses and self-employed",
    breadcrumbEIN: "Employer ID numbers",
    breadcrumbGet: "Get an employer identification number",

    // Sidebar
    individuals: "Individuals",
    businesses: "Businesses and self-employed",
    charities: "Charities and nonprofits",

    // Main
    mainHeading: "Get an employer identification number (EIN)",
    introText: "Use this tool to get an EIN from the IRS. Answer questions and submit the application. If it's approved, the IRS issue your EIN and we will send via email.",
    feeDisclaimer: "You never have to pay a fee for an EIN on the IRS website. Here you can pay a service fee for EIN application service.",
    
    // CTA Box
    ctaHeading: "APPLY FOR EIN – TAX-ID",
    ctaText: "Get your Employer Identification Number (EIN) online today with our simple application process.",
    ctaButton: "APPLY ONLINE NOW",

    // How it works
    howItWorksHeading: "How it works",
    howItWorks1: "Complete the application in one session. You can't save it for later.",
    howItWorks2: "It expires after 15 minutes of inactivity, and you'll need to start over.",
    howItWorks3: "Print your EIN confirmation letter for your records.",

    // Who can use
    whoCanUseHeading: "Who can use this tool",
    whoCanUseIntro: "Use this if:",
    whoCanUse1: "Your principal business is located in the U.S. or U.S. territories.",
    whoCanUse2: "You have a valid Taxpayer Identification Number (SSN, ITIN, EIN).",
    whoCanUse3: "You are the responsible party for the entity.",

    // Right Sidebar
    related: "Related",
    relatedEIN: "Employer identification number",
    relatedPrivacy: "Privacy Act Statement and Paperwork Reduction Act Notice",
    relatedEmployees: "Businesses with employees",
    relatedVideo: "EIN video",
    einServicesHeading: "EIN Services",
    einServiceDeactivate: "Deactivate or Cancel",
    einServiceLost: "Lost / Misplaced Retrieval",
    einServiceAddress: "Report Address Change",

    // Footer - Columns
    agency: "Our Agency",
    aboutIRS: "About IRS",
    careers: "Careers",
    operations: "Operations & Budget",
    taxStats: "Tax Statistics",
    whistleblower: "Whistleblower Office",
    civilRights: "Civil Rights",
    foia: "FOIA Requests",
    noFear: "No FEAR Act",

    rights: "Know Your Rights",
    billOfRights: "Taxpayer Bill of Rights",
    advocate: "Taxpayer Advocate Service",
    inspector: "Inspector General for Tax Admin",
    privacy: "Privacy Policy",
    accessibility: "Accessibility",

    resolve: "Resolve an Issue",
    respond: "Respond to a Notice",
    appeals: "Independent Office of Appeals",
    idTheft: "Identity Theft Protection",
    phishing: "Report Phishing",
    fraud: "Tax Fraud Alert",
    victim: "Victim Assistance",

    pros: "Tax Pros",
    proNews: "Tax Pro News",
    developers: "Software Developers",
    audit: "Audit Techniques",
    eservices: "E-Services",
    circular: "Circular 230",
    enrolled: "Enrolled Agents",

    forms: "Forms & Instructions",
    viewAll: "View All Forms",

    sites: "Related Sites",
    treasury: "U.S. Treasury",
    usaGov: "USA.gov",
    treasuryInspector: "Treasury Inspector General",
    taxpayerAdvocate: "Taxpayer Advocate",
    directFile: "Direct File",

    // Footer - Mission & Disclaimer
    deptTreasury: "EIN Gov Department of Services",
    irsService: "IRS Advisory Services",
    mission: "Our mission is to provide America's taxpayers top-quality service by helping them understand and meet their tax responsibilities and enforce the law with integrity and fairness to all.",
    authorizedProvider: "Authorized e-File Provider Service",
    disclaimerMain: "We will generate a government-issued EIN for you. We are not officially affiliated with the Internal Revenue Service (IRS) or any government agency, but by going through this flow, we will get you your EIN emailed to you promptly.",
    disclaimerSub: "This service is provided to assist in the efficient processing of your application. All data is transmitted securely.",
    
    // Footer - Bottom
    copyright: "© 2026 EIN Gov. All rights reserved.",
    terms: "Terms of Service",
    systemStatus: "System Status",
    languageLabel: "Language:",
  },
  es: {
    // Header
    help: "Ayuda",
    news: "Noticias",
    english: "English",
    taxPros: "Profesionales de Impuestos",
    signIn: "Iniciar sesión",
    searchPlaceholder: "Buscar",

    // Nav
    navFile: "Presentar",
    navPay: "Pagar",
    navRefunds: "Reembolsos",
    navCredits: "Créditos y Deducciones",
    navForms: "Formularios",
    navFraud: "Reportar Fraude",

    // Breadcrumb
    breadcrumbHome: "Inicio",
    breadcrumbFile: "Presentar",
    breadcrumbBusiness: "Negocios y autónomos",
    breadcrumbEIN: "Números de identificación del empleador",
    breadcrumbGet: "Obtener un número de identificación del empleador",

    // Sidebar
    individuals: "Individuos",
    businesses: "Negocios y autónomos",
    charities: "Organizaciones benéficas y sin fines de lucro",

    // Main
    mainHeading: "Obtener un número de identificación del empleador (EIN)",
    introText: "Utilice esta herramienta para obtener un EIN del IRS. Responda las preguntas y envíe la solicitud. Si se aprueba, el IRS emitirá su EIN y se lo enviaremos por correo electrónico.",
    feeDisclaimer: "Nunca tiene que pagar una tarifa por un EIN en el sitio web del IRS. Aquí puede pagar una tarifa de servicio por el servicio de solicitud de EIN.",
    
    // CTA Box
    ctaHeading: "SOLICITAR EIN – TAX-ID",
    ctaText: "Obtenga su Número de Identificación del Empleador (EIN) en línea hoy con nuestro proceso de solicitud simple.",
    ctaButton: "SOLICITAR EN LÍNEA AHORA",

    // How it works
    howItWorksHeading: "Cómo funciona",
    howItWorks1: "Complete la solicitud en una sola sesión. No puede guardarla para más tarde.",
    howItWorks2: "Caduca después de 15 minutos de inactividad y deberá comenzar de nuevo.",
    howItWorks3: "Imprima su carta de confirmación de EIN para sus registros.",

    // Who can use
    whoCanUseHeading: "Quién puede usar esta herramienta",
    whoCanUseIntro: "Use esto si:",
    whoCanUse1: "Su negocio principal está ubicado en los EE. UU. o en territorios de los EE. UU.",
    whoCanUse2: "Tiene un Número de Identificación del Contribuyente válido (SSN, ITIN, EIN).",
    whoCanUse3: "Usted es la parte responsable de la entidad.",

    // Right Sidebar
    related: "Relacionado",
    relatedEIN: "Número de identificación del empleador",
    relatedPrivacy: "Declaración de la Ley de Privacidad y Aviso de la Ley de Reducción de Trámites",
    relatedEmployees: "Negocios con empleados",
    relatedVideo: "Video sobre EIN",
    einServicesHeading: "Servicios de EIN",
    einServiceDeactivate: "Desactivar o Cancelar",
    einServiceLost: "Recuperación de EIN perdido",
    einServiceAddress: "Informar cambio de dirección",

    // Footer - Columns
    agency: "Nuestra Agencia",
    aboutIRS: "Sobre el IRS",
    careers: "Carreras",
    operations: "Operaciones y Presupuesto",
    taxStats: "Estadísticas Tributarias",
    whistleblower: "Oficina del Denunciante",
    civilRights: "Derechos Civiles",
    foia: "Solicitudes FOIA",
    noFear: "Ley No FEAR",

    rights: "Conozca sus Derechos",
    billOfRights: "Carta de Derechos del Contribuyente",
    advocate: "Servicio del Defensor del Contribuyente",
    inspector: "Inspector General para la Admin. Tributaria",
    privacy: "Política de Privacidad",
    accessibility: "Accesibilidad",

    resolve: "Resolver un Problema",
    respond: "Responder a un Aviso",
    appeals: "Oficina Independiente de Apelaciones",
    idTheft: "Protección contra el Robo de Identidad",
    phishing: "Reportar Phishing",
    fraud: "Alerta de Fraude Fiscal",
    victim: "Asistencia a Víctimas",

    pros: "Profesionales de Impuestos",
    proNews: "Noticias para Profesionales",
    developers: "Desarrolladores de Software",
    audit: "Técnicas de Auditoría",
    eservices: "Servicios Electrónicos",
    circular: "Circular 230",
    enrolled: "Agentes Inscritos",

    forms: "Formularios e Instrucciones",
    viewAll: "Ver Todos los Formularios",

    sites: "Sitios Relacionados",
    treasury: "Tesoro de los EE. UU.",
    usaGov: "USA.gov",
    treasuryInspector: "Inspector General del Tesoro",
    taxpayerAdvocate: "Defensor del Contribuyente",
    directFile: "Direct File",

    // Footer - Mission & Disclaimer
    deptTreasury: "Departamento de Servicios EIN Gov",
    irsService: "Servicios de Asesoría del IRS",
    mission: "Nuestra misión es brindar a los contribuyentes de Estados Unidos un servicio de alta calidad ayudándoles a comprender y cumplir con sus responsabilidades tributarias y hacer cumplir la ley con integridad y justicia para todos.",
    authorizedProvider: "Servicio de Proveedor Autorizado de e-File",
    disclaimerMain: "Generaremos un EIN emitido por el gobierno para usted. No estamos oficialmente afiliados con el Servicio de Impuestos Internos (IRS) ni con ninguna agencia gubernamental, pero al realizar este proceso, le enviaremos su EIN por correo electrónico de inmediato.",
    disclaimerSub: "Este servicio se proporciona para ayudar en el procesamiento eficiente de su solicitud. Todos los datos se transmiten de forma segura.",
    
    // Footer - Bottom
    copyright: "© 2026 EIN Gov. Todos los derechos reservados.",
    terms: "Términos de Servicio",
    systemStatus: "Estado del Sistema",
    languageLabel: "Idioma:",
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Official Banner */}
      <header className="bg-slate-100 border-b border-slate-200 py-1 px-4 text-[11px] font-medium text-slate-700 flex justify-end">
         <div className="flex flex-wrap gap-x-6 gap-y-1 container mx-auto max-w-7xl justify-end">
            <Link href="#" className="hover:underline">{t.help}</Link>
            <Link href="#" className="hover:underline">{t.news}</Link>
            <div 
              className="flex items-center gap-1 cursor-pointer hover:underline"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            >
               <span>{lang === 'en' ? 'Español' : 'English'}</span>
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <Link href="#" className="hover:underline">{t.taxPros}</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:underline font-bold">
               <span>{t.signIn}</span>
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
         </div>
      </header>

      {/* Main Navigation / Header */}
      <div className="bg-[#234E76] text-white">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                 {/* IRS Eagle SVG Simulation */}
                 <div className="w-12 h-12 relative flex-shrink-0">
                    <svg viewBox="0 0 100 100" fill="white" className="w-full h-full">
                       <path d="M50 2C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm0 88c-22.1 0-40-17.9-40-40S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z" opacity="0.2"/>
                       <path d="M65 35c-2-5-8-8-15-8s-13 3-15 8l-5 12h40l-5-12zM50 20c-5 0-9 2-12 5l2 4c2-2 5-3 10-3s8 1 10 3l2-4c-3-3-7-5-12-5z"/>
                       <path d="M30 55h40v5H30z"/>
                       <path d="M35 65h30v5H35z"/>
                    </svg>
                 </div>
                 <div className="leading-tight">
                   <span className="font-serif font-bold text-3xl sm:text-4xl tracking-tight block">EIN</span>
                   <span className="text-[10px] uppercase tracking-widest block font-sans font-medium mt-1">EIN Gov</span>
                 </div>
              </div>
              <nav className="hidden lg:flex gap-1 ml-8 text-[15px] font-bold">
                  {[t.navFile, t.navPay, t.navRefunds, t.navCredits, t.navForms, t.navFraud].map((item) => (
                     <Link key={item} href="#" className="px-3 py-2 hover:underline decoration-2 underline-offset-4 whitespace-nowrap">{item}</Link>
                  ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex w-64">
               <div className="relative w-full">
                  <input type="text" placeholder={t.searchPlaceholder} className="w-full pl-3 pr-10 py-1.5 rounded-sm text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  <button className="absolute right-0 top-0 h-full px-3 text-slate-600 hover:text-blue-800 bg-white rounded-r-sm border-l border-slate-300">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
               </div>
            </div>
        </div>
      </div>


      <main className="flex-grow bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#f0f0f0] border-b border-gray-200">
           <div className="container mx-auto max-w-7xl px-4 py-2 text-[11px] text-[#005ea2] flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Link href="#" className="hover:underline flex-shrink-0">{t.breadcrumbHome}</Link> /
              <Link href="#" className="hover:underline flex-shrink-0">{t.breadcrumbFile}</Link> /
              <Link href="#" className="hover:underline flex-shrink-0">{t.breadcrumbBusiness}</Link> /
              <Link href="#" className="hover:underline flex-shrink-0">{t.breadcrumbEIN}</Link> /
              <span className="text-gray-600 flex-shrink-0">{t.breadcrumbGet}</span>
           </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white relative">
          <div className="container mx-auto max-w-7xl px-4 py-6 sm:py-8 grid lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Left Sidebar (Desktop) - Navigation */}
            <div className="hidden lg:block col-span-1 space-y-6 text-sm">
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">{t.individuals}</h3>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">{t.businesses}</h3>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">{t.charities}</h3>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-3 lg:col-span-2 space-y-6">
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-2">
                {t.mainHeading}
              </h1>
              
              <div className="text-[13px] text-gray-600 space-x-2 flex items-center mb-6">
                  <span 
                    className={`cursor-pointer ${lang === 'en' ? 'font-bold text-black' : 'text-[#005ea2] hover:underline'}`}
                    onClick={() => setLang('en')}
                  >
                    English
                  </span>
                  <span className="text-gray-300">|</span>
                  <span 
                    className={`cursor-pointer ${lang === 'es' ? 'font-bold text-black' : 'text-[#005ea2] hover:underline'}`}
                    onClick={() => setLang('es')}
                  >
                    Español
                  </span>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">中文 (简体)</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">中文 (繁體)</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">한국어</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">Pусский</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">Tiếng Việt</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">Kreyòl ayisyen</Link>
              </div>

              <p className="text-lg text-gray-800 leading-relaxed">
                {t.introText}
              </p>
              
              <p className="text-base text-gray-800 leading-relaxed font-bold bg-yellow-50 p-4 border-l-4 border-yellow-400">
                {t.feeDisclaimer}
              </p>

              {/* Main CTA Box */}
              <div className="my-8 border border-gray-300 shadow-lg rounded bg-white overflow-hidden">
                 <div className="bg-[#234E76] text-white p-4 text-center font-bold text-lg sm:text-xl tracking-wide">
                    {t.ctaHeading}
                 </div>
                 <div className="p-6 sm:p-8 text-center space-y-6">
                    <p className="text-gray-700 text-base sm:text-lg">{t.ctaText}</p>
                    <Link 
                       href="/apply" 
                       className="block w-full sm:w-auto sm:inline-block bg-[#005ea2] hover:bg-[#1a4480] text-white font-bold text-lg sm:text-xl px-8 sm:px-16 py-4 sm:py-5 rounded-md shadow-lg"
                    >
                       {t.ctaButton}
                    </Link>
                 </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">{t.howItWorksHeading}</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-800 marker:text-gray-500">
                <li>{t.howItWorks1}</li>
                <li>{t.howItWorks2}</li>
                <li>{t.howItWorks3}</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">{t.whoCanUseHeading}</h2>
              <p className="mb-4 text-gray-800">{t.whoCanUseIntro}</p>
              <ul className="list-disc pl-5 space-y-3 text-gray-800 marker:text-gray-500">
                <li>{t.whoCanUse1}</li>
                <li>{t.whoCanUse2}</li>
                <li>{t.whoCanUse3}</li>
              </ul>
            </div>
            
            {/* Right Sidebar - Related */}
            <div className="col-span-3 lg:col-span-1 border-l border-gray-200 pl-8 hidden lg:block">
              <h3 className="font-bold text-xl text-gray-900 mb-4">{t.related}</h3>
              <ul className="space-y-3 text-[#005ea2]">
                <li><Link href="/employer-identification-number" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>{t.relatedEIN}</Link></li>
                <li><Link href="/privacy-act-statement" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>{t.relatedPrivacy}</Link></li>
                <li><Link href="/businesses-with-employees" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>{t.relatedEmployees}</Link></li>
                <li><Link href="/ein-video" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>{t.relatedVideo} <svg className="w-3 h-3 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link></li>
              </ul>

              <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded">
                 <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{t.einServicesHeading}</h4>
                 <ul className="space-y-3 text-sm text-[#005ea2]">
                    <li><Link href="/deactivate-cancel-ein" className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {t.einServiceDeactivate}</Link></li>
                    <li><Link href="/lost-ein-retrieval" className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> {t.einServiceLost}</Link></li>
                    <li><Link href="/report-address-change" className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> {t.einServiceAddress}</Link></li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-us-dark-blue text-slate-300 py-16 border-t-4 border-us-gold print:hidden">
        <div className="container mx-auto max-w-7xl px-4">
           {/* Top Main Navigation Grid */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-xs">
              
              {/* Column 1: Our Agency */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.agency}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/about" className="hover:text-white transition-colors">{t.aboutIRS}</Link></li>
                    <li><Link href="/careers" className="hover:text-white transition-colors">{t.careers}</Link></li>
                    <li><Link href="/operations-budget" className="hover:text-white transition-colors">{t.operations}</Link></li>
                    <li><Link href="/tax-statistics" className="hover:text-white transition-colors">{t.taxStats}</Link></li>
                    <li><Link href="/whistleblower-office" className="hover:text-white transition-colors">{t.whistleblower}</Link></li>
                    <li><Link href="/civil-rights" className="hover:text-white transition-colors">{t.civilRights}</Link></li>
                    <li><Link href="/foia-requests" className="hover:text-white transition-colors">{t.foia}</Link></li>
                    <li><Link href="/no-fear-act" className="hover:text-white transition-colors">{t.noFear}</Link></li>
                 </ul>
              </div>

              {/* Column 2: Know Your Rights */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.rights}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/taxpayer-bill-of-rights" className="hover:text-white transition-colors">{t.billOfRights}</Link></li>
                    <li><Link href="/taxpayer-advocate-service" className="hover:text-white transition-colors">{t.advocate}</Link></li>
                    <li><Link href="/inspector-general" className="hover:text-white transition-colors">{t.inspector}</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-white transition-colors">{t.privacy}</Link></li>
                    <li><Link href="/accessibility" className="hover:text-white transition-colors">{t.accessibility}</Link></li>
                 </ul>
              </div>

              {/* Column 3: Resolve an Issue */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.resolve}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/respond-to-notice" className="hover:text-white transition-colors">{t.respond}</Link></li>
                    <li><Link href="/office-of-appeals" className="hover:text-white transition-colors">{t.appeals}</Link></li>
                    <li><Link href="/identity-theft-protection" className="hover:text-white transition-colors">{t.idTheft}</Link></li>
                    <li><Link href="/report-phishing" className="hover:text-white transition-colors">{t.phishing}</Link></li>
                    <li><Link href="/tax-fraud-alert" className="hover:text-white transition-colors">{t.fraud}</Link></li>
                    <li><Link href="/victim-assistance" className="hover:text-white transition-colors">{t.victim}</Link></li>
                 </ul>
              </div>

              {/* Column 4: Tax Pros */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.pros}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/tax-pro-news" className="hover:text-white transition-colors">{t.proNews}</Link></li>
                    <li><Link href="/software-developers" className="hover:text-white transition-colors">{t.developers}</Link></li>
                    <li><Link href="/audit-techniques" className="hover:text-white transition-colors">{t.audit}</Link></li>
                    <li><Link href="/eservices" className="hover:text-white transition-colors">{t.eservices}</Link></li>
                    <li><Link href="/circular-230" className="hover:text-white transition-colors">{t.circular}</Link></li>
                    <li><Link href="/enrolled-agents" className="hover:text-white transition-colors">{t.enrolled}</Link></li>
                 </ul>
              </div>

              {/* Column 5: Forms & Instructions */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.forms}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/forms/form-1040" className="hover:text-white transition-colors">Form 1040</Link></li>
                    <li><Link href="/forms/form-w4" className="hover:text-white transition-colors">Form W-4</Link></li>
                    <li><Link href="/forms/form-w9" className="hover:text-white transition-colors">Form W-9</Link></li>
                    <li><Link href="/forms/form-1099-nec" className="hover:text-white transition-colors">Form 1099-NEC</Link></li>
                    <li><Link href="/forms/form-941" className="hover:text-white transition-colors">Form 941</Link></li>
                    <li><Link href="/forms/view-all" className="hover:text-white transition-colors">{t.viewAll}</Link></li>
                 </ul>
              </div>

              {/* Column 6: Related Sites */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">{t.sites}</h5>
                 <ul className="space-y-2">
                    <li><Link href="/us-treasury" className="hover:text-white transition-colors">{t.treasury}</Link></li>
                    <li><Link href="/usagov" className="hover:text-white transition-colors">{t.usaGov}</Link></li>
                    <li><Link href="/treasury-inspector-general" className="hover:text-white transition-colors">{t.treasuryInspector}</Link></li>
                    <li><Link href="/taxpayer-advocate" className="hover:text-white transition-colors">{t.taxpayerAdvocate}</Link></li>
                    <li><Link href="/direct-file" className="hover:text-white transition-colors">{t.directFile}</Link></li>
                 </ul>
              </div>

           </div>

           {/* Middle Section: Agency Mission & Socials */}
           <div className="grid md:grid-cols-2 gap-12 py-12 border-t border-slate-800">
              <div>
                 <div className="flex items-center gap-3 mb-6 text-white">
                    <span className="font-serif font-bold text-3xl tracking-tight">EIN</span>
                    <span className="h-8 w-px bg-slate-600"></span>
                    <div className="flex flex-col leading-none">
                       <span className="font-medium text-slate-200 text-base">{t.deptTreasury}</span>
                       <span className="text-slate-400 text-xs tracking-wider uppercase mt-1">{t.irsService}</span>
                    </div>
                 </div>
                 <p className="max-w-md text-slate-400 text-sm leading-relaxed mb-8">
                    {t.mission}
                 </p>
                 <div className="flex gap-4">
                     {/* Social Media Icons (SVGs inline for better control) */}
                     {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social, i) => (
                       <div key={i} title={social} className="w-8 h-8 bg-slate-800 hover:bg-us-blue rounded flex items-center justify-center transition-all cursor-pointer text-slate-400 hover:text-white group">
                          <span className="text-[10px] font-bold group-hover:scale-110 transition-transform">{social[0]}</span>
                       </div>
                     ))}
                 </div>
              </div>
              
              {/* Disclaimer Box */}
              <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                 <div className="flex items-start gap-4">
                    <ShieldCheck className="text-us-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                       <h6 className="font-bold text-white text-sm mb-2 uppercase tracking-wide">{t.authorizedProvider}</h6>
                       <p className="leading-relaxed text-slate-400 text-xs mb-4">
                          {t.disclaimerMain}
                       </p>
                       <p className="text-slate-500 text-[10px]">
                          {t.disclaimerSub}
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Bar: Copyright & Utility Links */}
           <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-6">
              <p>{t.copyright}</p>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                 <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">{t.privacy}</Link>
                 <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">{t.terms}</Link>
                 <Link href="/accessibility" className="hover:text-slate-300 transition-colors">{t.accessibility}</Link>
                 <Link href="/no-fear-act" className="hover:text-slate-300 transition-colors">{t.noFear}</Link>
                 <Link href="/usagov" className="hover:text-slate-300 transition-colors">{t.usaGov}</Link>
                 <Link href="/system-status" className="hover:text-slate-300 transition-colors">{t.systemStatus}</Link>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                 <span>{t.languageLabel}</span>
                 <select 
                   className="bg-slate-800 border-none text-slate-300 text-xs rounded py-1 px-2 focus:ring-1 focus:ring-slate-500 cursor-pointer"
                   value={lang === 'es' ? 'Español' : 'English'}
                   onChange={(e) => setLang(e.target.value === 'Español' ? 'es' : 'en')}
                 >
                    <option>English</option>
                    <option>Español</option>
                    <option>中文 (Chinese)</option>
                    <option>한국어 (Korean)</option>
                    <option>Pусский (Russian)</option>
                    <option>Tiếng Việt (Vietnamese)</option>
                 </select>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
