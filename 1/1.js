let a = Number(prompt("Первое число: "));
let b = Number(prompt("Второе число: "));

if (!isNaN(a) && !isNaN(b)) {
  console.log(a.toString(b));
} else {
  console.log("Некорректный ввод!");
}
