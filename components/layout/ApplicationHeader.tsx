'use client';

import { FileText } from 'lucide-react';

export default function ApplicationHeader() {
  return (
    <header className="bg-us-dark-blue text-white py-4 px-6 shadow-md">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <FileText className="h-6 w-6 text-us-gold flex-shrink-0" />
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            EIN / Tax ID Application
          </h1>
          <p className="text-xs text-blue-200 -mt-0.5">IRS Form SS-4</p>
        </div>
      </div>
    </header>
  );
}
