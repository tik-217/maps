import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coordinate = createApi({
  reducerPath: "coordinate",
  tagTypes: ["Coordinate"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://router.project-osrm.org/",
  }),
  endpoints: (build) => ({
    getMapData: build.query({
      query: (coordinate) =>
        `route/v1/driving/${coordinate}?steps=true&geometries=geojson`,
    }),
  }),
});

export const { useGetMapDataQuery } = coordinate;
