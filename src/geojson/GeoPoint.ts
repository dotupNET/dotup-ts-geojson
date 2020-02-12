import { PositionCoordinates } from "./GeoJsonTypes";
import { Geometry } from "./Geometry";

export class GeoPoint extends Geometry {
  constructor(coordinates: PositionCoordinates);
  constructor(lon: number, lat: number);
  constructor(lon: number, lat: number, alt: number);
  constructor(lonOrCoordinates: number | PositionCoordinates, lat?: number, alt?: number) {
    super(Array.isArray(lonOrCoordinates) ? lonOrCoordinates : [lonOrCoordinates, lat, alt]);
  }
  coordinates: PositionCoordinates;
  type: "Point";
}
