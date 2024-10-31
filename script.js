// Fetch and display recipes from recipes.json
fetch('recipes.json')
    .then(response => response.json())
    .then(data => displayRecipes(data))
    .catch(error => console.error('Error fetching recipes:', error));

function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        // Recipe header
        const header = document.createElement('div');
        header.classList.add('recipe-header');

        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;
        img.classList.add('recipe-image');
        header.appendChild(img);

        const title = document.createElement('h2');
        title.classList.add('recipe-title');
        title.textContent = recipe.name;
        header.appendChild(title);

        recipeItem.appendChild(header);

        // Ingredients
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('ingredients');
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        recipeItem.appendChild(ingredientsList);

        // Source Link
        const sourceLink = document.createElement('a');
        sourceLink.href = recipe.source;
        sourceLink.textContent = 'Source';
        sourceLink.target = '_blank';
        recipeItem.appendChild(sourceLink);

        container.appendChild(recipeItem);
    });
}
