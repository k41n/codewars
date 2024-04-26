import { measure } from "../framework/utils.js";

measure("odd by &", () => 101 & 1, 1_000_000_000);
measure("odd by %", () => 101 % 2 === 1, 1_000_000_000);
