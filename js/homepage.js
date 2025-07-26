const moodFoods = {
    sad: {
        title: "Comfort Food Recommendations",
        foods: [
            "Warm Chicken Soup - Nothing beats a bowl of homemade chicken soup for comfort",
            "Mac and Cheese - Creamy, cheesy goodness to lift your spirits",
            "Chocolate Chip Cookies - Fresh baked cookies with a glass of milk",
            "Grilled Cheese & Tomato Soup - Classic comfort food combination",
            "Ice Cream Sundae - Sometimes you just need something sweet",
            "Mashed Potatoes - Creamy and comforting side dish",
            "Hot Chocolate - Warm and soothing drink with marshmallows"
        ]
    },
    tired: {
        title: "Energy Boosting Foods",
        foods: [
            "Green Smoothie - Packed with vitamins and natural energy",
            "Avocado Toast - Healthy fats and complex carbs for sustained energy",
            "Greek Yogurt with Berries - Protein and antioxidants to fuel your day",
            "Oatmeal with Nuts - Slow-release energy to keep you going",
            "Banana Peanut Butter Toast - Quick energy from natural sugars and protein",
            "Energy Balls - Dates, nuts, and seeds for natural boost",
            "Green Tea - Gentle caffeine with antioxidants"
        ]
    },
    excited: {
        title: "Celebration Foods",
        foods: [
            "Homemade Pizza - Make it your way with favorite toppings",
            "Colorful Tacos - Vibrant and fun with lots of fresh toppings",
            "Sushi Platter - Fresh, beautiful, and perfect for celebrating",
            "Chocolate Fondue - Interactive and indulgent treat",
            "BBQ Feast - Gather friends and fire up the grill",
            "Birthday Cake - Sweet celebration centerpiece",
            "Festive Cupcakes - Individual treats perfect for parties"
        ]
    },
    happy: {
        title: "Feel-Good Foods",
        foods: [
            "Fresh Fruit Salad - Light, refreshing, and naturally sweet",
            "Mediterranean Bowl - Healthy and colorful with lots of flavor",
            "Homemade Bread - The joy of baking and sharing",
            "Herb-Crusted Salmon - Nutritious and delicious",
            "Rainbow Veggie Stir-fry - Colorful and packed with nutrients",
            "Quinoa Buddha Bowl - Nourishing and satisfying",
            "Fresh Spring Rolls - Light and filled with crisp vegetables"
        ]
    },
    stressed: {
        title: "Calming & Soothing Foods",
        foods: [
            "Chamomile Tea with Honey - Naturally calming and soothing",
            "Warm Oatmeal - Comforting and rich in stress-fighting nutrients",
            "Dark Chocolate - Contains compounds that can improve mood",
            "Herbal Tea Blend - Lavender, mint, and lemon balm for relaxation",
            "Vegetable Soup - Warm, nourishing, and easy to digest",
            "Banana Smoothie - Rich in magnesium and potassium",
            "Whole Grain Toast - Complex carbs that help produce serotonin"
        ]
    },
    romantic: {
        title: "Romantic Dinner Ideas",
        foods: [
            "Pasta Carbonara - Classic Italian romance on a plate",
            "Chocolate-Covered Strawberries - Sweet and intimate dessert",
            "Candlelit Steak Dinner - Elegant and impressive",
            "Seafood Paella - Exotic and perfect for sharing",
            "Red Wine & Cheese Board - Simple yet sophisticated",
            "Lobster Thermidor - Luxurious and special occasion worthy",
            "Tiramisu - Classic Italian dessert for two"
        ]
    }
};

let currentRecommendation = {
    food: '',
    mood: '',
    title: ''
};

let moodButtons;
let getRecipeButton;
let recommendationDiv;

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    moodButtons = document.querySelectorAll('main section div:first-of-type button');
    
    getRecipeButton = document.querySelector('main section div:last-of-type button');
    
    createRecommendationArea();
    
    addMoodButtonListeners();
    
    addRecipeButtonListener();
}

function createRecommendationArea() {
    recommendationDiv = document.createElement('div');
    recommendationDiv.id = 'recommendation';
    recommendationDiv.style.display = 'none';
    recommendationDiv.innerHTML = `
        <h3 id="rec-title"></h3>
        <p id="rec-description"></p>
        <div id="rec-actions">
            <button onclick="getAnotherRecommendation()">Try Another</button>
        </div>
    `;
    
    const recipeButtonSection = document.querySelector('main section div:last-of-type');
    recipeButtonSection.parentNode.insertBefore(recommendationDiv, recipeButtonSection);
}

function addMoodButtonListeners() {
    const moods = ['sad', 'tired', 'excited', 'happy', 'stressed', 'romantic'];
    
    moodButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            moodButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            getMoodFood(moods[index]);
        });
    });
}

function addRecipeButtonListener() {
    getRecipeButton.addEventListener('click', function() {
        if (currentRecommendation.food) {
            const recipeData = {
                food: currentRecommendation.food,
                mood: currentRecommendation.mood,
                title: currentRecommendation.title,
                timestamp: Date.now()
            };
            
            try {
                localStorage.setItem('selectedRecipe', JSON.stringify(recipeData));
            } catch (e) {
                console.log('localStorage not available, using URL parameters');
            }
            
            window.location.href = 'tools.html';
        } else {
            showAlert('Please select a mood first!');
        }
    });
}

function getMoodFood(mood) {
    const moodData = moodFoods[mood];
    const randomIndex = Math.floor(Math.random() * moodData.foods.length);
    const selectedFood = moodData.foods[randomIndex];
    
    const foodName = selectedFood.split(' - ')[0];
    
    currentRecommendation = {
        food: foodName,
        mood: mood,
        title: moodData.title,
        description: selectedFood
    };
    
    displayRecommendation();
    
    showRecipeButton();
}

function displayRecommendation() {
    const titleElement = document.getElementById('rec-title');
    const descriptionElement = document.getElementById('rec-description');
    
    titleElement.textContent = currentRecommendation.title;
    descriptionElement.textContent = currentRecommendation.description;
    
    recommendationDiv.style.display = 'block';
    recommendationDiv.classList.add('fade-in');
    
    setTimeout(() => {
        recommendationDiv.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }, 100);
}

function getAnotherRecommendation() {
    if (currentRecommendation.mood) {
        getMoodFood(currentRecommendation.mood);
    }
}

function showRecipeButton() {
    const recipeButtonSection = document.querySelector('main section div:last-of-type');
    recipeButtonSection.style.display = 'block';
    recipeButtonSection.classList.add('fade-in');
}

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ff6b6b;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: bold;
    `;
    
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 3000);
}

function getMoodFromButton(buttonText) {
    const moodMap = {
        '😢 Sad': 'sad',
        '😴 Tired': 'tired',
        '🎉 Excited': 'excited',
        '😊 Happy': 'happy',
        '😰 Stressed': 'stressed',
        '💕 Romantic': 'romantic'
    };
    return moodMap[buttonText] || 'happy';
}

window.FoodMoodGenerator = {
    getMoodFood,
    getAnotherRecommendation,
    currentRecommendation
};