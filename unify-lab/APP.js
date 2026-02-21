import { fetchCoins } from "./API.js";
import { renderCards, showLoader, showError } from "./UI.js";

const state = {
  coins: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  theme: localStorage.getItem("theme") || "light"
};

document.body.className = state.theme;

async function init() {
  showLoader(true);
  try {
    state.coins = await fetchCoins();
    renderCards(state.coins, state.favorites);
  } catch {
    showError("Failed to fetch data.");
  } finally {
    showLoader(false);
  }
}

init();

document.getElementById("searchInput").addEventListener("input", e => {
  const filtered = state.coins.filter(c =>
    c.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCards(filtered, state.favorites);
});

document.getElementById("sortSelect").addEventListener("change", e => {
  let sorted = [...state.coins];

  if (e.target.value === "price_desc")
    sorted.sort((a,b) => b.current_price - a.current_price);

  if (e.target.value === "name_asc")
    sorted.sort((a,b) => a.name.localeCompare(b.name));

  renderCards(sorted, state.favorites);
});

document.getElementById("cardContainer").addEventListener("click", e => {
  if (!e.target.dataset.id) return;

  const id = e.target.dataset.id;

  if (state.favorites.includes(id))
    state.favorites = state.favorites.filter(f => f !== id);
  else
    state.favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(state.favorites));
  renderCards(state.coins, state.favorites);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.body.className = state.theme;
  localStorage.setItem("theme", state.theme);
});