var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

var lvl1 = document.querySelector('dec1');
var lvl2 = document.querySelector('dec2');

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

var init = function(str) {
  var count = str.length;
  var delay = 50;
  
  lvl1.innerHTML = '';
  lvl2.innerHTML = '';
  
  var gen = setInterval(function() {
    dec1.setAttribute('data-before', ranString(count));
    dec1.setAttribute('data-after', ranString(count));
    dec2.setAttribute('data-before', ranString(count));
    dec2.setAttribute('data-after', ranString(count));
    if(delay > 0) {
      delay--;
    }
    else {
      if(count < str.length) {
        dec1.innerHTML += str[str.length - count-1];
        dec2.innerHTML += str[str.length - count-1];
      }
      count--;
      if(count === -1) {
        clearInterval(gen);
      }
    }
  }, 32);
}

});
