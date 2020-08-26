class Form {
    constructor(){
        this.input = createInput("Name:");
        this.button = createButton("Start");
        this.greeting = createElement("h4");
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 -50,0);

       
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            this.greeting.html("Welcome, "+player.name);
            this.greeting.position(displayWidth/2 - 170,displayHeight/4);
        })
    }
}