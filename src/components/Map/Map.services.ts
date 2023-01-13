import { useEffect, L, useMap, order, IMapWaypoints } from "./index";

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

export function DrawingRoute({ waypoints }: IMapWaypoints) {
  const map = useMap();
  const routing = L.Routing;

  function clearingMap(control: L.Routing.Control) {
    control.getPlan().setWaypoints([]);

    const markersDOMElement = document.querySelector(".leaflet-marker-pane");
    const markersShadow = document.querySelector(".leaflet-shadow-pane");

    if (markersDOMElement && markersShadow) {
      markersDOMElement.innerHTML = "";
      markersShadow.innerHTML = "";
    }
  }

  useEffect(() => {
    if (!waypoints.length) return;

    const routingWaypoints = waypoints.map((el) =>
      L.latLng([el.location[0], el.location[1]])
    );

    let control = routing
      // eslint-disable-next-line
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

    return function () {
      clearingMap(control);
    };
    // eslint-disable-next-line
  }, [waypoints, map]);

  return null;
}
