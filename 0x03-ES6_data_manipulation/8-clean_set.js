export default function cleanSet (set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const arrayFromSet = Array.from(set);

  const filteredArray = arrayFromSet.filter((value) => value.startsWith(startString));

  const cleanedArray = filteredArray.map((value) => value.slice(startString.length));

  return cleanedArray.join('-');
}
