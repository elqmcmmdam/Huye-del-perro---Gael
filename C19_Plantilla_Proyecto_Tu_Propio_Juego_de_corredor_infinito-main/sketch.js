var human, dog, path, rock;
var humanImg, dogImg, pathImg, rockImg;
var rockGroup;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
 pathImg = loadImage("carreterahorizontal.jpg");
 humanImg = loadImage("correr.png");
 dogImg = loadImage("perro.png");
 rockImg = loadImage("roca.png");
}

function setup() { 
 createCanvas(600,400);

 path = createSprite(200,200);
 path.addImage(pathImg);

 human = createSprite(100,200,30,30);
 human.addImage(humanImg);
 human.scale = 0.1

 dog = createSprite(30,200,30,30);
 dog.addImage(dogImg);
 dog.scale = 0.1

 rockGroup = new Group();

}

function draw() {
 background(50);
 if(gameState == PLAY){
 path.x = path.x - 8;

 dog.y = human.y;

 if(keyDown("UP_ARROW")) {
     human.y = human.y - 5;
 }

 if(keyDown("DOWN_ARROW")) {
     human.y = human.y + 5;
 }

 if(path.x == 0) {
     path.x = width/1.5;
 }

 createRock();
 }
 if(rockGroup.isTouching(human)) {
     gameState = END;
     rockGroup.destroyEach();
 }
 drawSprites();
}

function createRock() {
    if(World.frameCount % 60 == 0) {
        rock = createSprite(585,Math.round(random(100,300,)),10,10);
        rock.addImage(rockImg);
        rock.scale = 0.1;
        rock.velocityX = -4;
        rock.lifetime = 150;
        rockGroup.add(rock);
    }

}