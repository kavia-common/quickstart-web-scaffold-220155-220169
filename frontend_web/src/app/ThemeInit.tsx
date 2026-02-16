"use client";

import { useEffect } from "react";
import { initThemeFromStorage } from "@/lib/theme";

// PUBLIC_INTERFACE
export default function ThemeInit() {
  /** Initializes the persisted retro theme (light/dark) on the client. */
  useEffect(() => {
    initThemeFromStorage();
  }, []);

  return null;
}
