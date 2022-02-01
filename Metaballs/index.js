var bobNum = 5;
var boblist = [];

function setup() {
	colorMode(HSB);
	var myCanvas = createCanvas(200, 200);
	myCanvas.parent("canvasDiv");
	background(51);
	for (i = 0; i < bobNum; i++) {
		boblist.push(new Bob(random(0, width), random(0, height)));
	}
}

function draw() {
	background(51);
	loadPixels();
	for (x = 0; x < width; x++) {
		for (y = 0; y < height; y++) {
			let sum = 0;
			for (i = 0; i < boblist.length; i++) {
				let xdif = x - boblist[i].x;
				let ydif = y - boblist[i].y;
				let d = sqrt(xdif * xdif + ydif * ydif);
				sum += (10 * boblist[i].r) / d;
			}
			set(x, y, color(sum, 255, 255));
		}
	}
	updatePixels();

	for (i = 0; i < boblist.length; i++) {
		boblist[i].update();
		//boblist[i].show();
	}
}
