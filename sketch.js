var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleaf, leaf,redleaf;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redImg = loadImage("redImage.png");
  orangeImg= loadImage("orangeLeaf.png");
  LeafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  //creating continous apple and leaves
  var select_sprites = Math.round(random(1,4));

  if(frameCount % 80 === 0){
    if(select_sprites ==1){
      //call createApples function
      createApples();
    }
    else if(select_sprites ==2){
      //call createLeaves function
      createLeaves();
    }
    else if (select_sprites ==3){
      createRedleaf();
    }
    else{
      createOrangeleaf();
    }
  }

  drawSprites();

} 



function createApples(){
var apple = createSprite(random(50,350),40,10,10);
  //Add image to apple sprite
  apple.addImage(appleImg);
  //scale the apple
  apple.scale = 0.05;
  //giving the velocity to apple so that the apple move downward
  apple.velocityY = + 3;
  //giving lifetime to apple
  apple.lifetime = 400; 
}

function createLeaves(){
var leaves = createSprite(random(50,350),40,5,5);
  //add image to leaves sprite
  leaves.addImage(LeafImg);
  //scale the leave
  leaves.scale = 0.05;
  //giving velocity to leaves
  leaves.velocityY = 3;
  //giving lifetime to the leaves
  leaves.lifetime = 400; 
}

function createRedleaf(){
  var redleaf = createSprite(random(50,350),40,5,5);
  redleaf.addImage(redImg);
  redleaf.scale = 0.05;
  redleaf.velocityY = 3;
  redleaf.lifetime = 400;
}
function createOrangeleaf(){
  var orangeLeaf = createSprite(random(50,350),40,5,5);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale = 0.05;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 400;
}


