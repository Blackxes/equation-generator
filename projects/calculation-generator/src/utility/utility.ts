/**
 * @Author Alexander Bassov Tue Aug 27 2024
 * @Email blackxes.dev@gmail.com
 */

export const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getRandom = (min: number, max: number) => Math.floor(getRandomFloat(min, max));

/**
 * generates a simple hash string - dont use this for as password hash!
 * this is by far one of the worst id generations for passwords
 *
 * @param int length - defines the length of the hash string
 * @param string chars - chars from which this function will pick characters
 * 	to generate the hash
 *
 * @return string - the generated hash
 */
export const getRandomHash = (
  length = 8,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
) => {
  let hash = "";

  while (length > hash.length) hash += chars.charAt(Math.floor(Math.random() * chars.length));

  return hash;
};

/**
 * generates a section id
 * eg. [1, 2, 3] would eventually generate f-42-l0l
 *
 * @param int sections - defines the number of sections for the id
 * @param int sectionLength - defines the length of each section
 *
 * @return string - returns a string based on the given params
 */
const g_defaultSections = [16];

export const getRandomId = (sections = g_defaultSections) => {
  return sections
    .map((length) => {
      return getRandomHash(length);
    })
    .join("-");
};
