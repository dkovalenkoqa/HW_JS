// Напишите валидационный скрипт используя функции

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function containsAnyNumber(str) {
  return /[0-9]/.test(str);
}

function containsCapitalLetter(str) {
  return /[A-Z]/.test(str);
}

rl.question("Enter string: ", function (str) {
  if (!str) {
    console.log("String should not be empty");
  } else if (str.length < 5 || str.length > 64) {
    console.log(
      "String should contains at least 5 and no more than 64 symbols"
    );
  } else if (!containsAnyLetter(str)) {
    console.log("String should contains letters");
  } else if (!containsCapitalLetter(str)) {
    console.log("String should contains at least one capital letter");
  } else if (!containsAnyNumber(str)) {
    console.log("String should contains at least one number");
  } else if (!str.includes("@")) {
    console.log("String should contains at least one @");
  } else {
    console.log("Fine!");
  }

  rl.close();
});
