export interface IMapWaypointsElement {
  distance: number;
  hint: string;
  location: number[];
  name: string;
}

export interface IInitialState {
  coordId: number;
  mapData: IMapWaypointsElement[];
}

export interface IMapWaypoints {
  waypoints: IMapWaypointsElement[];
}

export interface IGetMapApiHandler {
  type: string;
  payload: string;
}
