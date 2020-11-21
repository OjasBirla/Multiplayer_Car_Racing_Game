class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.reset = createButton("Reset");
    }
    hide(){
        this.title.hide();
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Multiplayer Car racing Game");
        this.title.position(displayWidth/2 - 90, 0);

        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);

        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.reset.position(displayWidth - 100, 20);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(490, 270);
        })
        
        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0)
        })
    }
}