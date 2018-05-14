var button = document.querySelector('button');
var content = document.getElementById('content');

button.addEventListener('click', toggleDisclosure);
button.addEventListener('keydown', toggleDisclosure);

function toggleDisclosure(e) {
  var type = e.type;

  // If the key pressed was not Space or Enter, return
  if (type === 'keydown' && (event.keyCode !== 13 && event.keyCode !== 32)) {
    return true;
  }

  e.preventDefault();
//checking to see if content is displayed
  if (content.getAttribute('aria-hidden') === 'true') {
//if it's not set the area hidden to false on the content
    content.setAttribute('aria-hidden', 'false');
    //apply the classes to indicate wether they are showing or not
    content.classList.remove('hidden');
//and aria-expanded to true on the button to indicate that the widget is open
    button.setAttribute('aria-expanded', 'true');
    button.classList.add('expanded');

  } else {
//or if the content is displaying it will do the opposite
    content.setAttribute('aria-hidden', 'true');
    content.classList.add('hidden');

    button.setAttribute('aria-expanded', 'false');
    button.classList.remove('expanded');

  }
}
