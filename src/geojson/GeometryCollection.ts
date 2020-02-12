import { Geometry } from "./Geometry";

export interface GeometryCollection{
  bbox?: number[];
  geometries: Geometry[];
  type: "GeometryCollection";
}