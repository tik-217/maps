// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

// types
import { IMapWaypointsElement } from "../../../types";

const rootReducer = createSlice({
  name: "requester",
  initialState,
  reducers: {
    getMap(_, action: PayloadAction<string>) {},
    setMap(state, action: PayloadAction<IMapWaypointsElement[]>) {
      state.mapData = action.payload;
    },
    setCoordId(state, action: PayloadAction<number>) {
      state.coordId = action.payload;
    },
  },
});

export const { setCoordId, getMap, setMap } = rootReducer.actions;

export default rootReducer.reducer;
