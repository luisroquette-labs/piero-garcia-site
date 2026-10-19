import Link from "next/link";
import type { Post } from "../app/posts";
import { BASE } from "../app/base";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <img className="cover" src={`${BASE}/${post.cover}`} alt="" loading="lazy" />
      <div className="pc-body">
        <span className="pc-cat">{post.category}</span>
        <h3>{post.title}</h3>
        <p className="pc-ex">{post.excerpt}</p>
        <span className="pc-meta">
          {new Date(post.date + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })} · {post.readMin} min
        </span>
      </div>
    </Link>
  );
}
