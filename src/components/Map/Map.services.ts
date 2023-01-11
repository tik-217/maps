import { IMapWaypointsElement } from "../../../types";
import { order } from "../../services/orders";
import { useEffect, L, useMap } from "./index";

export function createUrlParam(coordId: number) {
  const coordinate = order[coordId];
  let latLangParamUrl = "";

  coordinate.forEach((el, i, array) => {
    if (array.length === i + 1) {
      latLangParamUrl += `${el}`;
    } else if (i % 2) {
      latLangParamUrl += `${el};`;
    } else {
      latLangParamUrl += `${el},`;
    }
  });

  return latLangParamUrl;
}

export function DrawingRoute({
  waypoints,
}: {
  waypoints: IMapWaypointsElement[];
}) {
  const map = useMap();

  useEffect(() => {
    if (!waypoints.length) return;

    const routing = L.Routing;

    const routingWaypoints = waypoints.map((el) =>
      L.latLng([el.location[0], el.location[1]])
    );

    routing
      .control({
        waypoints: routingWaypoints,
        show: false,
      })
      .addTo(map);

    routing
      .plan(routingWaypoints, {
        draggableWaypoints: false,
      })
      .addTo(map);
  }, [waypoints, map]);

  return null;
}
