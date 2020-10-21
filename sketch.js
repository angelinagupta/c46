var ground;
var groundImg;
var rand;
var balloonGroup, balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8;
var balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16;
var balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24;
var balloon25, balloon26;
var balloonImg;
var balloonLabel = [97, 98, 99, 100, 101 ,102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
var balloonLabel1, balloonLabel2, balloonLabel3;

function preload(){
  groundImg = loadImage("ground.png");
 // A = loadImage("a.png");
  balloon1 = loadImage("a.png");
  balloon2 = loadImage("b.png");
  balloon3 = loadImage("c.png");
  balloon4 = loadImage("d.png");
  balloon5 = loadImage("e.png");
  balloon6 = loadImage("f.png");
  balloon7 = loadImage("g.png");
  balloon8 = loadImage("h.png");
  balloon9 = loadImage("i.png");
  balloon10 = loadImage("j.png");
  balloon11 = loadImage("k.png");
  balloon12 = loadImage("l.png");
  balloon13 = loadImage("m.png");
  balloon14 = loadImage("n.png");
  balloon15 = loadImage("o.png");
  balloon16 = loadImage("p.png");
  balloon17 = loadImage("q.png");
  balloon18 = loadImage("r.png");
  balloon19 = loadImage("s.png");
  balloon20 = loadImage("t.png");
  balloon21 = loadImage("u.png");
  balloon22 = loadImage("v.png");
  balloon23 = loadImage("w.png");
  balloon24 = loadImage("x.png");
  balloon25 = loadImage("y.png");
  balloon26 = loadImage("z.png");
  balloonImg = [balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8,
         balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16,
         balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24,
         balloon25, balloon26]
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 375, 800, 50);
  ground.addImage("ground", groundImg);
  ground.scale = 0.25;

  balloonGroup = createGroup();
}

function draw() {
  background(0,196,255);
 // console.log(balloonLabel);
  spawnBalloons();
  drawSprites();
  
}

// Function spawn balloon 
function spawnBalloons() {
  if(frameCount % 100 === 0) {
    var balloon = createSprite(random(40,760),350,30,40);
    
    //balloon.debug = true;
    balloon.velocityY = -6;

    rand = Math.round(random(0,25));
    
    balloonLabel1 = balloonLabel[rand];
    balloon.addImage(""+balloonLabel1, balloonImg[rand]);

    balloonLabel2 = balloon.getAnimationLabel();
    balloonLabel3 = String.fromCharCode(balloonLabel2);
    console.log(balloonLabel2+"-"+balloonLabel3);

   // balloon.addImage(balloon1);
    //generate random balloons
   /* switch(rand) {
      case 1: balloon.addImage(balloon1);
              break;
      case 2: balloon.addImage(balloon2);
              break;
      case 3: balloon.addImage(balloon3);
              break;
      case 4: balloon.addImage(balloon4);
              break;
      case 5: balloon.addImage(balloon5);
              break;
      case 6: balloon.addImage(balloon6);
              break;
      case 7: balloon.addImage(balloon7);
              break;
      case 8: balloon.addImage(balloon8);
              break;
      case 9: balloon.addImage(balloon9);
              break;
      case 10: balloon.addImage(balloon10);
              break;
      case 11: balloon.addImage(balloon11);
              break;
      case 12: balloon.addImage(balloon12);
              break;
      case 13: balloon.addImage(balloon13);
              break;
      case 14: balloon.addImage(balloon14);
              break;
      case 15: balloon.addImage(balloon15);
              break;
      case 16: balloon.addImage(balloon16);
              break;
      case 17: balloon.addImage(balloon17);
              break;
      case 18: balloon.addImage(balloon18);
              break;
      case 19: balloon.addImage(balloon19);
              break;
      case 20: balloon.addImage(balloon20);
              break;
      case 21: balloon.addImage(balloon21);
              break;
      case 22: balloon.addImage(balloon22);
              break;
      case 23: balloon.addImage(balloon23);
              break;
      case 24: balloon.addImage(balloon24);
              break;
      case 25: balloon.addImage(balloon25);
              break;
      case 26: balloon.addImage(balloon26);
              break;
      default: break;
    }
    textSize(20);
    text("hello", balloon.x, balloon.y);*/

    //console.log(balloon);
    //assign scale and lifetime to the balloon           
   balloon.scale = 0.9;
    balloon.lifetime = 300;

    
    //add each balloon to the group
    balloonGroup.add(balloon);
  }
}
