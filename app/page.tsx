"use client";

import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";
import { useUIStore } from "@/lib/store/uiStore";
import { getCopy } from "@/lib/translations";

export default function HomePage() {
  const language = useUIStore((state) => state.language);
  const copy = getCopy(language);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <p style={{ color: "var(--muted)", fontSize: 14, letterSpacing: 0.3 }}>{copy.brand}</p>
        <h1 style={{ fontSize: 28, letterSpacing: -0.5 }}>{copy.blogsHeading}</h1>
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="card"
            style={{
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h2 style={{ fontSize: 20, lineHeight: "28px" }}>{post.title}</h2>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={42}
                height={42}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{post.author.name}</div>
                <small style={{ color: "var(--muted)" }}>{post.date}</small>
              </div>
            </div>

            <p style={{ color: "var(--muted)", lineHeight: "24px" }}>{post.previewText}</p>

            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              sizes="(min-width: 900px) 600px, 100vw"
              style={{ width: "100%", height: "auto", borderRadius: 12, marginTop: 4, objectFit: "cover" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
