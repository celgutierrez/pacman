//characters

pacman = {
    x: 6,
    y: 6
};

//building map
var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,1,2,2,2,2,2,1],
    [1,2,1,1,2,2,2,2,2,2,1,1,2,1],
    [1,2,1,2,2,1,1,3,1,2,2,1,2,1],
    [1,2,2,2,2,1,5,4,1,2,2,2,2,1],
    [1,2,1,2,2,1,1,1,1,2,2,1,2,1],
    [1,2,1,1,2,2,6,2,2,2,1,1,2,1],
    [1,2,2,2,2,2,1,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];


var world = document.getElementById('world');

function drawWorld() {
    world.innerHTML = '';

    for( var y = 0; y < map.length; y++) {

        for(var x = 0; x < map[y].length; x++){
            if (map[y][x] === 1) {
                world.innerHTML+= "<div class='wall'></div>";
            } else if(map[y][x] === 2) {
                world.innerHTML+= "<div class='coin'></div>";
            } else if(map[y][x] === 3) {
                world.innerHTML+= "<div class='ground'></div>";
            } else if(map[y][x] === 4) {
                world.innerHTML+= "<div class='ghost1'></div>";
            } else if(map[y][x] === 5) {
                world.innerHTML+= "<div class='ghost2'></div>";
            } else if(map[y][x] === 6) {
                world.innerHTML+= "<div class='pacman'></div>";
            }
        }
     world.innerHTML+="<br>";
    }
}

drawWorld();

//movement

document.onkeydown = function(e){
    if(e.keyCode == 37) {
        if(map[pacman.y][pacman.x-1] !==1){
        map[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x - 1;
        map[pacman.y][pacman.x] = 6;
        drawWorld();
        }
    } else if(e.keyCode == 38) {
        if(map[pacman.y-1][pacman.x] !==1){
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 6;
        drawWorld();
        } 
    } else if(e.keyCode == 39) {
        if(map[pacman.y][pacman.x+1] !==1){
        map[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x + 1;
        map[pacman.y][pacman.x] = 6;
        drawWorld(); 
        }   
    } else if(e.keyCode == 40) {
        if(map[pacman.y+1][pacman.x] !==1){
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y + 1;
        map[pacman.y][pacman.x] = 6;
        drawWorld();
        }
    }
}