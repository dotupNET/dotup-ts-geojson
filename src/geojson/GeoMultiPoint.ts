import { PositionArrayCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoMultiPoint extends Geometry {
  constructor(coordinates: PositionArrayCoordinates) {
    super(coordinates);
  }
  coordinates: PositionArrayCoordinates;
  type: "MultiPoint";
}
