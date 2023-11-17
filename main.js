var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie"){
        speak();
    }
}
function speak(){
    synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
       photo(); 
       save();
    },5000);
}
Webcam.set({
    width:440,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
camera = document.getElementById("camera");
function photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'selfie' src = '"+data_uri+"'>";
    })
}
function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;
    link.href = img;
    link.click();
}
