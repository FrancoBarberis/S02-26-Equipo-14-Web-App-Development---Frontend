// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="grid min-h-dvh place-items-center p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">404 — Página no encontrada</h1>
                <p className="mt-2 text-gray-500">
                    La ruta que buscás no existe o fue movida.
                </p>
                <Link href="/">
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}