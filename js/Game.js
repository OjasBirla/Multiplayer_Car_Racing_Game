class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage("car1", car1Img);
        car2 = createSprite(200, 200);
        car2.addImage("car2", car2Img);
        car3 = createSprite(300, 200);
        car3.addImage("car3", car3Img);
        car4 = createSprite(400, 200);
        car4.addImage("car4", car4Img);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();

        player.getCarsAtEnd();

        textSize(30);
        text("Game Start", 440, 250);
        
        if(allPlayers !== undefined){
            var index = 0;

            background("black");
            image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            var x = 175;
            var y;
        
            //var display_position = 130;
        
            for(var plr in allPlayers){
                index = index + 1;

                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                console.log(allPlayer[plr]);
                
                if(cars[index - 1] === undefined){
                    cars[index - 1] = {}
                }
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }

            }
            //display_position += 20;
            //textSize(15);
            //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }
        if(player.distance > 4000){
            gameState = 2;
            player.rank += 1;
            Player.updateCarsAtEnd(player.rank);
        }

        drawSprites();
    }
    end(){
        //game.update(2);
        console.log("Game Over");
        console.log(player.rank);
    }
}