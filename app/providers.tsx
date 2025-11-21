"use client";

import { useEffect } from "react";
import { useUIStore } from "@/lib/store/uiStore";

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme, language } = useUIStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
