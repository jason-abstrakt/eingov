import { ShieldCheck, ArrowRight, FileText, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Official Banner */}
      <header className="bg-slate-100 border-b border-slate-200 py-2 px-4 text-xs font-medium text-slate-600 flex items-center justify-center sm:justify-start">
        <div className="flex items-center gap-2 container mx-auto max-w-5xl">
          <div className="h-3 w-5 bg-slate-200 flex flex-col border border-slate-300 overflow-hidden relative">
            <div className="h-1.5 w-full bg-blue-900 absolute top-0 left-0"></div>
             <div className="h-0.5 w-full bg-red-600 absolute bottom-0 left-0"></div>
          </div>
          <span>An official website of the United States government</span>
        </div>
      </header>

      {/* Main Navigation / Header */}
      <nav className="bg-white border-b border-slate-200 py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-us-blue text-white p-1.5 rounded-sm font-serif font-bold text-xl select-none">IRS</div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-us-blue font-serif">Department of the Treasury</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">INTERNAL REVENUE SERVICE</p>
            </div>
          </div>
          <div className="hidden md:flex text-sm font-medium text-slate-600 gap-6">
            <Link href="#" className="hover:text-us-blue transition-colors">Help & Support</Link>
            <Link href="#" className="hover:text-us-blue transition-colors">Language</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 transform skew-x-12 translate-x-12 z-0 hidden md:block"></div>
          <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                <ShieldCheck size={16} />
                <span>Secure & Authorized Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Apply for an Employer Identification Number (EIN)
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Start your business journey today. Our secure online assistant guides you through the process of obtaining your EIN quickly and easily.
              </p>
              
              <div className="pt-4 space-y-3">
                <Link 
                  href="/apply" 
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-md shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5 w-full md:w-auto justify-center"
                >
                  Apply for EIN Now
                  <ArrowRight size={20} />
                </Link>
                <p className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  System Online • Estimated time: 5-10 minutes
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hidden md:block">
              <h3 className="font-serif font-bold text-xl mb-6 text-slate-800 border-b border-slate-100 pb-4">Required Information</h3>
              <ul className="space-y-4">
                {[
                  "Legal name of the entity or individual",
                  "Trade name (Doing Business As) if applicable",
                  "Mailing address",
                  "SSN or ITIN of the responsible party"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-blue-50 text-blue-700 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <FileText size={14} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                 <div className="flex items-center gap-3 text-slate-500 text-xs bg-slate-50 p-3 rounded-md">
                    <Lock size={14} className="flex-shrink-0" />
                    <span>Your information is encrypted via 256-bit SSL technology.</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informational Sections */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
             <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-serif font-bold text-lg mb-3 text-us-blue">Who needs an EIN?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Most businesses need an EIN. If you have employees, operate as a corporation or partnership, or file certain tax returns, you must have an EIN.
                  </p>
                  <Link href="#" className="text-blue-700 text-sm font-medium hover:underline inline-flex items-center gap-1">Learn more about eligibility <ArrowRight size={12}/></Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-serif font-bold text-lg mb-3 text-us-blue">Daily Limitation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    The issuance of an EIN is limited to one per responsible party per day. This limitation applies to all requests for EINs whether online, by fax, or mail.
                  </p>
                  <Link href="#" className="text-blue-700 text-sm font-medium hover:underline inline-flex items-center gap-1">Read limitation details <ArrowRight size={12}/></Link>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-serif font-bold text-lg mb-3 text-us-blue">After Applying</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    You will receive your EIN immediately upon verification. You can download, save, and print your EIN confirmation notice.
                  </p>
                  <Link href="#" className="text-blue-700 text-sm font-medium hover:underline inline-flex items-center gap-1">View sample notice <ArrowRight size={12}/></Link>
                </div>
             </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-white py-16 border-y border-slate-200">
           <div className="container mx-auto max-w-5xl px-4">
              <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-8">
                 {[
                    { step: "1", title: "Identify", desc: "Select your legal structure (LLC, Corp, etc.)" },
                    { step: "2", title: "Authenticate", desc: "Verify your identity securely." },
                    { step: "3", title: "Details", desc: "Enter your business address and details." },
                    { step: "4", title: "Review", desc: "Confirm your information and submit." }
                 ].map((s, i) => (
                    <div key={i} className="text-center relative">
                       {i < 3 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-100 -z-10"></div>}
                       <div className="w-12 h-12 bg-us-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-900/20">
                          {s.step}
                       </div>
                       <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                       <p className="text-slate-500 text-sm">{s.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Legalese / Warning Section */}
        <section className="bg-slate-100 py-12">
           <div className="container mx-auto max-w-5xl px-4 text-slate-500 text-xs space-y-4 max-w-4xl mx-auto border-t border-slate-200 pt-8">
              <h4 className="font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-2">Important Information & Disclaimers</h4>
              <p>
                <strong>Authorized Use Only:</strong> This is a U.S. government computer system, which may be accessed and used only for authorized government business by authorized personnel. Unauthorized access or use of this computer system may subject violators to criminal, civil, and/or administrative action.
              </p>
              <p>
                <strong>Privacy Act Statement:</strong> Under the Privacy Act of 1974, we must tell you that our legal right to ask for information is Internal Revenue Code Sections 6001, 6011, and 6012(a), and their regulations. We ask for the information to identify you and your account and to process your application.
              </p>
              <p>
                <strong>Paperwork Reduction Act Notice:</strong> We ask for the information on this form to carry out the Internal Revenue laws of the United States. You are required to give us the information. We need it to ensure that you are complying with these laws and to allow us to figure and collect the right amount of tax.
              </p>
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
