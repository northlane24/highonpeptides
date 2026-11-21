import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HighOnPeptides — The peptide industry. Decoded.',
  description: 'An independent guide to peptide science, research, regulation and industry developments.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
