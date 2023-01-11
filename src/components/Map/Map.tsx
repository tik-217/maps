import {
  React,
  useGetMapDataQuery,
  createUrlParam,
  useEffect,
  L,
  MapContainer,
  TileLayer,
  DrawingRoute,
} from "./index";

export default React.memo(function Map({ coordId }: { coordId: number }) {
  const { data: map, error } = useGetMapDataQuery(createUrlParam(coordId));

  useEffect(() => {
    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
  }, []);

  if (error) console.log(error);

  return (
    <>
      {map && (
        <MapContainer>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DrawingRoute waypoints={map.waypoints} />
        </MapContainer>
      )}
    </>
  );
});
