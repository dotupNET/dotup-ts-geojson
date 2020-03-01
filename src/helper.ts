import { GeoPoint } from "./geojson/GeoPoint";
import { PropertyNamesOnly } from "@dotup/dotup-ts-types";
import { Geometry } from "./geojson/Geometry";
import { GeoPolygon } from "./geojson/GeoPolygon";
import { GeoMultiPolygon } from "./geojson/GeoMultiPolygon";
import { GeoMultiPoint } from "./geojson/GeoMultiPoint";
import { GeoLineString } from "./geojson/GeoLineString";
import { GeoMultiLineString } from "./geojson/GeoMultiLineString";
import { GeoCoordinate } from "./GeoCoordinate";

function implementsKeys<T>(obj: any, keys: PropertyNamesOnly<T>): obj is T {
  if (!obj || !Array.isArray(keys)) {
    return false;
  }
  const implementKeys = keys.reduce((impl, key) => impl && key in obj, true);
  return implementKeys;
}

function isGeoGeometryType(instance: Geometry, key: string): boolean {
  return instance.type === key;
}

export function instanceOfGeoPoint(instance: any): instance is GeoPoint {
  return instance.type === "Point";
}

export function instanceOfGeoMultiPoint(instance: any): instance is GeoMultiPoint {
  return instance.type === "MultiPoint";
}

export function instanceOfGeoPolygon(instance: any): instance is GeoPolygon {
  return instance.type === "Polygon";
}

export function instanceOfGeoMultiPolygon(instance: any): instance is GeoMultiPolygon {
  return instance.type === "MultiPolygon";
}

export function instanceOfGeoLineString(instance: any): instance is GeoLineString {
  return instance.type === "LineString";
}

export function instanceOfGeoMultiLineString(instance: any): instance is GeoMultiLineString {
  return instance.type === "MultiLineString";
}

export function instanceOfGeoCoordinate(object: any): object is GeoCoordinate {
  return "lat" in object && "lon" in object;
}
