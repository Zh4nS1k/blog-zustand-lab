"use client";

import { useProfileStore } from "@/lib/store/profileStore";
import { getAge } from "@/lib/store/getAge";
import { useUIStore } from "@/lib/store/uiStore";
import { getCopy } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const profile = useProfileStore((state) => state.profile);
  const language = useUIStore((state) => state.language);
  const copy = getCopy(language);
  const router = useRouter();

  const age = getAge(profile.birthDate);

  return (
    <div className="card" style={{ maxWidth: 520, margin: "0 auto", padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: 26 }}>{copy.profileTitle}</h1>
        <button type="button" onClick={() => router.back()} style={{ padding: "8px 12px" }}>
          ← {copy.back}
        </button>
      </div>

      <Image
        src={profile.avatar}
        width={150}
        height={150}
        alt={profile.firstName}
        style={{ borderRadius: "50%", border: `3px solid var(--border)`, objectFit: "cover" }}
      />

      <div>
        <strong>{copy.firstName}:</strong> {profile.firstName}
      </div>

      <div>
        <strong>{copy.lastName}:</strong> {profile.lastName}
      </div>

      <div>
        <strong>{copy.birthDate}:</strong> {profile.birthDate}
      </div>

      <div>
        <strong>{copy.age}:</strong> {age ?? copy.unknown}
      </div>

      <div>
        <strong>{copy.role}:</strong> {copy.roles[profile.role]}
      </div>

      <Link
        href="/profile/edit"
        style={{
          padding: "12px 16px",
          background: "var(--accent)",
          color: "var(--accent-contrast)",
          borderRadius: 10,
          textAlign: "center",
          width: "fit-content",
          marginTop: 8,
          fontWeight: 600,
          boxShadow: "var(--card-shadow)",
        }}
      >
        {copy.editProfileCta}
      </Link>
    </div>
  );
}
