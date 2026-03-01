const connectBtn = document.getElementById("connectBtn");
const statusDiv = document.getElementById("status");
const container = document.getElementById("productContainer");

// Simulated database products
const products = [
  { name: "iPhone", category: "Electronics", price: 1000, stock: 5 },
  { name: "Samsung TV", category: "Electronics", price: 800, stock: 3 },
  { name: "Leather Jacket", category: "Clothing", price: 250, stock: 10 },
  { name: "Office Chair", category: "Furniture", price: 300, stock: 2 },
  { name: "Wooden Table", category: "Furniture", price: 700, stock: 4 }
];

connectBtn.addEventListener("click", () => {
  statusDiv.innerHTML = "⏳ Connecting to database...";

  setTimeout(() => {
    statusDiv.innerHTML = "✅ Database connected successfully";
    displayProducts();
  }, 1000);
});

function displayProducts() {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
    `;

    container.appendChild(card);
  });
}