var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

var el = document.querySelector('h1');
var btn = document.querySelector('.button');

var ran = function() {
 return Math.floor(Math.random() * dictionary.length)
}

var ranString = function(amt) {
  var string = '';
  for(var i = 0; i < amt; i++) {
    string += dictionary[ran()];
  }
  return string;
}



init('File Encrypted');

var showButton = function() {
  btn.classList.add('show');
}

const content = document.getElementById('Title');
btn.addEventListener('click', function() {
 content.innerHTML = '<h2>SWAG</h2>';
 btn.remove(); 
 init.remove();
});
