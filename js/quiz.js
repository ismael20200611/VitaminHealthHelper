const symptomToVitaminMap = {
  tiredness: ["vitaminB12", "vitaminD", "vitaminE"],
  drySkin: ["vitaminA", "vitaminE"],
  bleedingGums: ["vitaminC", "vitaminK"],
  musclePain: ["vitaminD", "vitaminB12"],
  poorVision: ["vitaminA"],
  slowHealing: ["vitaminC", "vitaminA"],
  bonePain: ["vitaminD", "vitaminK"],
  hairLoss: ["vitaminB12", "vitaminA", "vitaminE"],
  memoryLoss: ["vitaminB12", "vitaminD"],
  numbness: ["vitaminB12"],
  easyBruising: ["vitaminC", "vitaminK"],
  depression: ["vitaminD", "vitaminB12"],
  poorAppetite: ["vitaminB12", "vitaminA"],
};

const vitaminNames = {
  vitaminA: "Vitamin A",
  vitaminB12: "Vitamin B12",
  vitaminC: "Vitamin C",
  vitaminD: "Vitamin D",
  vitaminE: "Vitamin E",
  vitaminK: "Vitamin K",
};

const symptomForm = document.getElementById("symptomForm");
const quizResults = document.getElementById("quizResults");

symptomForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(cb => cb.value);

  if (checkedSymptoms.length === 0) {
    quizResults.innerHTML = `<p>Please select at least one symptom to check.</p>`;
    return;
  }

  // Count vitamin mentions based on symptoms
  const vitaminCount = {};
  checkedSymptoms.forEach(symptom => {
    (symptomToVitaminMap[symptom] || []).forEach(vit => {
      vitaminCount[vit] = (vitaminCount[vit] || 0) + 1;
    });
  });

  // Sort vitamins by count desc
  const sortedVitamins = Object.entries(vitaminCount).sort((a, b) => b[1] - a[1]);

  if (sortedVitamins.length === 0) {
    quizResults.innerHTML = `<p>No vitamin deficiencies detected from selected symptoms.</p>`;
    return;
  }

  quizResults.innerHTML = `<h2>Possible Vitamin Deficiency Matches</h2><ul>` +
    sortedVitamins.map(([vit, count]) => `<li><strong>${vitaminNames[vit]}</strong> — related to ${count} symptom(s)</li>`).join('') +
    `</ul>`;
});
