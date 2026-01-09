// Toggle menu functionality
  function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
  }


//Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}
