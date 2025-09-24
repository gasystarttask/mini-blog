import Link from "next/link";
import { posts } from "@blog-app/lib/posts";

export default function Home() {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
