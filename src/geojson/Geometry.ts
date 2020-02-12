import { GeoGeometryType, GeoCoordinates } from "./GeoJsonTypes";

export class Geometry {
  constructor(coordinates?: GeoCoordinates) {
    this.coordinates = coordinates;
  }
  bbox?: number[];
  coordinates: GeoCoordinates;
  type: GeoGeometryType;
}
