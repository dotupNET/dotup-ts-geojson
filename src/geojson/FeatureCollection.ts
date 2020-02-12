import { Feature } from "./Feature";

export class FeatureCollection {
  bbox?: number[];
  features: Feature[];
  type: "FeatureCollection";
}
