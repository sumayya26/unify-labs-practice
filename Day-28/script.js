// Simulated Cloud Products
const cloudProducts = [
  { name: "MacBook Pro", price: 2000, stock: 8 },
  { name: "iPhone 15", price: 1200, stock: 15 },
  { name: "Samsung TV", price: 900, stock: 5 },
  { name: "Gaming Chair", price: 350, stock: 10 },
  { name: "Wireless Headphones", price: 250, stock: 20 }
];

function connectCloud() {
  const status = document.getElementById("status");
  const container = document.getElementById("products");

  status.innerHTML = "⏳ Connecting to MongoDB Atlas...";
  container.innerHTML = "";

  setTimeout(() => {
    status.innerHTML = "☁️ Connected to MongoDB Atlas Successfully!";
    displayProducts();
  }, 1500);
}

function displayProducts() {
  const container = document.getElementById("products");

  cloudProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="price">Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
    `;

    container.appendChild(card);
  });
}