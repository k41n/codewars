import { roman as _roman } from "./malyshev.js";

let CACHE;

export const prepare = () => {
  CACHE = Array.from({ length: 4000 }, (_, k) => _roman(k));
};

export const roman = (num) => CACHE[num];
