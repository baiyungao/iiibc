/**
 * Uppercase the first letter of a string, but don't change the remainder.
 *
 * @deprecated since v0.17
 */
export function capitalize(str: string): string {
  console.warn(
    "'capitalize' has been deprecated in @orbit/utils. Please import from @orbit/serializers instead."
  );
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert underscored, dasherized, or space-delimited words into
 * lowerCamelCase.
 *
 * @deprecated since v0.17
 */
export function camelize(str: string): string {
  console.warn(
    "'camelize' has been deprecated in @orbit/utils. Please import from @orbit/serializers instead."
  );
  return str
    .replace(/(\-|\_|\.|\s)+(.)?/g, function (match, separator, chr) {
      return chr ? chr.toUpperCase() : '';
    })
    .replace(/(^|\/)([A-Z])/g, function (match) {
      return match.toLowerCase();
    });
}

/**
 * Converts a camelized string into all lowercase separated by underscores.
 *
 * @deprecated since v0.17
 */
export function decamelize(str: string): string {
  console.warn(
    "'decamelize' has been deprecated in @orbit/utils. Please import from @orbit/serializers instead."
  );
  return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
}

/**
 * Dasherize words that are underscored, space-delimited, or camelCased.
 *
 * @deprecated since v0.17
 */
export function dasherize(str: string): string {
  console.warn(
    "'dasherize' has been deprecated in @orbit/utils. Please import from @orbit/serializers instead."
  );
  return decamelize(str).replace(/[ _]/g, '-');
}

/**
 * Underscore words that are dasherized, space-delimited, or camelCased.
 *
 * @deprecated since v0.17
 */
export function underscore(str: string): string {
  console.warn(
    "'underscore' has been deprecated in @orbit/utils. Please import from @orbit/serializers instead."
  );
  return str
    .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
    .replace(/\-|\s+/g, '_')
    .toLowerCase();
}
