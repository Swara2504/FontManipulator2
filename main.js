function setup()
{
    video= createCapture(VIDEO);
    video.size(450,400);

    canvas= createCanvas(450,400);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('poseNet is initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("results");
    }
}