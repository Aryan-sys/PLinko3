const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;
var particle;
var turn = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
    
}
 


function draw() {
  
  background("black");
  textSize(20)
 text("Score : " + score,20,30);
 textSize(20);
 stroke("white")
 text("500",20,520);
 text("500",100,520);
 text("500",180,520);
 text("500",260,520);
 text("100",340,520);
 text("100",420,520);
 text("200",500,520);
 text("200",580,520);
 text("200",660,520);
 text("200",740,520);
 
 
  Engine.update(engine);
  mousePressed();
  
    
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
if(particle != null){
  console.log("hi")
    particle.display();

        if(particle.body.position.y > 760){
        

              if(particle.body.position.x < 300){
              score = score + 500; 
              particle = null;
                  if(turn >= 5){
                  gameState = "end";
                  }

              }


              else if(particle.body.position.x < 601  && particle.body.position.x > 301){
              score = score + 100; 
              particle = null;
                  if(turn >= 5){
                  gameState = "end";
                  }

              }

              else if(particle.body.position.x > 601 && particle.body.position.x < 900){
              score = score + 200; 
              particle = null;
                  if(turn >= 5){
                  gameState = "end";
                  }

        }
    }

}
    ground.display();
}
function mousePressed(){
  console.log("hi");
  if(gameState !== "end" ){
   turn++;
   console.log("creating particle");
      particle = new Particle(mouseX,10,10,10)
      console.log(particle);
     
  }
}