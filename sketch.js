var database, canvas, game, player, form, playerCount, allPlayers, car1, car2, car3, car4, cars;
var track, car1Img, car2Img, car3Img, car4Img, ground;
var gameState = 0;

function preload(){
    track = loadImage("../Images/track.jpg");
    car1Img = loadImage("../Images/car1.png");
    car2Img = loadImage("../Images/car2.png");
    car3Img = loadImage("../Images/car3.png");
    car4Img = loadImage("../Images/car4.png");
    ground = loadImage("../Images/ground.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}