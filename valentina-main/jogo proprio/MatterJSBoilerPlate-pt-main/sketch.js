var fogo, agua;
var fogoImg, aguaImg;
var aguaD, fogoD;
var aguaE, fogoE;
var diamanteBlue, diamanteRed;
var diamanteBlueImg, diamanteRedImg;
var bg;
var parede1,parede2,parede3,parede4,parede5,parede6,parede7;
var parede8,parede9,parede10;


function preload() {
	fogoImg = loadImage("./va/fogo_frente.png");
	aguaImg = loadImage("./va/agua_frente.png");
	aguaD = loadImage("./va/agua_direita.png");
	fogoD = loadAnimation("./va/fogo_direita.png", "./va/fogo_d2.png");
	aguaE = loadImage("./va/agua_esquerda.png");
	fogoE = loadAnimation("./va/fogo_esquerda.png", "./va/fogo_esquerda2.png");
	diamanteBlueImg = loadImage("./va/diamante_azul.png");
	diamanteRedImg = loadImage("./va/diamante_red.png");
	bg = loadImage("./va/images.jpg");



}

function setup() {
	createCanvas(windowWidth, windowHeight);


	fogo = createSprite(80,1125,20,20);
	fogo.addImage("frente",fogoImg);

	agua = createSprite(170,1144,20,20);
	agua.addImage("frente",aguaImg);

	
	parede1 = createSprite(width/2,1300,width,20);
	parede2 = createSprite(1100,960,2300,20);
	parede3 = createSprite(1700,606,width,20);
	parede4 = createSprite(1100,260,2300,20);

	parede5 = createSprite(570,1200,20,180);
	parede6 = createSprite(2500,722,20,250);
	parede7 = createSprite(210,346,20,180);
	


}


function draw() {
	rectMode(CENTER);
	background(0);
	image(bg, 0, 0, width, height);






	movimentoFogo();
	movimentoAgua();

	fogo.velocityY+=0.5;
	agua.velocityY+=0.5;

	fogo.collide(parede1);
	agua.collide(parede1);

	//coordenadas do mouse na tela
	fill("red")
	textSize(50)
	text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
	drawSprites();

}

function movimentoFogo(){
	
	

	if (keyIsDown(LEFT_ARROW)) {
		fogo.x-=3
	}

	if (keyIsDown(RIGHT_ARROW)) {
		fogo.x+=3
	}

	if (keyDown("UP_ARROW")) {
		fogo.velocityY=-8
	}
	
	

}


function movimentoAgua(){
	
	

	
	if (keyDown("a")) {
		agua.x-=3
	}

	if (keyDown("d")) {
		agua.x+=3
	}

	if (keyDown("w")) {
		agua.velocityY=-8
	}

}
