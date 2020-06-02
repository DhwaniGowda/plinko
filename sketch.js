const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var vertical;
var circle;
var base;

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);

  base = new ground(400,height,800,20);  
  
  vertical = new line (420,650,15,300);
  vertical1 = new line (470,650,15,300);
  vertical2 = new line (520,650,15,300);
  vertical3 = new line (370,650,15,300);
  vertical4 = new line (320,650,15,300);
  vertical5 = new line (270,650,15,300);
  vertical6 = new line (220,650,15,300);
  vertical7 = new line (570,650,15,300);
  vertical8 = new line (620,650,15,300);
  vertical9 = new line (620,650,15,300);
  vertical10 = new line (670,650,15,300);
  vertical11 = new line (720,650,15,300);
  vertical12 = new line (770,650,15,300);
  vertical13 = new line (170,650,15,300);
  vertical14 = new line (120,650,15,300);
  vertical15 = new line (70,650,15,300);
  vertical16 = new line (20,650,15,300);

  circle = new ball (30,100,30);
  circle1 = new ball (90,100,30);
  circle2 = new ball (150,100,30);
  circle3 = new ball (210,100,30);
  circle4 = new ball (270,100,30);
  circle5 = new ball (330,100,30);
  circle6 = new ball (390,100,30);
  circle7 = new ball (450,100,30);
  circle8 = new ball (510,100,30);
  circle9 = new ball (570,100,30);
  circle10 = new ball (630,100,30);
  circle11 = new ball (690,100,30);
  circle12 = new ball (750,100,30);
  circle13 = new ball (30,180,30);
  circle14 = new ball (90,180,30);
  circle15 = new ball (150,180,30);
  circle16 = new ball (210,180,30);
  circle17 = new ball (270,180,30);
  circle18 = new ball (330,180,30);
  circle19 = new ball (390,180,30);
  circle20 = new ball (450,180,30);
  circle21 = new ball (510,180,30);
  circle22 = new ball (570,180,30);
  circle23 = new ball (630,180,30);
  circle24 = new ball (690,180,30);
  circle25 = new ball (750,180,30);
  circle26 = new ball (30,260,30);
  circle27 = new ball (90,260,30);
  circle28 = new ball (150,260,30);
  circle29 = new ball (210,260,30);
  circle30 = new ball (270,260,30);
  circle31 = new ball (330,260,30);
  circle32 = new ball (330,260,30);
  circle33 = new ball (390,260,30);
  circle34 = new ball (450,260,30);
  circle35 = new ball (510,260,30);
  circle36 = new ball (570,260,30);
  circle37 = new ball (630,260,30);
  circle38 = new ball (690,260,30);
  circle39 = new ball (750,260,30);
  circle40 = new ball (30,340,30);
  circle41 = new ball (90,340,30);
  circle42 = new ball (150,340,30);
  circle43 = new ball (210,340,30);
  circle44 = new ball (270,340,30);
  circle45 = new ball (330,340,30);
  circle46 = new ball (390,340,30);
  circle47 = new ball (450,340,30);
  circle48 = new ball (510,340,30);
  circle49 = new ball (570,340,30);
  circle50 = new ball (630,340,30);
  circle51 = new ball (690,340,30);
  circle52 = new ball (750,340,30);
 

}
var particles = []; 
for (var  j  = 0; j< particles.length; j++){
  particles[j].display();
}

function draw() 
{
  background("black");  
  Engine.update(engine);

  base.display();

  vertical.display();
  vertical1.display();
  vertical2.display();
  vertical3.display();
  vertical4.display();
  vertical5.display();
  vertical6.display();
  vertical7.display();
  vertical8.display();
  vertical9.display();
  vertical10.display();
  vertical11.display();
  vertical12.display();
  vertical13.display();
  vertical14.display();
  vertical15.display();
  vertical16.display();

  circle.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  circle11.display();
  circle12.display();
  circle13.display();
  circle14.display();
  circle15.display();
  circle16.display();
  circle17.display();
  circle18.display();
  circle19.display();
  circle20.display();
  circle21.display();
  circle22.display();
  circle23.display();
  circle24.display();
  circle25.display();
  circle26.display();
  circle27.display();
  circle28.display();
  circle29.display();
  circle30.display();
  circle31.display();
  circle32.display();
  circle33.display();
  circle34.display();
  circle35.display();
  circle36.display();
  circle37.display();
  circle38.display();
  circle39.display(); 
  circle40.display();
  circle44.display();
  circle45.display();
  circle46.display();
  circle47.display();
  circle48.display();
  circle49.display();
  circle43.display();
  circle42.display();
  circle41.display();
  circle50.display();
  circle51.display();
  circle52.display();

if(frameCount%60===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10));
}

  drawSprites();
}