(function(window){
    var helloSpeaker = {};
 
   var speakWord = "Hello";
   helloSpeaker.Speak = function Speak(name){
    console.log(speakWord + " " + name);
  }
    window.helloSpeaker = helloSpeaker; 
  
  })(window);
