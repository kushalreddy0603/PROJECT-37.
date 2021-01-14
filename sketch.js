var canvas;
var contestantCount 
var gameState = 0
var database
var contestants
var contestant
var allcontestants

var form,player,game
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
  }

