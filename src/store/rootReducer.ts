import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const rootReducer = createSlice({
  name: "requester",
  initialState,
  reducers: {
    currentCoord(state, action: PayloadAction<number[]>) {
      state.currentCoord = action.payload;
    },
  },
});

export const { currentCoord } = rootReducer.actions;

export default rootReducer.reducer;
