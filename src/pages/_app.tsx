import "@blog-app/app/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav style={{ padding: "1rem" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/posts-client">Posts (Client)</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}