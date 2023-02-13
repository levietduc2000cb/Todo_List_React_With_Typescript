import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Post from "../Post";

const PostList = () => {
  const postList = useSelector(
    (state: RootState) => state.postReducer.postList
  );

  return (
    <div className="grid grid-cols-none gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
      {postList?.map((post, index) => {
        return (
          <Post
            name={post.name}
            img={post.img}
            des={post.des}
            key={index}
            indexPost={index.toString()}
          />
        );
      })}
    </div>
  );
};

export default PostList;
