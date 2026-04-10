import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Willis-West Plumbing & Heating | AI Receptionist Demo',
  description: 'Glasgow’s trusted plumbing & heating specialists — boiler installs, repairs, and 24/7 service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
