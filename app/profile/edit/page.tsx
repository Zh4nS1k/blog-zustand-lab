"use client";

import { useProfileStore } from "@/lib/store/profileStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/lib/store/uiStore";
import { getCopy } from "@/lib/translations";

export default function EditProfilePage() {
  const router = useRouter();

  const profile = useProfileStore((state) => state.profile);
  const updateProfile = useProfileStore((state) => state.updateProfile);
  const language = useUIStore((state) => state.language);
  const copy = getCopy(language);

  const [form, setForm] = useState({
    avatar: profile.avatar,
    firstName: profile.firstName,
    lastName: profile.lastName,
    birthDate: profile.birthDate,
    role: profile.role,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function save() {
    updateProfile(form);
    router.push("/profile");
  }

  return (
    <div className="card" style={{ maxWidth: 540, margin: "0 auto", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
      <h1 style={{ fontSize: 26 }}>{copy.editProfileTitle}</h1>

      <label>
        {copy.avatar}:
        <input name="avatar" type="text" value={form.avatar} onChange={handleChange} style={{ marginTop: 6 }} />
      </label>

      <label>
        {copy.firstName}:
        <input name="firstName" type="text" value={form.firstName} onChange={handleChange} style={{ marginTop: 6 }} />
      </label>

      <label>
        {copy.lastName}:
        <input name="lastName" type="text" value={form.lastName} onChange={handleChange} style={{ marginTop: 6 }} />
      </label>

      <label>
        {copy.birthDate}:
        <input name="birthDate" type="date" value={form.birthDate} onChange={handleChange} style={{ marginTop: 6 }} />
      </label>

      <label>
        {copy.role}:
        <select name="role" value={form.role} onChange={handleChange} style={{ marginTop: 6 }}>
          <option value="student">{copy.roles.student}</option>
          <option value="developer">{copy.roles.developer}</option>
          <option value="designer">{copy.roles.designer}</option>
          <option value="manager">{copy.roles.manager}</option>
        </select>
      </label>

      <button
        onClick={save}
        style={{
          padding: "12px 16px",
          background: "var(--accent)",
          color: "var(--accent-contrast)",
          border: "none",
          fontWeight: 600,
          marginTop: 12,
        }}
      >
        {copy.save}
      </button>
    </div>
  );
}
