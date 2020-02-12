import { GeoPoint } from "./geojson/GeoPoint";
import { GeoMultiPoint } from "./geojson/GeoMultiPoint";

export class Sample {

  async run(): Promise<void> {

    const point: GeoPoint = {
      type: "Point",
      coordinates: [1, 2]
    }

    const p2 = new GeoPoint(1, 3);

    const mp: GeoMultiPoint = {
      type: "MultiPoint",
      coordinates: [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    }


  }

}

const sample = new Sample();
sample.run();
