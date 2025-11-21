"use client";

import Link from "next/link";
import Image from "next/image";
import { useUIStore } from "@/lib/store/uiStore";
import { useProfileStore } from "@/lib/store/profileStore";
import { getCopy } from "@/lib/translations";

export function TopBar() {
  const { theme, toggleTheme, language, setLanguage } = useUIStore();
  const avatar = useProfileStore((state) => state.profile.avatar);
  const copy = getCopy(language);
  const themeText = theme === "light" ? copy.light : copy.dark;

  return (
    <header style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-strong)" }}>
      <div
        style={{
          maxWidth: 950,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 24px",
          gap: 16,
        }}
      >
        <Link href="/" style={{ fontWeight: 700, letterSpacing: 0.2 }}>
          {copy.brand}
        </Link>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button type="button" onClick={toggleTheme}>
            {copy.themeLabel}: {themeText}
          </button>

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>{copy.languageLabel}</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value as "ru" | "en")}>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </label>

          <Link href="/profile" style={{ display: "inline-flex", borderRadius: "50%", border: "1px solid var(--border)" }}>
            <Image
              src={avatar}
              alt="Profile"
              width={36}
              height={36}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
