"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Role = "guest" | "user" | "admin";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
};

type AuthState = {
  user: SessionUser | null;
  token: string | null; // si usás JWT o similar
  isAuthenticated: boolean;
  loading: boolean;     // útil para hidratar estado/persistencia
};

type AuthActions = {
  login: (payload: { user: SessionUser; token?: string }) => void;
  logout: () => void;
  setLoading: (v: boolean) => void;
  // atajos
  isAdmin: () => boolean;
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: true, // true hasta que hidrata

      login: ({ user, token }) =>
        set({
          user,
          token: token ?? null,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      setLoading: (v: boolean) => set({ loading: v }),

      isAdmin: () => get().user?.role === "admin",
    }),
    {
      name: "auth-storage", // clave en localStorage
      storage: createJSONStorage(() => localStorage),
      // Sólo persistimos lo necesario
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        // Al terminar de hidratar, apagamos loading
        state?.setLoading(false);
      },
    }
  )
);