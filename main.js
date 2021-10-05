var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content="take my selfie"){
        speak();
    }
}

function speak(){
    var synth= window.speechSynthesis;
    var speakdata="Clicking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,height:250,image_format:'png',png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_img">';
    });
}

function save(){
    savee=document.getElementById("img");
    img=document.getElementById("selfie_img").src;
    savee.href=img;
    savee.click();
}