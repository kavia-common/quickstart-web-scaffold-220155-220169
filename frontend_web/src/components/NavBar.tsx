"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  applyThemePreferenceToDocument,
  getStoredThemePreference,
  setStoredThemePreference,
  type ThemePreference,
} from "@/lib/theme";

function getNextPref(current: ThemePreference): ThemePreference {
  // Keep it simple: toggle between light and dark.
  // (We still support "system" in the library in case we want to add it later.)
  return current === "dark" ? "light" : "dark";
}

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Top navigation bar with links to core pages (Home/About) plus a retro theme toggle. */
  const [pref, setPref] = useState<ThemePreference>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration-safe: load stored pref only on client.
    const stored = getStoredThemePreference();
    setPref(stored === "system" ? "light" : stored); // normalize to a simple toggle UX
    applyThemePreferenceToDocument(stored === "system" ? "light" : stored);
    setMounted(true);
  }, []);

  const label = useMemo(() => {
    if (!mounted) return "Theme";
    return pref === "dark" ? "Dark" : "Light";
  }, [mounted, pref]);

  return (
    <header className="navShell">
      <div className="navInner">
        <Link className="brand" href="/">
          Quickstart//Retro
        </Link>

        <nav aria-label="Primary" className="navLinks">
          <Link className="navLink" href="/">
            Home
          </Link>
          <Link className="navLink" href="/about">
            About
          </Link>

          <button
            className="themeToggle"
            type="button"
            aria-label={mounted ? `Switch theme (currently ${label})` : "Switch theme"}
            title={mounted ? `Switch theme (currently ${label})` : "Switch theme"}
            onClick={() => {
              const next = getNextPref(pref === "system" ? "light" : pref);
              setPref(next);
              setStoredThemePreference(next);
              applyThemePreferenceToDocument(next);
            }}
          >
            <span className="themeToggleLabel">Theme</span>
            <span className="themeToggleValue">{label}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
