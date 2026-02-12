'use client';

import { EINProvider } from '@/context/EINContext';
import ApplyPage from '@/components/apply/ApplyPage';

export default function ApplyRoute() {
  return (
    <EINProvider>
      <ApplyPage />
    </EINProvider>
  );
}
