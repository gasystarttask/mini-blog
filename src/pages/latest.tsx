import { GetServerSideProps, NextPage } from "next";
import { posts, Post } from "@blog-app/lib/posts";

interface Props {
  latestPost: Post;
}

const Latest: NextPage<Props> = ({ latestPost }) => (
  <>
    <h1>Latest Post</h1>
    <h2>{latestPost.title}</h2>
    <p>{latestPost.content}</p>
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const latestPost = posts[posts.length - 1];
  return { props: { latestPost } };
};

export default Latest;
