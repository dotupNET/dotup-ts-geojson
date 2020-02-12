import { PositionArrayCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoLineString extends Geometry {
  constructor(coordinates: PositionArrayCoordinates) {
    super(coordinates);
  }
  coordinates: PositionArrayCoordinates;
  type: "LineString";
}
