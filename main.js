const Webcam = require("./webcam.min");

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{

    document.getElementById("text-box").innerHTML = "";

    recognition.start()
}
recognition.onresult = function(event)
{

    console.log(event);

    content = event.results[0][0].transcript;

    console.log(content);
    
    document.getElementById("text-box").innerHTML = content;

    speak();

}
function speak()
{

    var synth = window.SpeechSynthesis;

    speak_data = document.getElementById("text-box").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
}

Webcam.set({

    width:369,
    height:250,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera");

