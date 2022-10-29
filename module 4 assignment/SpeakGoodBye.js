(function(window){
  var goodByeSpeaker = {};

  var speakWord = "Good Bye";
 goodByeSpeaker.Speak = function Speak(name){
  console.log(speakWord + " " + name);
}
  window.goodByeSpeaker = goodByeSpeaker; 

})(window);
