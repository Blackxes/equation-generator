/**
 * @Author Alexander Bassov Tue Aug 27 2024
 * @Email blackxes.dev@gmail.com
 */

export const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getRandom = (min: number, max: number) =>
  Math.floor(getRandomFloat(min, max));
