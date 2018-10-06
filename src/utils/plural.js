/**
 * @format
 */

/**
 * @description Naive pluralizes based on an amount (adds s or  no s)
 *
 * type itemName string
 * type amount number
 */
const plural = (itemName, amount) => {
  if (amount === 1) {
    return `${itemName}`;
  }
  return `${itemName}s`;
}

export default plural;
