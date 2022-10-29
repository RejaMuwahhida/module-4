
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i=0;i<10;i++) {
  if(names[i].charAt(0).toLowerCase()=='j'){
    helloSpeaker.Speak(names[i]);
}
else{
    goodByeSpeaker.Speak(names[i])
} }