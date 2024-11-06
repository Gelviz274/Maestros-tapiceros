// pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-4/5 bg-black z-50">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Página no encontrada</h2>
            <p className="text-center text-gray-500 mb-8">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link href="/">
                <p className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Volver al inicio
                </p>
            </Link>
        </div>
    );
}
