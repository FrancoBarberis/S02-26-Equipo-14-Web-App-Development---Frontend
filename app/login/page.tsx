// app/login/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";
import type { SessionUser, Role } from "@/stores/auth-store";

export default function LoginPage() {
  // Si en tu store existe 'loading', podés leerlo; si no, dejalo comentado
  // const loading = useAuthStore((s) => s.loading ?? false);

  const login = useAuthStore((s) => s.login);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const router = useRouter();

  // Usuario de prueba solo para ver la UI cambiar
  const testSessionUser: SessionUser = {
    id: "1",
    name: "Franco",
    email: "francobarberissic3@gmail.com",
    role: "user" as Role,
    avatarUrl: null,
  };

  const handleLoginClick = (): void => {
    login({ user: testSessionUser, token: "1234" });
    console.log("Usuario logueado:", testSessionUser.name);
    // Redirigimos a home o a donde quieras:
    router.replace("/");
  };

  // Si implementás 'loading' con persist(), podés renderizar un placeholder:
  // if (loading) return <div className="p-6">Cargando…</div>;

  // Si ya está autenticado, opcional: redirigir
  if (isAuthenticated) {
    router.replace("/");
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold">Iniciar sesión</h1>
      <p className="mt-2 text-muted-foreground">
        Esto es un login de prueba que setea el estado en Zustand.
      </p>

      <div className="mt-6">
        <Button onClick={handleLoginClick}>Login demo</Button>
      </div>
    </div>
  );
}