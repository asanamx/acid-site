import './globals.css';

export const metadata = {
  title: 'ACID — Producción Multimedia High-End',
  description:
    'ACID · Academia de Cine Digital. Productora multimedia high-end para marcas de clase mundial: Land Rover, MTV, BBVA, Tec de Monterrey, Club Pachuca.',
  icons: { icon: '/brand/favicon.svg' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
