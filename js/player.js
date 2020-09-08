class Player {
    constructor(){
        this.index = null;
        this.name =null;
        this.distance = 0;
        this.rank = null;
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank = data.val();
        })
    }
    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carAtEnd:rank
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name, 
            distance : this.distance
        })
    }
    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val()   //val = value
        })
    }
}