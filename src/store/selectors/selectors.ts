import { RootState } from "../store";

export const mapWaypointsSelecor = (state: RootState) =>
  state.rootReducer.mapData;
export const coordIdSelector = (state: RootState) => state.rootReducer.coordId;