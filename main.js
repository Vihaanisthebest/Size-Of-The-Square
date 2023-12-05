noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(30, 65)

    canvas = createCanvas(500, 410);
    canvas.position(560, 135);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#D3D3D3');

    document.getElementById("square_side").innerHTML = "Width And Height Of A Square Will Be = " + difference + "px";
    fill('#0000FF');
    stroke('#0000FF');
    square(noseX, noseY, difference);
}

function modeLoaded()
{
    console.log('PoseNet IS Initialized!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}