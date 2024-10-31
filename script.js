fetch('recipes.json')
    .then(response => response.json())
    .then(recipes => {
        const recipeContainer = document.getElementById('recipe-container');
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="content">
                    <h2>${recipe.title}</h2>
                    <p>${recipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
                    <a href="${recipe.source}" target="_blank">Source</a>
                </div>
            `;
            
            recipeContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading recipes:', error));
