fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('recipe-container');

        data.restaurants.forEach(restaurant => {
            const restaurantSection = document.createElement('div');
            restaurantSection.classList.add('restaurant-section');
            restaurantSection.innerHTML = `<h2>${restaurant.name}</h2>`;

            restaurant.categories.forEach(category => {
                const categorySection = document.createElement('div');
                categorySection.classList.add('category-section');
                categorySection.innerHTML = `<h3>${category.type}</h3>`;

                category.recipes.forEach(recipe => {
                    const recipeDiv = document.createElement('div');
                    recipeDiv.classList.add('recipe');

                    recipeDiv.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <h4>${recipe.name}</h4>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <p><a href="${recipe.source}" target="_blank">Source</a></p>
                    `;
                    categorySection.appendChild(recipeDiv);
                });

                restaurantSection.appendChild(categorySection);
            });

            container.appendChild(restaurantSection);
        });
    });
