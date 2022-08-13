var bgImg;

function preload(){
  bgImg =loadImage("BG1.jpg");
}

function setup(){
  
  createCanvas(800,800);
  
  bg=createSprite(600,600,300,300);
  bg.addImage(bgImg)
// Moving background

}

function draw() {
 // background("pink");
  drawSprites();
} 