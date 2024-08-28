/**
 * @Author Alexander Bassov Sun Aug 25 2024
 * @Email blackxes.dev@gmail.com
 */

import { Injectable, signal } from '@angular/core';
import { getRandom } from '../utility/utility';
import { EquationGenerationDefaultOptions } from './equation-generator';
import type {
  IEquation,
  IEquationGenerationOptions,
  IEquationSegment,
} from './equation-generator.types';

@Injectable({
  providedIn: 'root',
})
export class EquationGeneratorService {
  public readonly equations = signal<IEquation[]>([]);
  public readonly isGenerating = signal<boolean>(false);

  public async generate(options?: IEquationGenerationOptions) {
    this.isGenerating.set(true);
    const _options = { ...EquationGenerationDefaultOptions, ...options };
    const equations: IEquation[] = [];
    const probabilitySum =
      Object.values(_options.signOptions).reduce(
        (s, v) => (s += v.probability),
        0
      ) / Object.values(_options.signOptions).length;
    const normalizedSignOptionsAsArray = Object.values(
      _options.signOptions
    ).map((v) => ({
      ...v,
      probability: v.probability / probabilitySum,
    }));

    for (let i = 0; i < _options.equationsCount; i++) {
      const segments: IEquationSegment[] = [];

      // First segment
      segments.push({
        type: "number",
        value: getRandom(_options.valueRange.min, _options.valueRange.max),
      });

      // Sign
      while (true) {
        // debugger;

        const randomSignIndex = getRandom(
          0,
          normalizedSignOptionsAsArray.length
        );
        const signOption = normalizedSignOptionsAsArray[randomSignIndex];
        const doSelect =
          Math.random() * normalizedSignOptionsAsArray.length <
          signOption.probability;

        if (doSelect) {
          segments.push({
            type: 'sign',
            value: signOption.value,
          });
          break;
        }
      }

      // Second segment
      segments.push({
        type: 'number',
        value: getRandom(_options.valueRange.min, _options.valueRange.max),
      });

      const solution = (0, eval)(segments.map(v => v.value).join(" "));

      equations.push({
        segments,
        solution
      });
    }

    this.equations.set(equations);
    this.isGenerating.set(false);

    return this.equations;
  }
}
