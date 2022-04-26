function selectFromInterval(arr, param1, param2) {
  if (!Array.isArray(arr) || !arr.every((el) => !isNaN(el))) {
    throw new Error("ошибка!");
  }

  let from = Number(param1);
  let to = Number(param2);

  if (isNaN(from) || isNaN(to)) {
    throw new Error("невалидное число!");
  }

  [from, to] = [from, to].sort((a, b) => a - b);

  return arr.filter((el) => from <= el && el <= to);
}
