img = "";
status = "";

function preload() {
img = loadImage('bed.jpg');
}

function setup() {
    canvas = createcanvas(640, 420);
    canvas.center();
    objectdetctor = ml5.objectdetctor('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dtecting Objects";
}

function draw () {
    image(img, 0, 0,640,420);
    Fill("#FF0000");
    text("bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectdetctor.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}