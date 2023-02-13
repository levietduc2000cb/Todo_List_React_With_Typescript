import FormPost from "./components/FormPost";
import PostList from "./components/PostList";

const PostPage = () => {
  return (
    <section className="pb-10">
      <FormPost />
      <PostList />
    </section>
  );
};

export default PostPage;
