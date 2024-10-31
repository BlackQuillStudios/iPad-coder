fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        const recipeContainer = document.getElementById('recipe-container');

        data.restaurants.forEach(restaurant => {
            const restaurantSection = document.createElement('div');
            restaurantSection.className = 'restaurant-section';
            
            const restaurantHeader = document.createElement('h2');
            restaurantHeader.textContent = restaurant.name;
            restaurantSection.appendChild(restaurantHeader);
            
            ['food', 'sauce'].forEach(category => {
                const items = restaurant[category];
                if (items && items.length) {
                    const categorySection = document.createElement('div');
                    categorySection.className = 'category-section';
                    
                    const categoryHeader = document.createElement('h3');
                    categoryHeader.textContent = category;
                    categorySection.appendChild(categoryHeader);
                    
                    items.forEach(recipe => {
                        const card = document.createElement('div');
                        card.className = 'recipe-card';
                        
                        card.innerHTML = `
                            <img src="${recipe.image}" alt="${recipe.title}">
                            <div class="content">
                                <h4>${recipe.title}</h4>
                                <p>${recipe.description}</p>
                                <h5>Ingredients:</h5>
                                <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
                                <a href="${recipe.source}" target="_blank">Source</a>
                            </div>
                        `;
                        
                        categorySection.appendChild(card);
                    });
                    
                    restaurantSection.appendChild(categorySection);
                }
            });
            
            recipeContainer.appendChild(restaurantSection);
        });
    })
    .catch(error => console.error('Error loading recipes:', error));
