// react
import { useEffect, useRef, useState } from "react";

// style
import "./Map.style.scss";

// services
import { DrawingRoute, createUrlParam } from "./Map.services";
import { order } from "../../services/orders";

// leaflet
import L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";

// react leafelt
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  FeatureGroup,
} from "react-leaflet";

// Leafelt Routing Machine
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// types
import { IMapWaypointsElement, IMapWaypoints } from "../../../types";

// redux
import { mapWaypointsSelecor } from "../../store/selectors/selectors";
import { useAppSelector } from "../../store/store";

export {
  L,
  order,
  Popup,
  Marker,
  useMap,
  useRef,
  useState,
  useEffect,
  TileLayer,
  FeatureGroup,
  MapContainer,
  DrawingRoute,
  useAppSelector,
  createUrlParam,
  mapWaypointsSelecor,
};
export type { IMapWaypointsElement, IMapWaypoints };
