import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addPost, cancelEditPost, editEndPost } from "redux/post.reducer";
import { RootState } from "redux/store";
import { Post } from "types/Post";

const initialPost: Post = { name: "", des: "", img: "" };

const FormPost = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState<Post>(initialPost);
  const editPost = useSelector(
    (state: RootState) => state.postReducer.editPost
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editPost) {
      dispatch(
        editEndPost({ newPost: post, indexPost: String(editPost.indexPost) })
      );
    } else {
      dispatch(addPost(post));
    }
    setPost(initialPost);
  };

  useEffect(() => {
    editPost ? setPost(editPost) : setPost(initialPost);
  }, [editPost]);

  const handleCancel = () => {
    dispatch(cancelEditPost());
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleCancel}>
      <div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={post?.name}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={(event) =>
              setPost((pre) => ({ ...pre, name: event.target.value }))
            }
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="imgLink"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Imge Link
          </label>
          <input
            type="text"
            id="imgLink"
            value={post?.img}
            onChange={(event) =>
              setPost((pre) => ({ ...pre, img: event.target.value }))
            }
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="des"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="des"
            value={post?.des}
            onChange={(event) =>
              setPost((pre) => ({ ...pre, des: event.target.value }))
            }
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
      </div>
      {!editPost ? (
        <button
          type="submit"
          className="transition-all-btn mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          Create a new post
        </button>
      ) : (
        <div className="flex items-center">
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Edit a post
          </button>
          <button
            type="reset"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400"
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default FormPost;
