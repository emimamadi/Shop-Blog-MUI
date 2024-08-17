import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { useAppSelector } from "./store";

import _ from "lodash";

export const BlogData = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("product/FetchProduct", async (_, thunkAPI) => {
  const response = await fetch("https://dummyjson.com/posts?limit=15", {
    method: "GET",
  });

  const data = response.json();

  return data;
});

interface IssuesState {
  data: string[];
}
const initialState: IssuesState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [""],
    loading: false,
    error: null,
  },
  reducers: {
    getData: (state) => {
      console.log("blog 1111== > ", state.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(BlogData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      BlogData.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;

        state.data = Object.values(action.payload);
      }
    );
  },
});

export const { getData } = cartSlice.actions;

export default cartSlice.reducer;
