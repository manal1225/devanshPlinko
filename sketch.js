

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var count = 0;
var division = []
var plinko =[]
//var particle = []
var particle;
var score = 0;
var gameState = "play";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  


  //Create the Bodies Here.
  //division
  for(var d=40;d<800;d+= 80){ 
division.push(new Division(d,550,10,300)) 
  }

//plinko 1st row
for(var p=35;p<800;p+= 50){ 
  plinko.push(new Plinko(p,50)) 
    }
    //plinko 2nd row
    for(var p=65;p<800;p+= 50){ 
      plinko.push(new Plinko(p,150)) 
        }
//plinko 3rd row
        for(var p=35;p<800;p+= 50){ 
          plinko.push(new Plinko(p,250)) 
            } 
//plinko 4th row
            for(var p=65;p<800;p+= 50){ 
              plinko.push(new Plinko(p,350)) 
                }


ground = new Ground();


}


function draw(){

  background(0);
  textSize(35)
  text("Score : "+score,20,40);
Engine.update(engine)


// if(frameCount%60=== 0){
//   particle.push(new Particle(random(10,800),10))
  
//   }
  

//displaying the plinko
if ( gameState ==="end") {
    
  textSize(100);
  text("GameOver", 150, 250);
  //return
}
for(var p=0;p<plinko.length;p++){
  plinko[p].display()
  }


 //displaying the particle
//  for(var par=0; par<particle.length; par++){
//   particle[par].display();
//   }

//displaying the divsions
 for(var d=0;d<division.length;d++){
   division[d].display();
}



if(particle!= null){
 particle.display();

  
if (particle.body.position.y>760)
{
      if (particle.body.position.x < 300) 
      {
          score=score+500;      
          particle=null;
          if ( count>= 5) gameState ="end";                          
      }


      else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
      {
            score = score + 100;
            particle=null;
            if ( count>= 5) gameState ="end";

      }
      else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
      {
            score = score + 250;
            particle=null;
            if ( count>= 5)  gameState ="end";

      }      
      
}
}


ground.display();


 
}
function mousePressed(){
  if (gameState !== "end"){
count++;
particle = new Particle(mouseX,10,10,10);
 }
}