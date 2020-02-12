import { GpsDate } from "./gps/GpsDate";
import { GeoCoordinate } from "./GeoCoordinate";
import { GeoPoint } from "./geojson/GeoPoint";
import { instanceOfGeoPoint } from "./helper";

export class GeoConverter {

  static toGeoCoordinate(point: GeoPoint): GeoCoordinate;
  static toGeoCoordinate(gps: GpsDate): GeoCoordinate;

  static toGeoCoordinate(pointOrGps: GeoPoint | GpsDate): GeoCoordinate {
    if (instanceOfGeoPoint(pointOrGps)) {
      return this.GeoPointToGeoCoordinate(pointOrGps);
    } else {
      return this.GpsDateToGeoCoordinate(pointOrGps);
    }
  }

  static GpsDateToGeoCoordinate(gps: GpsDate): GeoCoordinate {
    if (gps.GPSLongitude === undefined || gps.GPSLatitude === undefined) {
      return undefined;
    }

    const exifLong = gps.GPSLongitude;
    const exifLongRef = gps.GPSLongitudeRef;
    const exifLat = gps.GPSLatitude;
    const exifLatRef = gps.GPSLatitudeRef;
    let latitude = undefined;
    let longitude = undefined;

    if (exifLatRef == "S") {
      latitude = (exifLat[0] * -1) + (((exifLat[1] * -60) + (exifLat[2] * -1)) / 3600);
    } else {
      latitude = exifLat[0] + (((exifLat[1] * 60) + exifLat[2]) / 3600);
    }

    if (exifLongRef == "W") {
      longitude = (exifLong[0] * -1) + (((exifLong[1] * -60) + (exifLong[2] * -1)) / 3600);
    } else {
      longitude = exifLong[0] + (((exifLong[1] * 60) + exifLong[2]) / 3600);
    }

    return {
      lat: latitude,
      lon: longitude
    };
  }

  static GeoPointToGeoCoordinate(point: GeoPoint): GeoCoordinate {
    const result: GeoCoordinate = { lon: point.coordinates[0], lat: point.coordinates[1] };
    if (point.coordinates.length > 2) {
      result.alt = point.coordinates[2];
    }
    return result;
  }

}
