import type { NextApiRequest, NextApiResponse } from "next";
import { posts, Post } from "@blog-app/lib/posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(posts);
}
