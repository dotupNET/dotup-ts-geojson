import { Geometry } from "./Geometry";
import { ITypedProperty } from "dotup-ts-types";

export interface Feature {
  bbox?: number[];
  geometry?: Geometry;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: ITypedProperty<any> | null;
  type: "Feature";
}
