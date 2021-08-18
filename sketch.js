var plane, enemy;
var bullet, bulletImg, planeimg ,enemyImage;
var x = [125, 210, 310, 555, 890, 1000, 15, 455]
function preload() {
  bulletImg = loadImage("Images/bullet.png");
  planeimg = loadImage("Images/Plane.jpg");
  enemyImage = loadImage("Images/Eplane.png");
}

function setup() {
  createCanvas(1366, 625);
  plane = new Player(665, 510);
  enemy = new Enemy(random([100,300,500,900,1200,1000,1300]),150,50,50)


    
}
function draw() {
  background(44, 18, 18);
  text(mouseX + "  , " + mouseY, 100, 100);

  if (keyDown("space") || mousePressedOver(plane.player) || keyDown(38)) {
    bullet = createSprite(plane.player.position.x, 510, 15, 15)
    bullet.velocityY = -20

  }

     
  move();
  drawSprites();
}

 function move() {
  if (keyDown(39)) {
    plane.player.position.x = plane.player.position.x + 20
    bullet.x=bullet.x+20
  }
  else if (keyDown(37)) {
    plane.player.position.x = plane.player.position.x - 20
  }
 }