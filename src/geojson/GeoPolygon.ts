import { MultiPositionCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoPolygon extends Geometry {
  constructor(coordinates: MultiPositionCoordinates) {
    super(coordinates);
  } bbox?: number[];
  coordinates: MultiPositionCoordinates;
  type: "Polygon";
}