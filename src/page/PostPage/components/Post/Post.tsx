import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deletePost, editStartPost } from "redux/post.reducer";
import { Post as PostType } from "types/Post";

type PostProp = PostType & { indexPost: string };

const Post = (props: PostProp) => {
  const dispatch = useDispatch();
  const { name, des, img, indexPost, createAt } = props;

  const handleDeletePost = (indexPost: string) => {
    dispatch(deletePost(indexPost));
  };

  const handleStartEditPost = (indexPost: string) => {
    dispatch(editStartPost(indexPost));
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="/">
        <img className="rounded-t-lg" src={img} alt="anime" />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        {createAt && (
          <p className="text-overflow mb-3 font-normal text-gray-700 dark:text-gray-400">
            {createAt}
          </p>
        )}
        <p className="text-overflow mb-3 font-normal text-gray-700 dark:text-gray-400">
          {des}
        </p>
        <div>
          <button
            className="mx-1 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              handleStartEditPost(indexPost);
            }}
          >
            Edit
          </button>
          <button
            className="mx-1 inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            onClick={() => {
              handleDeletePost(indexPost);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
