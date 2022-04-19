// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(age_1, age_2, age_3) {
  if (age_1 < age_2) {
    console.log(
      `You don't have access cause your age is ${age_1} It's less then ${age_2}`
    );
  } else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
  } else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}

checkAge(17, 18, 61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function checkAge(age_1, age_2, age_3) {
  if (
    typeof age_1 === "number" &&
    typeof age_2 === "number" &&
    typeof age_3 === "number"
  ) {
    if (age_1 < age_2) {
      console.log(
        `You don't have access cause your age is ${age_1} It's less then ${age_2}`
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome!");
    } else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Technical work");
    }
  } else {
    console.log("Should be a number");
  }
}

checkAge(17, 18, 61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function checkAge(age_1, age_2, age_3) {
  if (
    typeof +age_1 == "number" &&
    typeof +age_2 == "number" &&
    typeof +age_3 == "number"
  ) {
    if (age_1 < age_2) {
      console.log(
        `You don't have access cause your age is ${age_1} It's less then ${age_2}`
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome!");
    } else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Technical work");
    }
  } else {
    console.log("Should be a number");
  }
}

checkAge("17", 18, 61);

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

function checkAge(age_1, age_2, age_3) {
  if (
    typeof +age_1 == "number" &&
    typeof +age_2 == "number" &&
    typeof +age_3 == "number"
  ) {
    if (age_1 < age_2) {
      console.log(
        `You don't have access cause your age is ${age_1} It's less then ${age_2}`
      );
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome!");
    } else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Technical work");
    }
  } else {
    console.log("Should be a number");
  }
}

a = prompt("Enter age_1");
b = prompt("Enter age_2");
c = prompt("Enter age_3");

checkAge(a, b, c);
