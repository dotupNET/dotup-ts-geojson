import { Feature } from "./Feature";

export interface FeatureCollection {
  bbox?: number[];
  features: Feature[];
  type: "FeatureCollection";
}
