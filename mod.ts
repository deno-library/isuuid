/**
 * Checks if a given string is a valid UUID.
 *
 * @param {string} str - The string to check.
 * @param {1 | 2 | 3 | 4 | 5} [version] - The version of the UUID to validate against. Defaults to validating versions 1-5.
 * @returns {boolean} - True if the string is a valid UUID of the specified version(s), false otherwise.
 *
 * @example
 * // Check if a string is a valid UUID (any version)
 * console.log(isuuid('123e4567-e89b-12d3-a456-426614174000')); // true
 *
 * @example
 * // Check if a string is a valid UUID version 4
 * console.log(isuuid('123e4567-e89b-42d3-a456-426614174000', 4)); // true
 *
 * @example
 * // Check if a string is a valid UUID version 1
 * console.log(isuuid('123e4567-e89b-12d3-a456-426614174000', 1)); // true
 *
 * @example
 * // Check if a string is a valid UUID version 6 (which does not exist)
 * console.log(isuuid('123e4567-e89b-62d3-a456-426614174000', 6)); // false
 */
export default function isuuid(
  str: string,
  version?: 1 | 2 | 3 | 4 | 5,
): boolean {
  const _version = version ?? "1-5";
  const reg = new RegExp(
    `^[0-9a-f]{8}-[0-9a-f]{4}-[${_version}][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`,
    "i",
  );
  return reg.test(str);
}
