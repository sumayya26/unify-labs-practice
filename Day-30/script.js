// Sample Product Database (Simulated API)
const products = [
  { id: 1, name: "iPhone 15", category: "Electronics", price: 1200 },
  { id: 2, name: "Gaming Laptop", category: "Electronics", price: 1500 },
  { id: 3, name: "Leather Jacket", category: "Clothing", price: 200 },
  { id: 4, name: "Office Chair", category: "Furniture", price: 350 },
  { id: 5, name: "T-Shirt", category: "Clothing", price: 40 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load Products
function loadProducts() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const container = document.getElementById("products");
  container.innerHTML = "";

  products
    .filter(p =>
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(search)
    )
    .forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p class="price">$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;

      container.appendChild(card);
    });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Update Cart UI
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">x</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

// Remove Item
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Toggle Cart
function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("hidden");
}

// Checkout
function checkout() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !address) {
    alert("Please fill all checkout fields.");
    return;
  }

  alert("Order placed successfully!");
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

// Event Listeners
document.getElementById("search").addEventListener("input", loadProducts);
document.getElementById("categoryFilter").addEventListener("change", loadProducts);

loadProducts();
updateCart();