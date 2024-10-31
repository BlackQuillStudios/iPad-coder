document.addEventListener("DOMContentLoaded", () => {
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error('Error loading recipes:', error));
});

function displayRecipes(recipes) {
    const container = document.getElementById('recipe-container');
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2 class="recipe-title">${recipe.title}</h2>
            <p>${recipe.description}</p>
            <ul>
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <a href="${recipe.source}" target="_blank">View Full Recipe</a>
        `;
        container.appendChild(card);
    });
}
