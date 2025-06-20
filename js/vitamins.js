const vitaminData = {
  vitaminA: {
    name: "Vitamin A  – for vision, skin, and immune health",
    foods: ["Carrots 🥕", "Sweet Potatoes 🍠", "Spinach 🌿", "Kale 🥬", "Mango 🥭", "Pumpkin 🎃", "Red Bell Peppers 🌶️", "Apricots"],
    plants: ["Carrot Plant", "Spinach Leaves", "Kale", "Pumpkin Vine"],
    workouts: ["Outdoor walking", "Eye relaxation exercises"],
    sunlight: "Morning sunlight exposure (10–15 mins) boosts vitamin A metabolism and eye health",
    benefits: "Essential for healthy vision, skin regeneration, immune strength, and cell growth",
    deficiency: ["Night blindness", "Dry or rough skin", "Frequent infections", "Delayed wound healing"],
    richSources: ["Beef liver", "Carrot juice", "Spinach"],
    foodTiming: "Best absorbed with healthy fats (eat with avocado or nuts)",
    prepTips: "Steam vegetables or eat with olive oil to improve absorption",
    tipsForVegetarians: "Focus on colorful vegetables and fruits rich in beta-carotene, which your body converts to vitamin A.",
    kidsNote: "Important for children's growth and vision development; include orange and green veggies daily.",
    pregnancyNote: "Avoid excess vitamin A supplements; rely on natural foods to support fetal development safely.",
    sunSafetyTip: "Avoid strong midday sun; morning sun supports vitamin A without skin damage.",
    workoutSynergy: "Eye-focused exercises enhance vitamin A benefits for vision and relaxation.",
    funFact: "Did you know? Sweet potatoes have more vitamin A than carrots per serving!"
  },
  vitaminB1: {
    name: "Vitamin (Thiamine) – for energy and nerve function",
    foods: ["Whole Grains 🌾", "Sunflower Seeds 🌻", "Beans 🫘", "Green Peas", "Flaxseeds"],
    plants: ["Sunflower", "Pea Plant"],
    workouts: ["Cardio for energy metabolism", "Brisk walking", "Dancing"], // no yoga
    sunlight: "Daily sunlight supports overall energy balance and mood",
    benefits: "Boosts energy production, nerve function, heart health, and muscle contraction",
    deficiency: ["Fatigue", "Muscle weakness", "Nerve damage", "Poor memory"],
    richSources: ["Whole grains", "Sunflower seeds"], // pork removed
    foodTiming: "Eat with balanced meals; avoid alcohol which impairs absorption",
    prepTips: "Avoid overcooking grains and beans to retain vitamin B1",
    tipsForVegetarians: "Whole grains and legumes are great sources; avoid processed grains to preserve B1.",
    kidsNote: "Important for energy and growth; include B1-rich foods in meals for active kids.",
    pregnancyNote: "Supports maternal energy and fetal brain development.",
    sunSafetyTip: "General sunlight exposure supports metabolism but maintain skin protection.",
    workoutSynergy: "Cardio workouts increase energy demands, supporting vitamin B1 use.",
    funFact: "Did you know? Fermented foods like tempeh are also good sources of vitamin B1!"
  },

  vitaminB2: {
    name: "Vitamin B2 (Riboflavin) – helps break down food for energy",
    foods: ["Almonds 🌰", "Spinach 🥬", "Eggs 🥚", "Milk 🥛", "Mushrooms 🍄", "Quinoa"],
    plants: ["Spinach", "Mushroom Caps"],
    workouts: ["Light aerobic exercises", "Stretching"],
    sunlight: "Sunlight supports cellular energy and skin function",
    benefits: "Helps convert food into energy, supports skin, eye, and nerve health",
    deficiency: ["Cracks at mouth corners", "Sore throat", "Red eyes", "Fatigue"],
    richSources: ["Dairy products", "Eggs", "Spinach", "Almonds"],
    foodTiming: "Best taken with meals containing protein",
    prepTips: "Avoid prolonged exposure to light which degrades riboflavin",
    tipsForVegetarians: "Dairy, eggs, and plant sources like spinach and almonds help vegetarians meet B2 needs.",
    kidsNote: "Supports growth and skin health; include B2-rich foods regularly.",
    pregnancyNote: "Important for fetal development and energy metabolism.",
    sunSafetyTip: "Regular sunlight supports skin and energy but use sun protection as needed.",
    workoutSynergy: "Light aerobic exercises help optimize B2 utilization.",
    funFact: "Did you know? Riboflavin gives milk and urine a yellow color when consumed in excess!"
  },
  vitaminB3: {
    name: "Vitamin B3 (Niacin) – for metabolism and skin health",
    foods: ["Chicken 🍗", "Tuna 🐟", "Peanuts 🥜", "Brown Rice 🍚", "Whole Wheat Bread 🍞", "Avocados"],
    plants: ["Peanut Plant", "Avocado Tree"],
    workouts: ["Endurance training", "Jogging", "Rowing"],
    sunlight: "Natural sunlight assists body energy pathways and reduces stress",
    benefits: "Supports healthy skin, nervous system, cholesterol control, and energy metabolism",
    deficiency: ["Pellagra (dermatitis, diarrhea, dementia)", "Fatigue", "Depression"],
    richSources: ["Meats", "Peanuts", "Whole grains"],
    foodTiming: "Take with meals to reduce flushing side effects",
    prepTips: "Roasting peanuts retains niacin well",
    tipsForVegetarians: "Focus on peanuts, brown rice, whole grains, and avocados to meet B3 needs.",
    kidsNote: "Important for healthy skin and energy; include diverse grains and legumes.",
    pregnancyNote: "Supports energy metabolism and fetal nervous system development.",
    sunSafetyTip: "Sunlight helps energy but protect skin during prolonged exposure.",
    workoutSynergy: "Endurance workouts boost B3-dependent energy production.",
    funFact: "Did you know? Niacin was once used to treat high cholesterol levels!"
  },
  vitaminB5: {
    name: "Vitamin B5 (Pantothenic Acid) – for hormone and energy production",
    foods: ["Avocado 🥑", "Eggs 🥚", "Mushrooms 🍄", "Sweet Potatoes 🍠", "Broccoli 🥦", "Cauliflower"],
    plants: ["Avocado Tree", "Mushrooms", "Sweet Potato Vine"],
    workouts: ["Resistance training", "Stretch-based exercises"],
    sunlight: "Regular sunlight boosts metabolism and adrenal function",
    benefits: "Essential for making blood cells, synthesizing hormones, and converting food into energy",
    deficiency: ["Fatigue", "Headache", "Numbness", "Digestive issues"],
    richSources: ["Avocado", "Eggs", "Mushrooms"],
    foodTiming: "Eat with balanced meals for best absorption",
    prepTips: "Minimal cooking preserves vitamin B5",
    tipsForVegetarians: "Avocados, mushrooms, and sweet potatoes are great plant sources.",
    kidsNote: "Supports energy and healthy growth; include colorful vegetables.",
    pregnancyNote: "Helps hormone production and fetal growth.",
    sunSafetyTip: "Moderate sun exposure supports adrenal health; avoid overexposure.",
    workoutSynergy: "Strength exercises increase demand for B5 in energy metabolism.",
    funFact: "Did you know? The name 'pantothenic' comes from the Greek word for 'everywhere' because it's found in many foods!"
  },
  vitaminB6: {
    name: "Vitamin B6 (Pyridoxine) – for brain development and immune support",
    foods: ["Bananas 🍌", "Chicken 🍗", "Potatoes 🥔", "Spinach 🌿", "Sunflower Seeds 🌻", "Avocados"],
    plants: ["Banana Plant", "Spinach"],
    workouts: ["Strength training", "Balance-focused workouts", "Core strengthening"],
    sunlight: "Supports serotonin production and mental clarity",
    benefits: "Aids brain development, balances mood, and supports red blood cell formation",
    deficiency: ["Depression", "Confusion", "Anemia", "Weakened immune function"],
    richSources: ["Bananas", "Chicken", "Potatoes"],
    foodTiming: "Best consumed with meals",
    prepTips: "Cooking may reduce B6; steaming preserves it better",
    tipsForVegetarians: "Plant sources like bananas, spinach, and sunflower seeds help meet needs.",
    kidsNote: "Important for brain development and mood regulation.",
    pregnancyNote: "Supports fetal brain growth and maternal mood.",
    sunSafetyTip: "Sunlight boosts mood and B6 metabolism; protect skin as needed.",
    workoutSynergy: "Strength and balance workouts complement B6's brain and muscle support.",
    funFact: "Did you know? Vitamin B6 helps your body make neurotransmitters like serotonin and dopamine!"
  },
  vitaminB7: {
    name: "Vitamin B7 (Biotin) – for hair, skin, and nails",
    foods: ["Egg Yolks 🥚", "Nuts 🌰", "Sweet Potatoes 🍠", "Seeds 🌱", "Cauliflower"],
    plants: ["Sweet Potato Plant", "Nut Trees"],
    workouts: ["General fitness routines", "Flexibility exercises", "Bodyweight training"],
    sunlight: "Sunlight encourages healthy metabolism and glowing skin",
    benefits: "Important for healthy hair, skin, nails, and supports energy production",
    deficiency: ["Hair thinning", "Skin rash", "Brittle nails"],
    richSources: ["Egg yolks", "Nuts", "Sweet potatoes"],
    foodTiming: "Eat with meals for optimal absorption",
    prepTips: "Raw nuts and seeds retain more biotin",
    tipsForVegetarians: "Nuts, seeds, and sweet potatoes provide good plant-based biotin.",
    kidsNote: "Supports skin and hair health during growth phases.",
    pregnancyNote: "Important for skin health and energy during pregnancy.",
    sunSafetyTip: "Moderate sun exposure aids skin health; avoid overexposure.",
    workoutSynergy: "Regular fitness supports biotin's role in metabolism.",
    funFact: "Did you know? Biotin is sometimes called 'the beauty vitamin' for its effects on hair and nails!"
  },
  vitaminB9: {
    name: "Vitamin B9 (Folate/Folic Acid) – for cell growth and pregnancy health",
    foods: ["Leafy Greens 🥬", "Lentils 🫘", "Asparagus 🌿", "Beets", "Citrus Fruits 🍋", "Okra"],
    plants: ["Lentil Plant", "Leafy Greens", "Beet Plant"],
    workouts: ["Gentle stretching", "Pilates"],
    sunlight: "Natural light helps maintain mood and cognitive clarity",
    benefits: "Crucial for DNA repair, pregnancy health, and red blood cell formation",
    deficiency: ["Fatigue", "Mouth sores", "Poor growth", "Neural tube defects"],
    richSources: ["Leafy greens", "Legumes", "Citrus fruits"],
    foodTiming: "Best absorbed with vitamin C-rich foods",
    prepTips: "Light cooking preserves folate; avoid boiling",
    tipsForVegetarians: "Rich in leafy greens and legumes, easy to meet needs naturally.",
    kidsNote: "Vital for growing bodies and brain development.",
    pregnancyNote: "Extremely important to prevent neural tube defects; increase intake naturally.",
    sunSafetyTip: "Natural light supports overall well-being and cognitive function.",
    workoutSynergy: "Gentle exercises support healthy blood flow and folate utilization.",
    funFact: "Did you know? Folate is why leafy greens are called 'superfoods' for pregnancy!"
  },
  vitaminB12: {
    name: "Vitamin B12 (Cobalamin) – for red blood cells and nerve health",
    foods: ["Eggs 🥚", "Milk 🥛", "Fish 🐟", "Cheese 🧀", "Chicken 🍗", "Shellfish"],
    plants: ["N/A (naturally in animal sources only)"],
    workouts: ["Strength training to boost energy", "Core workouts", "Stamina exercises"],
    sunlight: "Sunlight supports mental wellness and daily rhythm",
    benefits: "Essential for red blood cell production, nerve health, and cognitive performance",
    deficiency: ["Fatigue", "Numbness or tingling", "Poor memory", "Mood changes"],
    richSources: ["Shellfish", "Liver", "Eggs"],
    foodTiming: "Take with meals for better absorption",
    prepTips: "Avoid overcooking animal products to preserve B12",
    tipsForVegetarians: "Vegans should seek fortified foods or consult about supplementation.",
    kidsNote: "Crucial for developing nervous system; ensure adequate intake through diet or fortified foods.",
    pregnancyNote: "Supports fetal nervous system development; vegetarians should monitor levels carefully.",
    sunSafetyTip: "Sunlight enhances mood but does not produce B12 naturally.",
    workoutSynergy: "Muscle strengthening workouts help utilize vitamin B12 efficiently.",
    funFact: "Did you know? Some algae and fermented foods claim B12 but often lack active forms."
  },
  vitaminC: {
    name: "Vitamin C – for immunity, skin, and wound healing",
    foods: ["Oranges 🍊", "Kiwis 🥝", "Strawberries 🍓", "Bell Peppers 🌶️", "Broccoli 🥦", "Guava", "Papaya", "Lemons 🍋"],
    plants: ["Citrus Trees", "Strawberry Plants", "Pepper Plants"],
    workouts: ["Aerobic workouts to support immunity", "Outdoor cycling", "HIIT"],
    sunlight: "Indirect sunlight enhances immunity and reduces inflammation",
    benefits: "Boosts immune defense, collagen production, and iron absorption",
    deficiency: ["Frequent colds", "Bleeding gums", "Dry skin", "Slow wound healing"],
    richSources: ["Bell peppers", "Oranges", "Strawberries"],
    foodTiming: "Consume raw or lightly cooked to preserve vitamin C",
    prepTips: "Avoid boiling; steam or eat fresh for maximum vitamin C",
    tipsForVegetarians: "Most fruits and veggies are rich in vitamin C; fresh and raw maximize benefits.",
    kidsNote: "Supports growing immune systems; add bright fruits and veggies to snacks.",
    pregnancyNote: "Helps with iron absorption and tissue repair during pregnancy.",
    sunSafetyTip: "Protect skin while getting fresh air and indirect sun exposure.",
    workoutSynergy: "Aerobic exercise improves immune function enhanced by vitamin C.",
    funFact: "Did you know? Bell peppers have more vitamin C than oranges per serving!"
  },
  vitaminD: {
    name: "Vitamin D – for bones and calcium absorption",
    foods: ["Salmon 🐠", "Egg Yolks 🥚", "Liver", "Mushrooms exposed to sun 🍄", "Sardines 🐟"],
    plants: ["Sunlight-grown Mushrooms"],
    workouts: ["Outdoor jogging", "Morning stretching"],
    sunlight: "Midday sun exposure (10–20 mins) is best for vitamin D synthesis",
    benefits: "Supports bone health, calcium absorption, immune strength, and mood balance",
    deficiency: ["Bone pain", "Weak muscles", "Low energy", "Frequent illness"],
    richSources: ["Fatty fish", "Egg yolks", "Sun-exposed mushrooms"],
    foodTiming: "Take with fatty meals for better absorption",
    prepTips: "Minimal cooking of mushrooms preserves vitamin D content",
    tipsForVegetarians: "Include sun-exposed mushrooms and fortified plant milks to boost vitamin D naturally.",
    kidsNote: "Crucial for growing bones; encourage outdoor play for natural vitamin D.",
    pregnancyNote: "Supports bone development and immune health of both mother and baby.",
    sunSafetyTip: "Balance between vitamin D synthesis and skin protection; avoid sunburn.",
    workoutSynergy: "Outdoor exercises enhance natural vitamin D production and mood.",
    funFact: "Did you know? Mushrooms exposed to UV light can produce vitamin D like humans!"
  },
  vitaminE: {
    name: "Vitamin E – antioxidant, protects cells",
    foods: ["Almonds 🌰", "Sunflower Seeds 🌻", "Spinach 🥬", "Avocado 🥑", "Hazelnuts", "Olive Oil"],
    plants: ["Sunflower", "Avocado Tree", "Olive Tree"],
    workouts: ["Light cardio", "Stretch routines", "Gentle dance"],
    sunlight: "Moderate sunlight helps protect skin cells and reduce oxidative stress",
    benefits: "Acts as a powerful antioxidant, supports skin, hair, and cellular protection",
    deficiency: ["Muscle weakness", "Vision problems", "Immune issues"],
    richSources: ["Nuts", "Seeds", "Leafy greens"],
    foodTiming: "Consume with fats for better absorption",
    prepTips: "Raw nuts and seeds retain highest vitamin E levels",
    tipsForVegetarians: "Nuts, seeds, and green leafy vegetables provide excellent vitamin E sources.",
    kidsNote: "Supports healthy skin and immune function.",
    pregnancyNote: "Important antioxidant support during pregnancy.",
    sunSafetyTip: "Moderate sun exposure protects skin cells; avoid excessive UV.",
    workoutSynergy: "Light cardio complements vitamin E’s antioxidant role.",
    funFact: "Did you know? Vitamin E helps protect your cells from damage caused by free radicals!"
  },
  // For vitaminK workouts, replaced "Tai Chi" with "Balance training"
  vitaminK: {
    name: "Vitamin K – for blood clotting and bone health",
    foods: ["Kale 🥬", "Broccoli 🥦", "Spinach 🌿", "Brussels Sprouts 🥦", "Green Beans", "Cabbage"],
    plants: ["Leafy Greens", "Broccoli Plant", "Cabbage Plant"],
    workouts: ["Flexibility workouts", "Balance training"], // removed Tai Chi
    sunlight: "Supports bone health and calcium use indirectly",
    benefits: "Essential for blood clotting, bone strength, heart health, and cell regulation",
    deficiency: ["Excessive bleeding", "Easy bruising", "Weak bones"],
    richSources: ["Leafy greens", "Broccoli", "Brussels sprouts"],
    foodTiming: "Eat regularly to maintain adequate levels",
    prepTips: "Light cooking preserves vitamin K",
    tipsForVegetarians: "Leafy greens are the best source and easy to include in any diet.",
    kidsNote: "Helps with blood clotting and bone development.",
    pregnancyNote: "Important for maternal blood health and bone strength.",
    sunSafetyTip: "Sunlight supports overall health; balance exposure safely.",
    workoutSynergy: "Balance and flexibility workouts support bone strength aided by vitamin K.",
    funFact: "Did you know? Vitamin K is named after 'Koagulation', the German word for clotting!"
  }
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
  <p><strong>Foods:</strong></p>
  <ul>${vitamin.foods.map(f => `<li>${f}</li>`).join('')}</ul>
  <p><strong>Plants to Grow:</strong></p>
  <ul>${vitamin.plants.map(p => `<li>${p}</li>`).join('')}</ul>
  <p><strong>Recommended Workouts:</strong></p>
  <ul>${vitamin.workouts.map(w => `<li>${w}</li>`).join('')}</ul>
  <p><strong>Sunlight Exposure:</strong> ${vitamin.sunlight}</p>
  <p><strong>Benefits:</strong> ${vitamin.benefits || 'N/A'}</p>
  <p><strong>Deficiency Symptoms:</strong> ${vitamin.deficiency ? vitamin.deficiency.join(', ') : 'N/A'}</p>
  <p><strong>Rich Sources:</strong> ${vitamin.richSources ? vitamin.richSources.join(', ') : 'N/A'}</p>
  <p><strong>Food Timing:</strong> ${vitamin.foodTiming || 'N/A'}</p>
  <p><strong>Preparation Tips:</strong> ${vitamin.prepTips || 'N/A'}</p>
  <p><strong>Tips for Vegetarians:</strong> ${vitamin.tipsForVegetarians || 'N/A'}</p>
  <p><strong>Kids Note:</strong> ${vitamin.kidsNote || 'N/A'}</p>
  <p><strong>Pregnancy Note:</strong> ${vitamin.pregnancyNote || 'N/A'}</p>
  <p><strong>Sun Safety Tip:</strong> ${vitamin.sunSafetyTip || 'N/A'}</p>
  <p><strong>Workout Synergy:</strong> ${vitamin.workoutSynergy || 'N/A'}</p>
  <p><strong>Fun Fact:</strong> ${vitamin.funFact || 'N/A'}</p>
`;



  // Placeholder for animated icons in the future
  // animateVitaminIcons(val);
});
