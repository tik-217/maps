// redux saga
import { takeEvery, call, all, put } from "redux-saga/effects";

// reducers
import { getMap, setMap } from "../reducers/rootReducer";

// types
import { IGetMapApiHandler, IMapWaypointsElement } from "../../../types";

// services
import { getMapApi } from "../../services/api";

export function* getMapApiHandler({ type, payload }: IGetMapApiHandler) {
  const mapData: IMapWaypointsElement[] = yield call(getMapApi, payload);
  yield put(setMap(mapData));
}

function* watchGetMapApiHandler() {
  yield takeEvery(getMap.type, getMapApiHandler);
}

export default function* rootSaga() {
  yield all([watchGetMapApiHandler()]);
}
