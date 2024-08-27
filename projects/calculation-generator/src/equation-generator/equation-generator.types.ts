/**
 * @Author Alexander Bassov Sun Aug 25 2024
 * @Email blackxes.dev@gmail.com
 */

export interface IEquation {
  segments: IEquationSegment[];
}

export interface IEquationSegment {
  type: 'number' | 'sign';
  value: string | number;
}

export interface IEquationGenerationOptions {
  equationsCount: number;
  valueRange: { min: number; max: number };
  signOptions: Record<IEquationSignType, IEquationSignOptions>;
}

export const IEquationSignTypes = ['+', '-', '*', '/'];
export type IEquationSignType = (typeof IEquationSignTypes)[number];
// export type IEquationGroup = "(|)";

export interface IEquationSignOptions<Type = IEquationSignType> {
  value: NoInfer<Type>;
  probability: number;
}
