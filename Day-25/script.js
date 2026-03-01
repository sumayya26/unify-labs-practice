let products = [
  { name: "iPhone", category: "Electronics", price: 1000, stock: 5, tags: [] },
  { name: "TV", category: "Electronics", price: 800, stock: 0, tags: [] },
  { name: "Jacket", category: "Clothing", price: 200, stock: 10, tags: [] },
  { name: "Chair", category: "Furniture", price: 300, stock: 3, tags: [] },
  { name: "Table", category: "Furniture", price: 700, stock: 2, tags: [] }
];

// Render UI
function render() {
  const container = document.getElementById("inventory");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    if (product.featured) {
      card.classList.add("featured");
    }

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <p>Tags: ${product.tags.join(", ")}</p>
      <p>${product.featured ? "⭐ Featured" : ""}</p>
    `;

    container.appendChild(card);
  });

  document.getElementById("count").textContent =
    "Total Products: " + products.length;
}

// $inc → Increase Electronics price by +10
function increaseElectronics() {
  products.forEach(product => {
    if (product.category === "Electronics") {
      product.price += 10;
    }
  });
  render();
}

// $set → Mark featured if price > 500
function setFeatured() {
  products.forEach(product => {
    if (product.price > 500) {
      product.featured = true;
    }
  });
  render();
}

// $push → Add tag
function addNewArrival() {
  products.forEach(product => {
    if (product.category === "Electronics") {
      product.tags.push("new-arrival");
    }
  });
  render();
}

// deleteMany → Remove stock = 0
function deleteZeroStock() {
  products = products.filter(product => product.stock !== 0);
  render();
}

render();