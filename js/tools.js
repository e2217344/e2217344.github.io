const recipes = {
    "Warm Chicken Soup": {
        category: "Comfort Food",
        cookTime: "45 minutes",
        difficulty: "Easy",
        servings: 4,
        ingredients: [
            "1 whole chicken (3-4 lbs) or 2 lbs chicken pieces",
            "8 cups water",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 large onion, diced",
            "3 garlic cloves, minced",
            "1 bay leaf",
            "Salt and black pepper to taste",
            "Fresh parsley, chopped",
            "1 cup egg noodles (optional)"
        ],
        instructions: [
            "Place chicken in a large pot and cover with water",
            "Bring to a boil, then reduce heat and simmer for 30 minutes",
            "Remove chicken and let cool. Shred the meat and discard bones",
            "Strain the broth and return to pot",
            "Add vegetables and bay leaf to the broth",
            "Simmer until vegetables are tender (15-20 minutes)",
            "Return shredded chicken to pot",
            "Season with salt and pepper",
            "Add noodles if using and cook for 8-10 minutes",
            "Garnish with fresh parsley before serving"
        ],
        tips: "For richer flavor, roast the chicken first. Add lemon juice for brightness."
    },
    "Mac and Cheese": {
        category: "Comfort Food",
        cookTime: "30 minutes",
        difficulty: "Easy",
        servings: 6,
        ingredients: [
            "1 lb elbow macaroni",
            "4 cups whole milk",
            "4 tbsp butter",
            "4 tbsp all-purpose flour",
            "2 cups sharp cheddar cheese, grated",
            "1 cup gruyere cheese, grated",
            "1/2 tsp salt",
            "1/4 tsp black pepper",
            "1/4 tsp paprika",
            "1/2 cup breadcrumbs (optional)"
        ],
        instructions: [
            "Cook macaroni according to package directions, drain",
            "In a large saucepan, melt butter over medium heat",
            "Whisk in flour and cook for 1 minute",
            "Gradually add milk, whisking constantly",
            "Cook until thickened, about 5 minutes",
            "Remove from heat and stir in cheeses",
            "Season with salt, pepper, and paprika",
            "Combine cheese sauce with cooked macaroni",
            "Top with breadcrumbs if desired",
            "Bake at 375°F for 20 minutes until golden (optional)"
        ],
        tips: "Use freshly grated cheese for best melting. Don't overheat or sauce may curdle."
    },

    "Green Smoothie": {
        category: "Energy Boost",
        cookTime: "5 minutes",
        difficulty: "Very Easy",
        servings: 2,
        ingredients: [
            "1 large banana, frozen",
            "2 cups fresh spinach",
            "1/2 avocado",
            "1 cup unsweetened almond milk",
            "1 tbsp honey or maple syrup",
            "1 tbsp chia seeds",
            "1/2 cup ice cubes",
            "1 tsp fresh ginger (optional)",
            "Juice of 1/2 lime"
        ],
        instructions: [
            "Add liquid ingredients to blender first",
            "Add spinach and blend until smooth",
            "Add frozen banana and avocado",
            "Add honey, chia seeds, and ginger",
            "Blend on high speed for 60-90 seconds",
            "Add ice cubes and blend until smooth",
            "Taste and adjust sweetness if needed",
            "Pour into glasses and serve immediately"
        ],
        tips: "Freeze banana ahead of time for thicker consistency. Add protein powder for extra nutrition."
    },
    "Avocado Toast": {
        category: "Energy Boost",
        cookTime: "10 minutes",
        difficulty: "Very Easy",
        servings: 2,
        ingredients: [
            "2 slices whole grain bread",
            "1 large ripe avocado",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "2 eggs (optional)",
            "Red pepper flakes",
            "Cherry tomatoes, halved",
            "Everything bagel seasoning",
            "Olive oil drizzle"
        ],
        instructions: [
            "Toast bread slices until golden brown",
            "Mash avocado with lemon juice, salt, and pepper",
            "Spread avocado mixture evenly on toast",
            "Top with halved cherry tomatoes",
            "If using eggs, fry or poach them",
            "Place egg on top of avocado toast",
            "Sprinkle with red pepper flakes and seasoning",
            "Drizzle with olive oil",
            "Serve immediately while toast is still warm"
        ],
        tips: "Choose avocados that yield slightly to pressure. Add feta cheese for extra flavor."
    },

    "Homemade Pizza": {
        category: "Celebration",
        cookTime: "2 hours (including dough rise)",
        difficulty: "Medium",
        servings: 4,
        ingredients: [
            "3 cups all-purpose flour",
            "1 tsp active dry yeast",
            "1 tsp salt",
            "1 tbsp olive oil",
            "1 cup warm water",
            "1 cup pizza sauce",
            "2 cups mozzarella cheese, shredded",
            "Your favorite toppings",
            "Italian herbs (oregano, basil)"
        ],
        instructions: [
            "Mix warm water, yeast, and a pinch of sugar. Let sit 5 minutes",
            "Combine flour and salt in a large bowl",
            "Add yeast mixture and olive oil to flour",
            "Mix until dough forms, then knead for 8-10 minutes",
            "Place in oiled bowl, cover, and let rise 1 hour",
            "Preheat oven to 475°F",
            "Roll out dough on floured surface",
            "Transfer to pizza pan or baking sheet",
            "Spread sauce, add cheese and toppings",
            "Bake for 12-15 minutes until crust is golden"
        ],
        tips: "Pre-bake crust for 5 minutes before adding toppings for crispier base."
    },

    "Mediterranean Bowl": {
        category: "Feel-Good",
        cookTime: "25 minutes",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, thinly sliced",
            "1/2 cup kalamata olives",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup olive oil",
            "2 tbsp lemon juice",
            "1 tsp dried oregano",
            "Fresh herbs (parsley, mint)"
        ],
        instructions: [
            "Rinse quinoa and cook in vegetable broth for 15 minutes",
            "Let quinoa cool to room temperature",
            "Prepare all vegetables and place in separate bowls",
            "Whisk together olive oil, lemon juice, and oregano",
            "Divide quinoa between two bowls",
            "Top with cucumber, tomatoes, and red onion",
            "Add olives and feta cheese",
            "Drizzle with dressing",
            "Garnish with fresh herbs",
            "Serve at room temperature or chilled"
        ],
        tips: "Make extra quinoa for meal prep. Add grilled chicken for more protein."
    },

    "Vegetable Soup": {
        category: "Calming",
        cookTime: "40 minutes",
        difficulty: "Easy",
        servings: 6,
        ingredients: [
            "2 tbsp olive oil",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "3 garlic cloves, minced",
            "6 cups vegetable broth",
            "1 can diced tomatoes",
            "1 zucchini, diced",
            "1 cup green beans, chopped",
            "1 tsp dried thyme",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Heat olive oil in a large pot over medium heat",
            "Sauté onion, carrots, and celery until softened",
            "Add garlic and cook for 1 minute",
            "Add broth, diced tomatoes, and thyme",
            "Bring to a boil, then simmer for 20 minutes",
            "Add zucchini and green beans",
            "Cook for 10 more minutes until vegetables are tender",
            "Season with salt and pepper",
            "Serve hot with fresh parsley garnish"
        ],
        tips: "Add beans or lentils for extra protein. Blend partially for creamier texture."
    },

    "Pasta Carbonara": {
        category: "Romantic",
        cookTime: "20 minutes",
        difficulty: "Medium",
        servings: 2,
        ingredients: [
            "8 oz spaghetti",
            "4 large egg yolks",
            "1/2 cup parmesan cheese, grated",
            "4 slices pancetta or bacon, diced",
            "2 garlic cloves, minced",
            "1/4 cup white wine (optional)",
            "Black pepper, freshly ground",
            "Salt to taste",
            "Fresh parsley, chopped"
        ],
        instructions: [
            "Cook spaghetti according to package directions",
            "While pasta cooks, fry pancetta until crispy",
            "Add garlic to pancetta and cook 1 minute",
            "Add wine if using and let it reduce",
            "Whisk egg yolks with parmesan and black pepper",
            "Drain pasta, reserving 1 cup pasta water",
            "Add hot pasta to pancetta pan",
            "Remove from heat and quickly stir in egg mixture",
            "Add pasta water gradually until creamy",
            "Serve immediately with extra parmesan"
        ],
        tips: "Work quickly to prevent eggs from scrambling. Serve in warmed bowls."
    }
};

let recipeContainer;
let randomButton;

let currentRecipe = null;

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    checkForSelectedRecipe();
});

function initializePage() {
    recipeContainer = document.querySelector('main section div:first-of-type');
    randomButton = document.querySelector('main section div:last-of-type button');
    
    randomButton.addEventListener('click', generateRandomRecipe);
    
    displayRandomRecipe();
}

function checkForSelectedRecipe() {
    try {
        const selectedRecipeData = localStorage.getItem('selectedRecipe');
        if (selectedRecipeData) {
            const recipeData = JSON.parse(selectedRecipeData);
            
            const tenMinutesAgo = Date.now() - (10 * 60 * 1000);
            if (recipeData.timestamp > tenMinutesAgo) {
                displaySpecificRecipe(recipeData.food, recipeData.mood, recipeData.title);
                
                localStorage.removeItem('selectedRecipe');
                return;
            }
        }
    } catch (e) {
        console.log('Error reading from localStorage:', e);
    }
    
    displayRandomRecipe();
}

function displaySpecificRecipe(foodName, mood, moodTitle) {
    let recipe = recipes[foodName];
    
    if (!recipe) {
        const recipeKeys = Object.keys(recipes);
        const partialMatch = recipeKeys.find(key => 
            key.toLowerCase().includes(foodName.toLowerCase()) ||
            foodName.toLowerCase().includes(key.toLowerCase())
        );
        
        if (partialMatch) {
            recipe = recipes[partialMatch];
            foodName = partialMatch;
        }
    }
    
    if (recipe) {
        displayRecipe(foodName, recipe, `Recipe for your ${mood} mood: ${moodTitle}`);
    } else {
        displayGenericRecipe(foodName, moodTitle);
    }
}

function displayGenericRecipe(foodName, moodTitle) {
    const genericRecipe = {
        category: "Custom Recommendation",
        cookTime: "Varies",
        difficulty: "Check recipe source",
        servings: "Varies",
        ingredients: [
            "Check online cooking sites for specific ingredients",
            "Use fresh, quality ingredients when possible",
            "Adjust quantities based on serving size needed"
        ],
        instructions: [
            "Search for detailed recipe instructions online",
            "Follow cooking guidelines carefully",
            "Adjust seasoning and cooking time to your preference",
            "Enjoy your mood-boosting meal!"
        ],
        tips: `Perfect for when you're feeling this mood. Search online for detailed ${foodName} recipes.`
    };
    
    displayRecipe(foodName, genericRecipe, `Recipe suggestion: ${moodTitle}`);
}

function generateRandomRecipe() {
    displayRandomRecipe();
}

function displayRandomRecipe() {
    const recipeNames = Object.keys(recipes);
    const randomIndex = Math.floor(Math.random() * recipeNames.length);
    const recipeName = recipeNames[randomIndex];
    const recipe = recipes[recipeName];
    
    displayRecipe(recipeName, recipe, "Random Recipe Generator");
}

function displayRecipe(name, recipe, headerText = "Recipe Generator") {
    currentRecipe = { name, recipe };
    
    const sectionHeader = document.querySelector('main section h2');
    sectionHeader.textContent = headerText;
    
    const recipeHTML = `
        <div class="recipe-card">
            <div class="recipe-header">
                <h3>${name}</h3>
                <div class="recipe-meta">
                    <span class="category">${recipe.category}</span>
                    <span class="cook-time">⏱️ ${recipe.cookTime}</span>
                    <span class="difficulty">📊 ${recipe.difficulty}</span>
                    <span class="servings">👥 Serves ${recipe.servings}</span>
                </div>
            </div>
            
            <div class="recipe-content">
                <div class="ingredients-section">
                    <h4>🛒 Ingredients:</h4>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="instructions-section">
                    <h4>👨‍🍳 Instructions:</h4>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                ${recipe.tips ? `
                <div class="tips-section">
                    <h4>💡 Chef's Tips:</h4>
                    <p class="tips">${recipe.tips}</p>
                </div>
                ` : ''}
            </div>
            
            <div class="recipe-actions">
                <button onclick="printRecipe()" class="action-btn print-btn">🖨️ Print Recipe</button>
                <button onclick="shareRecipe()" class="action-btn share-btn">📤 Share Recipe</button>
                <button onclick="generateRandomRecipe()" class="action-btn random-btn">🎲 Another Recipe</button>
            </div>
        </div>
    `;
    
    recipeContainer.innerHTML = recipeHTML;
    
    const recipeCard = recipeContainer.querySelector('.recipe-card');
    recipeCard.classList.add('fade-in');
    
    setTimeout(() => {
        recipeCard.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function printRecipe() {
    if (!currentRecipe) return;
    
    const { name, recipe } = currentRecipe;
    
    const printContent = `
        <html>
        <head>
            <title>${name} - Recipe</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                h1 { color: #333; border-bottom: 2px solid #667eea; }
                .meta { background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 20px 0; }
                .meta span { margin-right: 20px; }
                h2 { color: #667eea; margin-top: 30px; }
                ul, ol { margin-left: 20px; }
                li { margin: 8px 0; }
                .tips { background: #fffacd; padding: 15px; border-radius: 5px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <div class="meta">
                <span><strong>Category:</strong> ${recipe.category}</span>
                <span><strong>Cook Time:</strong> ${recipe.cookTime}</span>
                <span><strong>Difficulty:</strong> ${recipe.difficulty}</span>
                <span><strong>Servings:</strong> ${recipe.servings}</span>
            </div>
            
            <h2>Ingredients:</h2>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            
            <h2>Instructions:</h2>
            <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
            
            ${recipe.tips ? `<div class="tips"><strong>Chef's Tips:</strong> ${recipe.tips}</div>` : ''}
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

function shareRecipe() {
    if (!currentRecipe) return;
    
    const { name } = currentRecipe;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: `${name} Recipe - Food Mood Generator`,
            text: `Check out this amazing ${name} recipe I found!`,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        const shareText = `Check out this amazing ${name} recipe from Food Mood Generator! ${url}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Recipe link copied to clipboard!');
            });
        } else {
            showNotification(`Share this recipe: ${shareText}`);
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: bold;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                notification.parentNode.removeChild(notification);
            }, 300);
        }
    }, 3000);
}

window.ToolsPage = {
    generateRandomRecipe,
    printRecipe,
    shareRecipe,
    displaySpecificRecipe
};