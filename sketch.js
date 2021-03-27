var PLAY = 2;
var END = 1;
var WINNER = 0;
var gameState = PLAY;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var jumpSound;
var gameOver, restart;
var dead;
var revive;
var start;
var startImage;
var win;
var winImage;
var trex_win;
var hitBox;
var victory;
var impo1,impo2,impo3,impo4,impo5,impo6,impo7,impo8,impo9,impo10,impo11,impo12,impo13;
var killedImg,killed;
var stab;
var victoryImg,victory;

function preload(){
  trex_running =   loadAnimation("stop.png","run.png");
  trex_collided = loadAnimation("stop.png");
  trex_win = loadImage("trex1.png");

  groundImage = loadImage("BG.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("red_imposter.png"); 
  obstacle2 = loadImage("yellow_imposter.png");
  obstacle3 = loadImage("orange_imposter.png");

  winImage = loadImage("win.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");

  jumpSound = loadSound("jumpSound.wav");
  dead = loadSound("Death.mp4");
  revive =loadSound("spawn.mp4");
  victory = loadSound("victory.mp4");
  killedImg = loadImage("killed.jpg");

  stab = loadSound("stab.mp4");
  won = loadSound("won.mp4");
  victoryImg = loadImage("victory.jpg");
}
function setup() {
  createCanvas(1500,500);

  cloudsGroup = new Group();
  obstaclesGroup = new Group();


  hitBox = createSprite(750,500,10000,900);
  hitBox.visible = false;

  trex = createSprite(1,250,20,50); 
  trex.addAnimation("collided", trex_collided);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("win", trex_win);
  trex.scale = 0.05;
  trex.setCollider("rectangle",0,0,500,700);
  trex.debug = false;

  ground = createSprite(1500,450,1500,2);
  ground.addImage("ground",groundImage);
  ground.x = width;
  ground.debug = false;
  ground.scale = 3

  impo1 = createSprite(random(200,500),400);
  impo1.addImage(obstacle1);
  impo1.scale = 0.06;
  impo1.velocityX = -2;
  impo1.setCollider("rectangle",0,0,500,500);
  impo1.debug = false;
  obstaclesGroup.add(impo1);

  impo2 = createSprite(random(800,1100),400);
  impo2.addImage(obstacle2);
  impo2.scale = 0.06;
  impo2.velocityX = -2;
  impo2.setCollider("rectangle",0,0,500,500);
  impo2.debug = false;
  obstaclesGroup.add(impo2);

  impo3 = createSprite(random(1400,1700),400);
  impo3.addImage(obstacle2);
  impo3.scale = 0.06;
  impo3.velocityX = -2;
  impo3.setCollider("rectangle",0,0,500,500);
  impo3.debug = false;
  obstaclesGroup.add(impo3);

  impo4 = createSprite(random(2200,2300),400);
  impo4.addImage(obstacle3);
  impo4.scale = 0.06;
  impo4.velocityX = -2;
  impo4.setCollider("rectangle",0,0,500,500);
  impo4.debug = false;
  obstaclesGroup.add(impo4);

  impo5 = createSprite(random(2600,2900),400);
  impo5.addImage(obstacle1);
  impo5.scale = 0.06;
  impo5.velocityX = -2;
  impo5.setCollider("rectangle",0,0,500,500);
  impo5.debug = false;
  obstaclesGroup.add(impo5);

  impo6 = createSprite(random(3200,3500),400);
  impo6.addImage(obstacle3);
  impo6.scale = 0.06;
  impo6.velocityX = -2;
  impo6.setCollider("rectangle",0,0,500,500);
  impo6.debug = false;
  obstaclesGroup.add(impo6);

  impo7 = createSprite(random(3800,4100),400);
  impo7.addImage(obstacle2);
  impo7.scale = 0.06;
  impo7.velocityX = -2;
  impo7.setCollider("rectangle",0,0,500,500);
  impo7.debug = false;
  obstaclesGroup.add(impo7);

  impo8 = createSprite(random(4400,4700),400);
  impo8.addImage(obstacle3);
  impo8.scale = 0.06;
  impo8.velocityX = -2;
  impo8.setCollider("rectangle",0,0,500,500);
  impo8.debug = false;
  obstaclesGroup.add(impo8);

  impo9 = createSprite(random(5000,5300),400);
  impo9.addImage(obstacle1);
  impo9.scale = 0.06;
  impo9.velocityX = -2;
  impo9.setCollider("rectangle",0,0,500,500);
  impo9.debug = false;
  obstaclesGroup.add(impo9);

  impo10 = createSprite(random(5600,5900),400);
  impo10.addImage(obstacle1);
  impo10.scale = 0.06;
  impo10.velocityX = -2;
  impo10.setCollider("rectangle",0,0,500,500);
  impo10.debug = false;
  obstaclesGroup.add(impo10);

  impo11 = createSprite(random(6200,6500),400);
  impo11.addImage(obstacle2);
  impo11.scale = 0.06;
  impo11.velocityX = -2;
  impo11.setCollider("rectangle",0,0,500,500);
  impo11.debug = false;
  obstaclesGroup.add(impo11);

  impo12 = createSprite(random(6800,7100),400);
  impo12.addImage(obstacle3);
  impo12.scale = 0.06;
  impo12.velocityX = -2;
  impo12.setCollider("rectangle",0,0,500,500);
  impo12.debug = false;
  obstaclesGroup.add(impo12);


  invisibleGround = createSprite(width/2,480,10000,125);  
  invisibleGround.visible = false;
  invisibleGround.debug = false;

  victory = createSprite(trex.x+200,trex.y+160,1500,500);
  victory.addImage(victoryImg);
  victory.scale = 0.75;

}
function draw() {
  background(255);
  strokeWeight(2);
  stroke("black");
  fill("grey");
  textSize(30);

  
  camera.position.x = trex.x+100;
  camera.position.y = trex.y;
  
  if (gameState===PLAY){
    victory.visible = false;

    if (keyDown(RIGHT_ARROW)){
      trex.x = trex.x+5;
      trex.changeAnimation("running", trex_running)
    }
    if (keyWentUp(RIGHT_ARROW)){
      trex.changeAnimation("collided", trex_collided);
    }

    if (trex.x >=500){
      impo1.velocityX = -4;
      impo2.velocityX = -4;
      impo3.velocityX = -4;
      impo4.velocityX = -4;
      impo5.velocityX = -4;
      impo6.velocityX = -4;
      impo7.velocityX = -4;
      impo8.velocityX = -4;
      impo9.velocityX = -4;
      impo10.velocityX = -4;
      impo11.velocityX = -4;
      impo12.velocityX = -4;
      console.log("STAGE 1");
    }

    if (trex.x >=1000){
      impo1.velocityX = -6;
      impo2.velocityX = -6;
      impo3.velocityX = -6;
      impo4.velocityX = -6;
      impo5.velocityX = -6;
      impo6.velocityX = -6;
      impo7.velocityX = -6;
      impo8.velocityX = -6;
      impo9.velocityX = -6;
      impo10.velocityX = -6;
      impo11.velocityX = -6;
      impo12.velocityX = -6;
      console.log("STAGE 2");
    }

    if (trex.x >=1500){
      impo1.velocityX = -8;
      impo2.velocityX = -8;
      impo3.velocityX = -8;
      impo4.velocityX = -8;
      impo5.velocityX = -8;
      impo6.velocityX = -8;
      impo7.velocityX = -8;
      impo8.velocityX = -8;
      impo9.velocityX = -8;
      impo10.velocityX = -8;
      impo11.velocityX = -8;
      impo12.velocityX = -8;
      console.log("STAGE 3");
    }

    if (trex.x >=2000){
      impo1.velocityX = -10;
      impo2.velocityX = -10;
      impo3.velocityX = -10;
      impo4.velocityX = -10;
      impo5.velocityX = -10;
      impo6.velocityX = -10;
      impo7.velocityX = -10;
      impo8.velocityX = -10;
      impo9.velocityX = -10;
      impo10.velocityX = -10;
      impo11.velocityX = -10;
      impo12.velocityX = -10;
      console.log("STAGE 4");
    }

    if (trex.x >=2500){
      impo1.velocityX = -12;
      impo2.velocityX = -12;
      impo3.velocityX = -12;
      impo4.velocityX = -12;
      impo5.velocityX = -12;
      impo6.velocityX = -12;
      impo7.velocityX = -12;
      impo8.velocityX = -12;
      impo9.velocityX = -12;
      impo10.velocityX = -12;
      impo11.velocityX = -12;
      impo12.velocityX = -12;
      console.log("STAGE 5");
    }

    if (trex.x >=3200 ){
      won.play();
      gameState = WINNER;
    }

    if(keyDown("space") && trex.y >=height-105 || mousePressedOver(hitBox) && trex.y >=height-105) {
     jumpSound.play();
      trex.velocityY = -12;
    }

    trex.velocityY = trex.velocityY + 0.8


    trex.collide(invisibleGround);

    if(obstaclesGroup.isTouching(trex)){
      killed = createSprite(trex.x+100,trex.y,1500,500);
      killed.addImage(killedImg);
      killed.scale=0.45;
      killed.visible = true;

      restart = createSprite(trex.x-500,height/2+50);
      restart.addImage(restartImg);
      restart.scale = 0.7;
      restart.visible = true;
      restart.depth = trex.depth;

      stab.play();

      gameState = END;
    }
  }
  else if (gameState === END) {

    victory.visible = false;
    killed.visible = true;
    ground.visible = false;

    obstaclesGroup.destroyEach();
    
    trex.visible = false;

    text("RESTART", restart.x-70, restart.y+90);

    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    trex.changeAnimation("collided",trex_collided);
    
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart) || keyDown("enter")) {
      revive.play();
      killed.destroy();
      reset();
    }
  }
  if (gameState===WINNER){
    trex.changeAnimation("collided", trex_collided);
    trex.x = displayWidth/2-600;
    trex.y = displayHeight/2;
    trex.visible = true;

    victory.visible = true;
    ground.visible = false;

    trex.velocityY = 0;

    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(0);
    cloudsGroup.setLifetimeEach(0);

    obstaclesGroup.visible = false;

    if(mousePressedOver(restart) || keyDown("enter")) {
      revive.play();
      victory.destroy();
      reset2();
    }
  }
  trex.depth = trex.depth + 1;
  drawSprites();
}

function reset(){
  setup();
  gameState = PLAY;
  restart.destroy();
  trex.changeAnimation("collided",trex_collided);
}

function reset2(){
  setup();
  gameState = PLAY;
  trex.changeAnimation("collided",trex_collided);
}