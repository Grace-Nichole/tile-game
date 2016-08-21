var Tile = function (x, y){
    this.x = x;
    this.y = y;
    this.width = 70;
};                           

var tiles = [];

var NUM_COLS = 5;
var NUM_ROWS = 4;
for(var x = 0; x <NUM_COLS; x+= 1 ) {
    for (var y = 0; y <NUM_ROWS; y+= 1) {
        tiles.push(new Tile (x * 78 + 10, y * 78 + 40));
    }
}
console.table(tiles);
