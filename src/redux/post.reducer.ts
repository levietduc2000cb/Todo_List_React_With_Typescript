import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Post } from "types/Post";

let initialValue: Post[] = [
  {
    name: "Anime",
    des: "Dưới nét vẽ của nhà thiết kế Nguyễn Quang Thịnh (33 tuổi), những địa danh tại Việt Nam được tái hiện tươi đẹp, độc đáo trong bộ tranh mang ‘hơi thở’ hoạt hình Nhật Bản (anime).",
    img: "https://images2.thanhnien.vn/Uploaded/duyphuc/2022_06_16/anh-2-3761.jpg",
  },
  {
    name: "Anime",
    des: "Dưới nét vẽ của nhà thiết kế Nguyễn Quang Thịnh (33 tuổi), những địa danh tại Việt Nam được tái hiện tươi đẹp, độc đáo trong bộ tranh mang ‘hơi thở’ hoạt hình Nhật Bản (anime).",
    img: "https://images2.thanhnien.vn/Uploaded/duyphuc/2022_06_16/anh-4-9169.jpg",
  },
  {
    name: "Anime",
    des: "Dưới nét vẽ của nhà thiết kế Nguyễn Quang Thịnh (33 tuổi), những địa danh tại Việt Nam được tái hiện tươi đẹp, độc đáo trong bộ tranh mang ‘hơi thở’ hoạt hình Nhật Bản (anime).",
    img: "https://images2.thanhnien.vn/Uploaded/duyphuc/2022_06_16/anh-3-3665.jpg",
  },
  {
    name: "Anime",
    des: "Dưới nét vẽ của nhà thiết kế Nguyễn Quang Thịnh (33 tuổi), những địa danh tại Việt Nam được tái hiện tươi đẹp, độc đáo trong bộ tranh mang ‘hơi thở’ hoạt hình Nhật Bản (anime).",
    img: "https://images2.thanhnien.vn/Uploaded/duyphuc/2022_06_16/anh-5-9097.jpg",
  },
  {
    name: "Anime",
    des: "Dưới nét vẽ của nhà thiết kế Nguyễn Quang Thịnh (33 tuổi), những địa danh tại Việt Nam được tái hiện tươi đẹp, độc đáo trong bộ tranh mang ‘hơi thở’ hoạt hình Nhật Bản (anime).",
    img: "https://images2.thanhnien.vn/Uploaded/duyphuc/2022_06_16/anh-6-5644.jpg",
  },
];

type EditPost = Post & { indexPost?: string };

interface PostList {
  postList: Post[];
  editPost: EditPost | null;
}

const initialState: PostList = {
  postList: initialValue,
  editPost: null,
};

interface PayloadEditPost {
  newPost: Post;
  indexPost: string;
}

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.postList.push(action.payload);
      },
      prepare: (action) => {
        return {
          payload: {
            ...action,
            createAt: new Date().toISOString(),
          },
        };
      },
    },
    editStartPost: (state, action: PayloadAction<string>) => {
      state.editPost = {
        ...state.postList[Number(action.payload)],
        indexPost: action.payload,
      };
    },
    editEndPost: (state, action: PayloadAction<PayloadEditPost>) => {
      state.postList.splice(
        Number(action.payload.indexPost),
        1,
        action.payload.newPost
      );
      state.editPost = null;
    },
    cancelEditPost: (state, action: PayloadAction) => {
      state.editPost = null;
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.postList.splice(Number(action.payload), 1);
    },
  },
});
export const {
  addPost,
  editStartPost,
  editEndPost,
  cancelEditPost,
  deletePost,
} = postSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer;
