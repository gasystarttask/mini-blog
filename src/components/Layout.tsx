import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Mini Blog</title>
      </Head>
      <nav className="flex gap-4 bg-white shadow p-4">
        <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
        <Link href="/" >Home</Link>
        <Link href="/about">About</Link>
        <Link href="/latest">Latest</Link>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
}
    