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

const reportForm = document.getElementById("reportForm");
const reportOutput = document.getElementById("reportOutput");

reportForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementById("userName").value.trim();
  const vitaminKey = document.getElementById("vitaminReportSelect").value;

  if (!userName || !vitaminKey) {
    alert("Please enter your name and select a vitamin.");
    return;
  }

  const vitamin = vitaminData[vitaminKey];

  reportOutput.style.display = "block";
  reportOutput.innerHTML = `
    <h2>Vitamin Deficiency Report for ${userName}</h2>
    <h3>${vitamin.name}</h3>
    <p>Here are natural suggestions to help improve your ${vitamin.name} levels:</p>
    <ul><strong>Foods to Include:</strong> ${vitamin.foods.map(f => `<li>${f}</li>`).join('')}</ul>
    <ul><strong>Plants to Grow:</strong> ${vitamin.plants.map(p => `<li>${p}</li>`).join('')}</ul>
    <ul><strong>Recommended Workouts:</strong> ${vitamin.workouts.map(w => `<li>${w}</li>`).join('')}</ul>
    <p><strong>Sunlight Exposure:</strong> ${vitamin.sunlight}</p>

    <p style="margin-top:2em;">Stay healthy and always consult healthcare professionals if symptoms persist.</p>
  `;

  // Trigger browser print dialog for user convenience
  setTimeout(() => {
    window.print();
  }, 300);
});
