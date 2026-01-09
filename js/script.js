// Toggle menu functionality
  function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
  }


//Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      autoDisplay: false
    },
    'google_translate_element'
  );

  // Apply saved language
  var lang = getCookie('googtrans');
  if (lang) {
    var select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang.split('/')[2];
      select.dispatchEvent(new Event('change'));
    }
  }
}

// Save language when user changes it
document.addEventListener('change', function (e) {
  if (e.target.classList.contains('goog-te-combo')) {
    var lang = e.target.value;
    document.cookie = 'googtrans=/en/' + lang + ';path=/';
  }
});

// Cookie helper
function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}
// finish translate method
