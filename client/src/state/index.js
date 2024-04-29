import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { io } from "socket.io-client";

const initialState = {
  mode: "white",
  user: null,
  token: null,
  posts: [],
  admin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.admin = false;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    // when we update/set the particular post
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload.admin;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setPosts,
  setPost,
  setUser,
  setAdmin,
} = authSlice.actions;

export default authSlice.reducer;
