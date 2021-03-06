function makeObjectDeepCopy(original) {
  if (typeof original !== "object" || original === null) return original;

  if (original instanceof Date) return new Date(original.getTime());

  if (original instanceof Array) {
    return original.reduce((arr, item, i) => {
      arr[i] = makeObjectDeepCopy(item);
      return arr;
    }, []);
  }

  if (original instanceof Object) {
    return Object.keys(original).reduce((newObj, key) => {
      newObj[key] = makeObjectDeepCopy(original[key]);
      return newObj;
    }, {});
  }
}
