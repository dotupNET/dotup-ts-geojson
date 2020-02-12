import { MultiPositionCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoMultiLineString extends Geometry {
  constructor(coordinates: MultiPositionCoordinates) {
    super(coordinates);
  }
  coordinates: MultiPositionCoordinates;
  type: "MultiLineString";
}
