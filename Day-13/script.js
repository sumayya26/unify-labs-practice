/* ============================
   Calculator Function
============================ */

function calculate() {
  const number1 = Number(document.getElementById("num1").value);
  const number2 = Number(document.getElementById("num2").value);

  const sum = number1 + number2;
  const product = number1 * number2;
  const remainder = number1 % number2;

  console.log("Number 1 Type:", typeof number1);
  console.log("Number 2 Type:", typeof number2);

  document.getElementById("calcOutput").innerHTML = `
    <strong>Results:</strong><br>
    Sum: ${sum} <br>
    Product: ${product} <br>
    Remainder: ${remainder} <br>
    Type of Number1: ${typeof number1}
  `;
}

/* ============================
   Magic 8 Ball Function
============================ */

function askMagic() {
  const userName = document.getElementById("userName").value;

  const magicNumber = Math.floor(Math.random() * 5);

  let response;

  switch (magicNumber) {
    case 0:
      response = "Yes, definitely!";
      break;
    case 1:
      response = "Ask again later.";
      break;
    case 2:
      response = "Very unlikely.";
      break;
    case 3:
      response = "Absolutely!";
      break;
    case 4:
      response = "Better not tell you now.";
      break;
  }

  console.log("Magic Number:", magicNumber);

  document.getElementById("magicOutput").innerHTML = `
    Welcome, ${userName}! 🎉<br>
    Magic 8-Ball says: <strong>${response}</strong>
  `;
}