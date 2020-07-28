function Hello () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byespeak(names[i]);
  } else {
    hellospeak(names[i]);
  }
}

}

function hellospeak(name) {
  var speakWord = "Hello";
  console.log(speakWord + " " + name);
}

function byespeak(name) {
  var speakWord = "Good Bye";  
  console.log(speakWord + " " + name);
}

Hello();