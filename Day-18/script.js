// Digital Pet Class
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._health = 70;
    this.energy = 60;
  }

  // Getter
  get health() {
    return this._health;
  }

  // Setter (Keeps health between 0–100)
  set health(value) {
    if (value > 100) this._health = 100;
    else if (value < 0) this._health = 0;
    else this._health = value;
  }

  feed() {
    this.health += 10;
    this.energy += 5;
    return `${this.name} enjoyed the food! 🍖`;
  }

  play() {
    this.energy -= 10;
    this.health += 5;
    return `${this.name} had fun playing! 🎾`;
  }

  getStatus() {
    return `${this.name}'s Health: ${this.health}, Energy: ${this.energy}`;
  }
}

// Create Pet Instance
const myPet = new Pet("Buddy", "Dog");

// Update UI
function updateUI() {
  document.getElementById("petName").textContent = myPet.name;
  document.getElementById("petType").textContent = `Type: ${myPet.type}`;
  document.getElementById("health").textContent = myPet.health;
  document.getElementById("energy").textContent = myPet.energy;
}

function feedPet() {
  document.getElementById("statusMessage").textContent = myPet.feed();
  updateUI();
}

function playWithPet() {
  document.getElementById("statusMessage").textContent = myPet.play();
  updateUI();
}

function checkStatus() {
  document.getElementById("statusMessage").textContent = myPet.getStatus();
}

// Initialize UI
updateUI();