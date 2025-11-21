import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const numericId = parseInt(id.split("-")[0] ?? id, 10);
  const post = posts.find((p) => p.id === numericId);

  if (!post) return notFound();

  return (
    <article
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 24,
        maxWidth: 850,
        margin: "0 auto",
      }}
    >
      <h1>{post.title}</h1>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src={post.author.avatar}
          width={50}
          height={50}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          alt={post.author.name}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{post.author.name}</div>
          <small style={{ color: "var(--muted)" }}>{post.date}</small>
        </div>
      </div>

      <Image
        src={post.image}
        alt={post.title}
        width={740}
        height={360}
        sizes="(min-width: 900px) 740px, 100vw"
        style={{ width: "100%", height: "auto", maxWidth: 740, borderRadius: 12, objectFit: "cover" }}
      />

      <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--muted)" }}>{post.fullText}</p>
    </article>
  );
}
