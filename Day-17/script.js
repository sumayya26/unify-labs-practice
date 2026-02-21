// Mock Database
const tasks = [
  { name: "Portfolio Website", status: "Completed" },
  { name: "E-commerce App", status: "Pending" },
  { name: "Dashboard UI", status: "Completed" },
  { name: "API Integration", status: "Pending" }
];

const prices = [100, 250, 80, 150];
const expenses = [1200, 800, 600, 400];

// 1️⃣ FILTER – Separate Tasks
const completedTasks = tasks.filter(task => task.status === "Completed");
const pendingTasks = tasks.filter(task => task.status === "Pending");

// 2️⃣ MAP – Add Tax (10%)
const TAX_RATE = 0.10;
const pricesWithTax = prices.map(price => {
  const taxAdded = price + price * TAX_RATE;
  return taxAdded.toFixed(2);
});

// 3️⃣ REDUCE – Calculate Total Budget
const totalBudget = expenses.reduce((total, amount) => total + amount, 0);

// Render Data to UI
const completedList = document.getElementById("completedTasks");
completedTasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task.name;
  completedList.appendChild(li);
});

const pendingList = document.getElementById("pendingTasks");
pendingTasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task.name;
  pendingList.appendChild(li);
});

const taxList = document.getElementById("taxPrices");
pricesWithTax.forEach(price => {
  const li = document.createElement("li");
  li.textContent = `$${price}`;
  taxList.appendChild(li);
});

document.getElementById("budget").textContent = 
  `Total Company Budget: $${totalBudget}`;