import { Geometry } from "./Geometry";
import { ITypedProperty } from "@dotup/dotup-ts-types";

export class Feature {
  bbox?: number[];
  geometry?: Geometry;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: ITypedProperty<any> | null;
  type: "Feature";
}
