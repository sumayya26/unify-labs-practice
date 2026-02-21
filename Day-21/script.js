// Persistent Settings Manager (Single File Version)

// Storage Key
const STORAGE_KEY = "appSettings";

// Default Settings
const defaultSettings = {
  theme: "light",
  language: "en"
};

// Load Settings
function loadSettings() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : defaultSettings;
}

// Save Settings
function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// Get Elements
const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");
const welcomeText = document.getElementById("welcomeText");

// Initialize Settings
let settings = loadSettings();

// Apply Settings to UI
function applySettings() {
  document.body.className = settings.theme;
  languageSelect.value = settings.language;

  const messages = {
    en: "Welcome Back!",
    es: "¡Bienvenido de nuevo!",
    fr: "Bon retour!"
  };

  welcomeText.textContent = messages[settings.language];
}

// Apply on Load
applySettings();

// Theme Toggle
themeToggle.addEventListener("click", () => {
  settings.theme = settings.theme === "light" ? "dark" : "light";
  saveSettings(settings);
  applySettings();
});

// Language Change
languageSelect.addEventListener("change", () => {
  settings.language = languageSelect.value;
  saveSettings(settings);
  applySettings();
});