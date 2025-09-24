import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Mini Blog</title>
      </Head>
      <nav className="bg-white shadow p-4">
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4 ">About</Link>
        <Link href="/latest">Latest</Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
