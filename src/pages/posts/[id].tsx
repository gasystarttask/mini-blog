import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { posts, Post } from "@blog-app/lib/posts";

interface Props {
  post: Post;
}

const PostPage: NextPage<Props> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((p) => ({ params: { id: p.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = posts.find((p) => p.id === params?.id) as Post;
  return { props: { post } };
};

export default PostPage;
