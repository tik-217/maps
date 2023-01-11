// react
import React, { useEffect, useRef, useState } from "react";

// style
import "./Map.style.scss";

// services
import { createUrlParam, DrawingRoute } from "./Map.services";
import { useGetMapDataQuery } from "../../services/api";

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

export {
  L,
  React,
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
  createUrlParam,
  useGetMapDataQuery,
};
