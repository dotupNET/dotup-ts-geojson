import { Geometry } from "./Geometry";

export class GeometryCollection{
  bbox?: number[];
  geometries: Geometry[];
  type: "GeometryCollection";
}