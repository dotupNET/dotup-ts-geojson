import { MultiPolygonCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoMultiPolygon extends Geometry {
  constructor(coordinates?: MultiPolygonCoordinates) {
    super(coordinates);
  }
  coordinates: MultiPolygonCoordinates;
  type: "MultiPolygon";
}