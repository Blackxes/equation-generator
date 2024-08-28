/**
 * @Author Alexander Bassov Sun Aug 25 2024
 * @Email blackxes.dev@gmail.com
 */

export interface IEquation {
  segments: IEquationSegment[];
  solution: number;
}

export interface IEquationSegment<TSignType = "number" | "sign"> {
  type: TSignType;
  value: string | number;
  mapper?: () => TSignType;
}

export interface IEquationGenerationOptions {
  equationsCount: number;
  valueRange: { min: number; max: number };
  signOptions: {
    [K in IEquationSignType]: IEquationSignOptions<K>;
  };
}

export const IEquationSignTypes = ["+", "-", "*", "/"] as const;
export type IEquationSignType = (typeof IEquationSignTypes)[number];
// export type IEquationGroup = "(|)";

export interface IEquationSignOptions<Type = IEquationSignType> {
  value: NoInfer<Type>;
  probability: number;
}
