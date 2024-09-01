/**
 * @Author Alexander Bassov Tue Aug 27 2024
 * @Email blackxes.dev@gmail.com
 */

import type { IEquationGenerationOptions } from "./equation-generator.types";

export const IEquationSignTypes = ["+", "-", "*", "/"] as const;

export const EquationGenerationDefaultOptions: IEquationGenerationOptions = {
  equationsCount: 20,
  valueRange: { min: 10, max: 99 },
  signOptions: {
    "+": {
      probability: 1,
      value: "+",
    },
    "-": {
      probability: 1,
      value: "-",
    },
    "*": {
      probability: 0.2,
      value: "*",
    },
    "/": {
      probability: 0.2,
      value: "/",
    },
  },
};
