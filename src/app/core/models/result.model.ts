import { Indicator } from "./indicator.model";

export interface Result {
  meta: object;
  timestamp: number[];
  indicators: Indicator
}
