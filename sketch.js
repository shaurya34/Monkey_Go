var Play = 1
var End =0
var gameState = Play
var monkey , monkey_running,monkey_stop
var banana ,bananaImage, obstacle, obstacleImage
var foodgp, obstaclegp
var survivalTime
var ground

function preload(){
  
  monkey_stop = loadAnimation("sprite_1.png")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(80,360)
 monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,400,800,20)
  
  foodgp = createGroup();
  obstaclegp = createGroup();
}


function draw() {
background("white")
  
  if (gameState === Play){
    ground.
  velocityX = -10
   monkey.velocityY =   monkey.velocityY + 1
  
  if(keyDown("space") && monkey.y >= 350){
  monkey.velocityY = -20  
  }
   if(ground.x < 0) {
        ground.x = ground.width/2
       
      }
    
     if(foodgp.isTouching(monkey)){
    foodgp.destroyEach();
    
  }
    if(obstaclegp.isTouching(monkey)){
      gameState = End
      
    }
  bananas();
  rock();
   monkey.collide(ground)
     stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time = "+survivalTime,150,20)
  
  }
  
   if(gameState === End){
      
  
     monkey.velocityY = 0
     banana.velocityX = 0
     obstacle.velocityX = 0
     banana.lifetime = -1
     obstacle.lifetime = -1
     ground.velocityX = 0
     stroke ("red")
     textSize(60)
     fill("red")
     text("GAMEOVER",20,200)
   }
 
  
 
  
  
 
 
 drawSprites();
  
}
function bananas(){
  if (frameCount % 70 === 0){
  banana = createSprite(500,Math.round(random(126,300)),10,10) 
  banana.addImage(bananaImage)
    banana.scale = 0.08
 banana.velocityX = -7
  banana.lifetime = 130
  foodgp.add(banana)
  }
  
}
function rock(){
  if (frameCount % 120 === 0){
  obstacle = createSprite(500,370,10,10) 
  obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15
 obstacle.velocityX = -7
  obstacle.lifetime = 130
  obstaclegp.add(obstacle)
    obstacle.depth = ground.depth-1
  }
}




