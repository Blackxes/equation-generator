/**
 * @Author Alexander Bassov Tue Aug 27 2024
 * @Email blackxes.dev@gmail.com
 */

import type { IEquationGenerationOptions } from './equation-generator.types';

export const EquationGenerationDefaultOptions: IEquationGenerationOptions = {
  equationsCount: 20,
  valueRange: { min: -100, max: 100 },
  signOptions: {
    '+': {
      probability: 1,
      value: '+',
    },
    '-': {
      probability: 1,
      value: '-',
    },
    '*': {
      probability: 1,
      value: '*',
    },
    '/': {
      probability: 1,
      value: '/',
    },
  },
};
