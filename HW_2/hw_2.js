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
