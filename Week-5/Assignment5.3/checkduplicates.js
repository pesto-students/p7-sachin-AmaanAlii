function hasDuplicate(array) {
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      return true;
    } else {
      set.add(array[i]);
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5, 6, 7, 1]));
