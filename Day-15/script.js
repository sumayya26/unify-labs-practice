const output = document.getElementById("output");
const input = document.getElementById("input");

let balance = 1000;
let loggedIn = false;
let loginAttempts = 0;
const MASTER_PIN = "9999";

let state = "login";
const SECRET_WORD = "matrix";

function print(text, type = "normal") {
  const line = document.createElement("div");
  line.textContent = text;
  if (type === "error") line.style.color = "#ef4444";
  if (type === "warning") line.style.color = "#facc15";
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

print("SYSTEM BOOTING...");
print("ENTER MASTER PIN:");

input.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  const command = input.value.trim();
  input.value = "";

  // LOGIN SYSTEM
  if (state === "login") {
    if (command === MASTER_PIN) {
      loggedIn = true;
      state = "main";
      print("ACCESS GRANTED ✅");
      print("Welcome to Virtual Core v1.0");
      print("Available commands: bank, shop, vault, exit");
    } else {
      loginAttempts++;
      print("INVALID PIN ❌", "error");
      if (loginAttempts >= 3) {
        print("SYSTEM SELF-DESTRUCT INITIATED 💀", "error");
        input.disabled = true;
      }
    }
    return;
  }

  // MAIN TERMINAL
  if (state === "main") {
    switch (command.toLowerCase()) {
      case "bank":
        state = "bank";
        print("BANK MODULE ACTIVATED");
        print("Commands: deposit, withdraw, balance, back");
        break;
      case "shop":
        state = "shop";
        print("SMART SHOP MODULE ACTIVATED");
        print("Enter quantity to purchase (UNIT PRICE = 50)");
        break;
      case "vault":
        state = "vault";
        print("SECURE VAULT ACTIVATED");
        print("Hint: It's a famous sci-fi simulation.");
        break;
      case "exit":
        print("Shutting down Virtual Core...");
        input.disabled = true;
        break;
      default:
        print("UNKNOWN COMMAND", "warning");
    }
    return;
  }

  // BANK MODULE
  if (state === "bank") {
    switch (command.toLowerCase()) {
      case "deposit":
        print("Enter amount:");
        state = "deposit";
        break;
      case "withdraw":
        print("Enter amount:");
        state = "withdraw";
        break;
      case "balance":
        print("Current Balance: $" + balance);
        break;
      case "back":
        state = "main";
        print("Returning to Main Menu...");
        break;
      default:
        print("INVALID BANK COMMAND", "warning");
    }
    return;
  }

  if (state === "deposit") {
    const amount = parseFloat(command);
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      print("Deposit successful. New Balance: $" + balance);
    }
    state = "bank";
    return;
  }

  if (state === "withdraw") {
    const amount = parseFloat(command);
    if (amount > balance) {
      print("INSUFFICIENT FUNDS ❌", "error");
    } else {
      balance -= amount;
      print("Withdrawal successful. New Balance: $" + balance);
    }
    state = "bank";
    return;
  }

  // SHOP MODULE
  if (state === "shop") {
    const quantity = parseInt(command);
    const UNIT_PRICE = 50;

    if (isNaN(quantity) || quantity <= 0) {
      print("Invalid quantity", "warning");
      state = "main";
      return;
    }

    let discount = 0;

    if (quantity <= 5) discount = 0;
    else if (quantity <= 10) discount = 0.10;
    else discount = 0.20;

    let total = quantity * UNIT_PRICE;
    let finalPrice = total - total * discount;

    if (finalPrice > balance) {
      print("Not enough balance to purchase!", "error");
    } else {
      balance -= finalPrice;
      print("Purchase successful! Final Price: $" + finalPrice);
      print("Remaining Balance: $" + balance);
    }

    state = "main";
    return;
  }

  // VAULT MODULE
  if (state === "vault") {
    if (command.toLowerCase() === SECRET_WORD) {
      print("ACCESS GRANTED 🔐");
      print("Secret Message: Follow the white rabbit...");
    } else {
      print("ACCESS DENIED", "error");
    }
    state = "main";
  }
});