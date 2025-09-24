export interface Post {
    id: string;
    title: string;
    content: string;
}

export const posts: Post[] = [
  { id: "1", title: "First Post", content: "Hello Next.js" },
  { id: "2", title: "Second Post", content: "Welcome to the blog" },
  { id: "3", title: "Third Post", content: "Learning Next.js is fun" },
];