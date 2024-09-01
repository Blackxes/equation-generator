/**
 * @Author Alexander Bassov Sun Aug 25 2024
 * @Email blackxes.dev@gmail.com
 */

import { IEquationSignTypes } from "./equation-generator.data";

/**
 * Equation types
 */

export interface IEquation {
  segments: IEquationSegment[];
  getSolution: () => number;
  /** Defines whether this is ACTUAL equation or a child equation within */
  isRoot: boolean;
}

export type TSegmentType = "unknown" | "equation" | "value";
export type TSegmentValueType = "operator" | "number";
export type isSegmentTypeEquation<T extends TSegmentType> = T extends "equation" ? true : false;
export type isSegmentTypeValue<T extends TSegmentType> = T extends "value" ? true : false;

export type TSegmentResolverSignature = (value: number | IEquation) => number;

export interface IEquationFunctionSegment {
  type: "equation";
  value: IEquation;
  resolver: (equation: IEquation) => number;
}
export interface IEquationValueSegment {
  type: "value";
  value: string | number;
  valueType: TSegmentValueType;
}

export type IEquationSegment = IEquationFunctionSegment | IEquationValueSegment;

/**
 * Equation generation types
 */

export interface IEquationGenerationOptions {
  equationsCount: number;
  valueRange: { min: number; max: number };
  signOptions: {
    [K in IEquationSignType]: IEquationSignOptions<K>;
  };
}

export type IEquationSignType = (typeof IEquationSignTypes)[number];
// export type IEquationGroup = "(|)";

export interface IEquationSignOptions<Type = IEquationSignType> {
  value: NoInfer<Type>;
  probability: number;
}

/**
 * Constrains segments to have certain neighbours
 * eg: A number cannot be next to a number without an operator in between
 */
export interface IEquationGenerationConstraint {
  next: TSegmentType;
  previous: TSegmentType;
}
