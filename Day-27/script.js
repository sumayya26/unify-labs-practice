// Simulated API Data
const products = [
  { name: "iPhone", price: 1000, stock: 5 },
  { name: "Samsung TV", price: 800, stock: 3 },
  { name: "Leather Jacket", price: 250, stock: 10 },
  { name: "Office Chair", price: 300, stock: 2 },
  { name: "Wooden Table", price: 700, stock: 4 }
];

function loadProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
    `;

    container.appendChild(card);
  });
}