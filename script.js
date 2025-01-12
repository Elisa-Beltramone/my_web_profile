const contactButton = document.getElementById('contactButton');
const contact = document.getElementById('contact');


contactButton.addEventListener('click', function() {
    contact.style.fontSize = '18px';
    contact.style.color = 'aqua';
  
  setTimeout(function() {
    contact.style.fontSize = '';
    contact.style.color = '';
  }, 2000);

});
