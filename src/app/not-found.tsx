'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Página no encontrada
      </p>
      <div>
        <Link 
          href="/" 
          className="glass-effect px-6 py-3 rounded-full hover-scale inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
} 