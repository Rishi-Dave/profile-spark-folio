import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Paper / terminal toggle. Mirrors the no-flash script in index.html: reads the
 * current `.dark` class on mount (set before paint), toggles + persists choice.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to paper (light) theme" : "Switch to terminal (dark) theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal hover:text-signal focus-visible:text-signal"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
