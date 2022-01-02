song1 = "";
song2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;
song = 0;

function preload() {
    song1=loadSound("music.mp3");
    song2=loadsound("deysey")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}
function draw() {
    image(video, 0, 0, 600, 500);

    if(scoreLeftwrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		InNumberleftWristY = Number(leftWristY); 
		remove_decimals = floor(InNumberleftWristY);
		song1.isPlaying() = song;
        song2.stop();
        if(song = false){
            song1.play();
            document.getElementById("song").innerHTML = "mashup";
        }
	}
    if(scorerightwrist > 0.2)
	{
		circle(rightwristX,rightwristY,20);
		InNumberrightwristY = Number(rightwristY); 
		remove_decimals = floor(InNumberrightwristY);
		song2.isPlaying() = song;
        song1.stop();
        if(song = false){
            song2.play();
            document.getElementById("song").innerHTML = "dance monkey";
        }
	}
}
function modeLoaded() {
    console.log("posenet ready");
}
function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        leftwristx = results[0].pose.leftwrist.x;
        leftwristy = results[0].pose.leftwrist.y;
        console.log("left wrist x is - ", leftwristx, "left wrist y is - ", leftwristy);
        rightwristx = results[0].pose.rightwrist.x;
        rightwristy = results[0].pose.rightwrist.y;
        console.log("right wrist x is - ", rightwristx, "right wrist y is - ", rightwristy);
    }
}
