var caixa
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200, 200, 30, 30)

}

function draw() 
{
  background(30);
drawSprites();
if(keyDown("w")){
  caixa.y -= 2
}
if(keyDown("s")){
  caixa.y += 2
}
if(keyDown("a")){
  caixa.x -= 2
}
if(keyDown("d")){
  caixa.x += 2
}
}




