
const formContainer = document.createElement("div");
const formHeading = document.createElement("h2");
formHeading.textContent = "Contact Form";

const form = document.createElement("form");
form.id = "contactForm";

const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
const nameError = document.createElement("span");

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
const emailError = document.createElement("span");

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
const formMessage = document.createElement("div");

// Append elements to the form
form.append(nameLabel, nameInput, nameError, document.createElement("br"));
form.append(emailLabel, emailInput, emailError, document.createElement("br"));
form.append(submitButton, formMessage);
formContainer.append(formHeading, form);
document.body.appendChild(formContainer);

// Validate form inputs
form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  formMessage.textContent = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let isValid = true;

  if (!name) {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email.";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = `Thank you, ${name}! Your form was submitted.`;
  }
});

// Dynamic message section
const messageButton = document.createElement("button");
messageButton.textContent = "Show Message";
const dynamicMessage = document.createElement("div");

messageButton.addEventListener("click", () => {
  dynamicMessage.textContent = "This message appears on the page!";
});

document.body.append(messageButton, dynamicMessage);

// Animation box
const animatedBox = document.createElement("div");
animatedBox.style.width = "100px";
animatedBox.style.height = "100px";
animatedBox.style.backgroundColor = "lightblue";
animatedBox.style.transition = "transform 0.3s";
animatedBox.style.marginTop = "20px";

animatedBox.addEventListener("click", () => {
  animatedBox.style.transform = animatedBox.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
});

document.body.appendChild(animatedBox);

const recipes = [
    { name: "Tacos", culture: "Mexican", ingredients: ["tortilla", "beef"], difficulty: "easy", time: 20 },
    { name: "Sushi", culture: "Japanese", ingredients: ["rice", "fish"], difficulty: "hard", time: 60 },
    // More recipe objects
];

function filterRecipes() {
    const culture = document.getElementById("culture").value;
    const ingredientsInput = document.getElementById("ingredients").value.toLowerCase().split(",").map(item => item.trim());
    const difficulty = document.getElementById("difficulty").value;
    const time = document.getElementById("time").value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCulture = !culture || recipe.culture === culture;
        const matchesIngredients = ingredientsInput.every(ingredient => recipe.ingredients.includes(ingredient));
        const matchesDifficulty = !difficulty || recipe.difficulty === difficulty;
        const matchesTime = !time || recipe.time <= parseInt(time);

        return matchesCulture && matchesIngredients && matchesDifficulty && matchesTime;
    });

    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    const recipeResults = document.getElementById("recipe-results");
    recipeResults.innerHTML = ""; // Clear previous results

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Culture:</strong> ${recipe.culture}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Time:</strong> ${recipe.time} mins</p>
        `;

        recipeResults.appendChild(recipeCard);
    });

    if (recipes.length === 0) {
        recipeResults.innerHTML = "<p>No recipes found matching your criteria.</p>";
    }
}