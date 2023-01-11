export interface IInitialState {
  currentCoord: number[];
}

export interface IMapWaypointsElement {
  distance: number;
  hint: string;
  location: number[];
  name: string;
}
