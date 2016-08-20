var Tile = function (x, y, context){
    this.x = x;
    this.y = y;
    this.cntxt = context;
    this.width = 10; // this is used for both width and height
    this.drawFaceDown = function() {
        //this.cntxt.fill(214, 247, 202);
       
        this.cntxt.rect(this.x, this.y, this.width, this.width);
        //image(getImage("")) 
        
        this.cntxt.fillStyle = "lightgreen";
        this.cntxt.fill();
        this.cntxt.strokeStyle = "#00aa00";
        this.cntxt.strokeRect(this.x, this.y, this.width, this.width)
    }
};                           

var canvas  = document.getElementById("theruthanncanvas");
var context = canvas.getContext("2d");

var tiles = [];

var NUM_COLS = 5;
var NUM_ROWS = 4;
for(var x = 0; x <NUM_COLS; x+= 1 ) {
    for (var y = 0; y <NUM_ROWS; y+= 1) {
        tiles.push(new Tile (x *  10, y *  10, context));
    }
}

for(var i = 0; i < tiles.length; i+=1) {
    tiles[i].drawFaceDown();
}
