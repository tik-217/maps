import {
  L,
  useEffect,
  TileLayer,
  MapContainer,
  DrawingRoute,
  useAppSelector,
  mapWaypointsSelecor,
  IMapWaypointsElement,
} from "./index";

export default function Map() {
  const waypoints: IMapWaypointsElement[] = useAppSelector(mapWaypointsSelecor);

  useEffect(() => {
    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
  }, []);

  return (
    <>
      {waypoints && Object.keys(waypoints).length !== 0 && (
        <MapContainer>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DrawingRoute waypoints={waypoints} />
        </MapContainer>
      )}
    </>
  );
}
