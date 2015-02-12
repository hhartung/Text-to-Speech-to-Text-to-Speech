
//speech synthesis

var text = document.getElementById("field");
var textResult = document.getElementById("result");
var utterance = new SpeechSynthesisUtterance();
var recognition = new webkitSpeechRecognition();
var final_transcript = "";


document.getElementById("speakButton").addEventListener("click", function (event) {
	event.preventDefault();

	console.log(text.value);

  utterance.lang = 'de-DE';
  utterance.text = text.value;
	utterance.onstart = function () {
		console.log("start");
    recognition.start();
	};

	utterance.onend = function() {
		console.log("end");
	};

	window.speechSynthesis.speak(utterance);
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
        text.innerHTML = final_transcript;
        textResult.innerHTML = final_transcript;
        recognition.stop();
    }
  }
}

recognition.onend = function(event) {
  utterance.text = final_transcript;
  utterance.lang = 'de-DE';

  window.speechSynthesis.speak(utterance);
  final_transcript = "";
}

var prepareUtterance = function() {

}




