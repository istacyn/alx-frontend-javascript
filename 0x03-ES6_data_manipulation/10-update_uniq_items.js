export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}
