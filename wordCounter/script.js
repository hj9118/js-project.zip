  var text = document.querySelector('.text');
  var words = document.querySelector('.words');
  var characters = document.querySelector('characters');
  text.addEventListener('input', () => {
    characters.textContent = text.value.length;
    var txt = text.value.trum();
    words.textContent = txt.split(/\s+/).filter((item) => item).length;
  });