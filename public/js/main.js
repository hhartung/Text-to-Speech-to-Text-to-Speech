



//speech synthesis

var text = document.getElementById("field");
var textResult = document.getElementById("result");
var utterance = new SpeechSynthesisUtterance();
var recognition = new webkitSpeechRecognition();
var final_transcript = "";
var speaking = false;
var recognizing = false;


var prepareUtterance = function(sText) {
  utterance.lang = 'de-DE';
  utterance.text = sText;

  utterance.onstart = function () {
    speaking = true;
    console.log("start");
    recognition.start();
  };

  utterance.onend = function() {
    console.log("end");
    speaking = false;

  };

  window.speechSynthesis.speak(utterance);

}

document.getElementById("speakButton").addEventListener("click", function (event) {
	event.preventDefault();
  if(!speaking){
  prepareUtterance(text.value);
  }else {
    console.log("already speaking!");
  }
  
});



//recognition


recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "de-DE";



recognition.onresult = function(event) { 
  for(i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        console.log("RESULT:" + final_transcript);
        textResult.innerHTML = final_transcript;
        recognition.stop();
    }
  }
}

recognition.onend = function(event) {
  r = textResult.innerHTML;
  prepareUtterance(r);
  final_transcript = "";

}






