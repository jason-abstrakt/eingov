import { ShieldCheck, ArrowRight, FileText, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Official Banner */}
      <header className="bg-slate-100 border-b border-slate-200 py-1 px-4 text-[11px] font-medium text-slate-700 flex justify-end">
         <div className="flex flex-wrap gap-x-6 gap-y-1 container mx-auto max-w-7xl justify-end">
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">News</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
               <span>English</span>
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <Link href="#" className="hover:underline">Tax Pros</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:underline font-bold">
               <span>Sign in</span>
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
                   <span className="font-serif font-bold text-3xl sm:text-4xl tracking-tight block">IRS</span>
                 </div>
              </div>
              <nav className="hidden lg:flex gap-1 ml-8 text-[15px] font-bold">
                  {["File", "Pay", "Refunds", "Credits & Deductions", "Forms", "Report Fraud"].map((item) => (
                     <Link key={item} href="#" className="px-3 py-2 hover:underline decoration-2 underline-offset-4 whitespace-nowrap">{item}</Link>
                  ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex w-64">
               <div className="relative w-full">
                  <input type="text" placeholder="Search" className="w-full pl-3 pr-10 py-1.5 rounded-sm text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
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
           <div className="container mx-auto max-w-7xl px-4 py-2 text-[11px] text-[#005ea2] flex gap-2">
              <Link href="#" className="hover:underline">Home</Link> /
              <Link href="#" className="hover:underline">File</Link> /
              <Link href="#" className="hover:underline">Businesses and self-employed</Link> /
              <Link href="#" className="hover:underline">Employer ID numbers</Link> /
              <span className="text-gray-600">Get an employer identification number</span>
           </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white relative">
          <div className="container mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-4 gap-12">
            
            {/* Left Sidebar (Desktop) - Navigation */}
            <div className="hidden lg:block col-span-1 space-y-6 text-sm">
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">Individuals</h3>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">Businesses and self-employed</h3>
                   <ul className="space-y-2 pl-2 border-l-2 border-[#005ea2]">
                      <li className="text-gray-700 hover:underline cursor-pointer py-1">Business tax account</li>
                      <li className="bg-[#e6f1f9] text-gray-900 font-bold -ml-2.5 pl-2.5 py-1 border-l-4 border-[#005ea2]">Employer ID numbers</li>
                      <li className="text-gray-700 hover:underline cursor-pointer py-1">Business taxes</li>
                      <li className="text-gray-700 hover:underline cursor-pointer py-1">Business structures</li>
                      <li className="text-gray-700 hover:underline cursor-pointer py-1">Operating a business</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 pb-1 border-b-2 border-gray-900">Charities and nonprofits</h3>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-3 lg:col-span-2 space-y-6">
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-2">
                Get an employer identification number
              </h1>
              
              <div className="text-[13px] text-gray-600 space-x-2 flex items-center mb-6">
                  <span>English</span>
                  <span className="text-gray-300">|</span>
                  <Link href="#" className="text-[#005ea2] hover:underline">Español</Link>
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
                Use this tool to get an EIN directly from the IRS in minutes for free. Answer questions and submit the application. If it's approved, we'll issue your EIN immediately online.
              </p>
              
              <p className="text-base text-gray-800 leading-relaxed font-bold bg-yellow-50 p-4 border-l-4 border-yellow-400">
                Beware of websites that charge for an EIN. You never have to pay a fee for an EIN from the IRS.
              </p>

              {/* Main CTA Box */}
              <div className="my-8 border border-gray-300 shadow-lg rounded bg-white overflow-hidden">
                 <div className="bg-[#234E76] text-white p-4 text-center font-bold text-lg sm:text-xl tracking-wide">
                    APPLY FOR EIN – TAX-ID
                 </div>
                 <div className="p-6 sm:p-8 text-center space-y-6">
                    <p className="text-gray-700 text-base sm:text-lg">Get your Employer Identification Number (EIN) online today with our simple application process.</p>
                    <Link 
                       href="/apply" 
                       className="block w-full sm:w-auto sm:inline-block bg-[#005ea2] hover:bg-[#1a4480] text-white font-bold text-lg px-8 sm:px-12 py-4 rounded shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5"
                    >
                       APPLY ONLINE NOW
                    </Link>
                 </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">How it works</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-800 marker:text-gray-500">
                <li>Complete the application in one session. You can't save it for later.</li>
                <li>It expires after 15 minutes of inactivity, and you'll need to start over.</li>
                <li>Print your EIN confirmation letter for your records.</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Who can use this tool</h2>
              <p className="mb-4 text-gray-800">Use this if:</p>
              <ul className="list-disc pl-5 space-y-3 text-gray-800 marker:text-gray-500">
                <li>Your principal business is located in the U.S. or U.S. territories.</li>
                <li>You have a valid Taxpayer Identification Number (SSN, ITIN, EIN).</li>
                <li>You are the responsible party for the entity.</li>
              </ul>
            </div>
            
            {/* Right Sidebar - Related */}
            <div className="col-span-3 lg:col-span-1 border-l border-gray-200 pl-8 hidden lg:block">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Related</h3>
              <ul className="space-y-3 text-[#005ea2]">
                <li><Link href="#" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>Employer identification number</Link></li>
                <li><Link href="#" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>Privacy Act Statement and Paperwork Reduction Act Notice</Link></li>
                <li><Link href="#" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>Businesses with employees</Link></li>
                <li><Link href="#" className="hover:underline flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-[#005ea2] rounded-full flex-shrink-0"></span>EIN video <svg className="w-3 h-3 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link></li>
              </ul>

              <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded">
                 <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">EIN Services</h4>
                 <ul className="space-y-3 text-sm text-[#005ea2]">
                    <li className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Deactivate or Cancel</li>
                    <li className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> Lost / Misplaced Retrieval</li>
                    <li className="flex items-center gap-2 hover:underline cursor-pointer"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> Report Address Change</li>
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
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Our Agency</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">About IRS</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Operations & Budget</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Tax Statistics</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Whistleblower Office</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Civil Rights</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">FOIA Requests</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">No FEAR Act</Link></li>
                 </ul>
              </div>

              {/* Column 2: Know Your Rights */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Know Your Rights</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">Taxpayer Bill of Rights</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Taxpayer Advocate Service</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Inspector General for Tax Admin</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
                 </ul>
              </div>

              {/* Column 3: Resolve an Issue */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Resolve an Issue</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">Respond to a Notice</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Independent Office of Appeals</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Identity Theft Protection</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Report Phishing</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Tax Fraud Alert</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Victim Assistance</Link></li>
                 </ul>
              </div>

              {/* Column 4: Tax Pros */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Tax Pros</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">Tax Pro News</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Software Developers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Audit Techniques</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">E-Services</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Circular 230</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Enrolled Agents</Link></li>
                 </ul>
              </div>

              {/* Column 5: Forms & Instructions */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Forms & Instructions</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">Form 1040</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Form W-4</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Form W-9</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Form 1099-NEC</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Form 941</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">View All Forms</Link></li>
                 </ul>
              </div>

              {/* Column 6: Related Sites */}
              <div className="space-y-4">
                 <h5 className="font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 inline-block">Related Sites</h5>
                 <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-white transition-colors">U.S. Treasury</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">USA.gov</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Treasury Inspector General</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Taxpayer Advocate</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Direct File</Link></li>
                 </ul>
              </div>

           </div>

           {/* Middle Section: Agency Mission & Socials */}
           <div className="grid md:grid-cols-2 gap-12 py-12 border-t border-slate-800">
              <div>
                 <div className="flex items-center gap-3 mb-6 text-white">
                    <span className="font-serif font-bold text-3xl tracking-tight">IRS</span>
                    <span className="h-8 w-px bg-slate-600"></span>
                    <div className="flex flex-col leading-none">
                       <span className="font-medium text-slate-200 text-base">Department of the Treasury</span>
                       <span className="text-slate-400 text-xs tracking-wider uppercase mt-1">Internal Revenue Service</span>
                    </div>
                 </div>
                 <p className="max-w-md text-slate-400 text-sm leading-relaxed mb-8">
                    Our mission is to provide America's taxpayers top-quality service by helping them understand and meet their tax responsibilities and enforce the law with integrity and fairness to all.
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
                       <h6 className="font-bold text-white text-sm mb-2 uppercase tracking-wide">Authorized e-File Provider Service</h6>
                       <p className="leading-relaxed text-slate-400 text-xs mb-4">
                          We will generate a government-issued EIN for you. We are not officially affiliated with the Internal Revenue Service (IRS) or any government agency, but by going through this flow, we will get you your EIN emailed to you promptly.
                       </p>
                       <p className="text-slate-500 text-[10px]">
                          This service is provided to assist in the efficient processing of your application. All data is transmitted securely.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Bar: Copyright & Utility Links */}
           <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-6">
              <p>&copy; {new Date().getFullYear()} Internal Revenue Service. All rights reserved.</p>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                 <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-slate-300 transition-colors">Accessibility</Link>
                 <Link href="#" className="hover:text-slate-300 transition-colors">No FEAR Act</Link>
                 <Link href="#" className="hover:text-slate-300 transition-colors">USA.gov</Link>
                 <Link href="#" className="hover:text-slate-300 transition-colors">System Status</Link>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                 <span>Language:</span>
                 <select className="bg-slate-800 border-none text-slate-300 text-xs rounded py-1 px-2 focus:ring-1 focus:ring-slate-500 cursor-pointer">
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
