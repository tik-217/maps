// react
import { useEffect } from "react";

// styles
import "./Requester.style.scss";

// components
import Map from "../Map/Map";

// services
import { order } from "../../services/orders";
import { removeActiveBackground } from "./Requester.services";
import { createUrlParam } from "../Map";

// Antd
import { Table } from "antd";
import "antd/dist/reset.css";

// redux
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCoordId, getMap } from "../../store/reducers/rootReducer";
import { coordIdSelector } from "../../store/selectors/selectors";

export {
  Map,
  Table,
  order,
  getMap,
  useEffect,
  setCoordId,
  useAppSelector,
  useAppDispatch,
  coordIdSelector,
  createUrlParam,
  removeActiveBackground,
};
