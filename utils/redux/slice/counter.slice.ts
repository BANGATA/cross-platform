import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterRedux",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
