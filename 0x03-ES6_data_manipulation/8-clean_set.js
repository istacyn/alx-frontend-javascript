export default function cleanSet (set, startString) {
  const array = [];

  if (
    typeof set !== 'object' ||
    typeof startString !== 'string' ||
    startString.length === 0
  ) {
    return '';
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      array.push(element.slice(startString.length));
    }
  }
  return array.join('-');
}
