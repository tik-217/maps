// axios
import axios from "axios";

export async function getMapApi(urlCoordinate: string) {
  const params = {
    steps: true,
    geometries: "geojson",
  };

  return await axios({
    method: "get",
    url: `https://router.project-osrm.org/route/v1/driving/${urlCoordinate}`,
    params,
  })
    .then(({ data }) => data.waypoints)
    .catch((err) => err);
}
