const vitaminData = {
  vitaminA: {
    name: "Vitamin A",
    foods: ["Carrots 🥕", "Sweet Potatoes 🍠", "Spinach 🌿", "Kale 🥬", "Mango 🥭"],
    plants: ["Carrot Plant", "Spinach Leaves", "Kale"],
    workouts: ["Outdoor walking for eye health", "Yoga for circulation"],
    sunlight: "Morning sunlight exposure 10-15 mins",
  },
  vitaminB1: {
    name: "Vitamin B1 (Thiamine)",
    foods: ["Whole grains 🌾", "Sunflower Seeds 🌻", "Beans 🫘", "Pork 🐖"],
    plants: ["Sunflower"],
    workouts: ["Cardio for energy metabolism"],
    sunlight: "General sunlight exposure recommended",
  },
  vitaminB2: {
    name: "Vitamin B2 (Riboflavin)",
    foods: ["Almonds 🌰", "Spinach 🥬", "Eggs 🥚", "Milk 🥛"],
    plants: ["Spinach"],
    workouts: ["Light aerobic exercises"],
    sunlight: "General exposure supports energy levels",
  },
  vitaminB3: {
    name: "Vitamin B3 (Niacin)",
    foods: ["Chicken 🍗", "Tuna 🐟", "Peanuts 🥜", "Brown rice 🍚"],
    plants: ["Peanut Plant"],
    workouts: ["Endurance training"],
    sunlight: "Sunlight helps energy production",
  },
  vitaminB5: {
    name: "Vitamin B5 (Pantothenic Acid)",
    foods: ["Avocado 🥑", "Eggs 🥚", "Mushrooms 🍄", "Sweet potatoes 🍠"],
    plants: ["Avocado Tree", "Mushrooms"],
    workouts: ["Resistance training"],
    sunlight: "Regular exposure recommended",
  },
  vitaminB6: {
    name: "Vitamin B6 (Pyridoxine)",
    foods: ["Bananas 🍌", "Chicken 🍗", "Potatoes 🥔", "Spinach 🌿"],
    plants: ["Banana Plant", "Spinach"],
    workouts: ["Strength and balance exercises"],
    sunlight: "Supports energy and mood",
  },
  vitaminB7: {
    name: "Vitamin B7 (Biotin)",
    foods: ["Egg Yolks 🥚", "Nuts 🌰", "Sweet Potatoes 🍠"],
    plants: ["Sweet Potato Plant"],
    workouts: ["General fitness workouts"],
    sunlight: "Sunlight aids metabolism",
  },
  vitaminB9: {
    name: "Vitamin B9 (Folate)",
    foods: ["Leafy Greens 🥬", "Lentils 🫘", "Asparagus 🌿"],
    plants: ["Lentil Plant", "Leafy Greens"],
    workouts: ["Yoga and stretching"],
    sunlight: "General exposure recommended",
  },
  vitaminB12: {
    name: "Vitamin B12 (Cobalamin)",
    foods: ["Eggs 🥚", "Milk 🥛", "Fish 🐟", "Cheese 🧀", "Chicken 🍗"],
    plants: ["N/A (mostly animal sources)"],
    workouts: ["Strength training to boost energy"],
    sunlight: "Sunlight helps with mood, not B12 synthesis",
  },
  vitaminC: {
    name: "Vitamin C",
    foods: ["Oranges 🍊", "Kiwis 🥝", "Strawberries 🍓", "Bell Peppers 🌶️", "Broccoli 🥦"],
    plants: ["Citrus Trees", "Strawberry Plants"],
    workouts: ["Aerobic exercises to enhance immunity"],
    sunlight: "Indirect sunlight is beneficial",
  },
  vitaminD: {
    name: "Vitamin D",
    foods: ["Salmon 🐠", "Egg Yolks 🥚", "Fortified Milk 🥛"],
    plants: ["Mushrooms (exposed to sunlight)"],
    workouts: ["Outdoor jogging or cycling"],
    sunlight: "Direct midday sun exposure for 10-20 mins",
  },
  vitaminE: {
    name: "Vitamin E",
    foods: ["Almonds 🌰", "Sunflower Seeds 🌻", "Spinach 🥬", "Avocado 🥑"],
    plants: ["Sunflower"],
    workouts: ["Light cardio exercises"],
    sunlight: "Moderate sunlight exposure",
  },
  vitaminK: {
    name: "Vitamin K",
    foods: ["Kale 🥬", "Broccoli 🥦", "Spinach 🌿", "Brussels Sprouts 🥦"],
    plants: ["Leafy Greens"],
    workouts: ["Stretching and flexibility workouts"],
    sunlight: "Sunlight supports general health",
  },
};

const vitaminSelect = document.getElementById("vitaminSelect");
const suggestionsDiv = document.getElementById("suggestions");

vitaminSelect.addEventListener("change", () => {
  const val = vitaminSelect.value;
  if (!val) {
    suggestionsDiv.innerHTML = "";
    return;
  }
  const vitamin = vitaminData[val];
  suggestionsDiv.innerHTML = `
    <h2>Natural Ways to Improve ${vitamin.name} Levels</h2>
    <ul><strong>Foods:</strong> ${vitamin.foods.map(f => `<li>${f}</li>`).join('')}</ul>
    <ul><strong>Plants to Grow:</strong> ${vitamin.plants.map(p => `<li>${p}</li>`).join('')}</ul>
    <ul><strong>Recommended Workouts:</strong> ${vitamin.workouts.map(w => `<li>${w}</li>`).join('')}</ul>
    <p><strong>Sunlight Exposure:</strong> ${vitamin.sunlight}</p>
  `;

  // Placeholder for animated icons in the future
  // animateVitaminIcons(val);
});
