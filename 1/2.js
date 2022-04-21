let a = Number(prompt("Первое число: "));

if (isNaN(a)) {
  throw new Error("Некорректный ввод!");
}

let b = Number(prompt("Второе число: "));
if (isNaN(b)) {
  throw new Error("Некорректный ввод!");
}

console.log(`Ответ: ${a + b}, ${a / b}`);
