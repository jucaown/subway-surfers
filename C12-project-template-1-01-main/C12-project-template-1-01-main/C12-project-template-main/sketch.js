var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 10;
  path.scale=1.2;

  //crie um sprite de menino
  boy = createSprite(200,325);
  //adicione uma animação de corrida para ele
  boy.addAnimation("boyX", boyImg);
  boy.scale=0.8;
    
  //crie um limite à esquerda
  leftBoundary=createSprite(10,0,100,800);
  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false
  //crie um limite à direita
  rightBoundary=createSprite(390,0,100,800);
  //defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
