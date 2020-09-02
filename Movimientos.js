
function play(){
    Matriz();
    alert("Hola");
}

var bloqueselec_x;
var bloqueselec_y;
var board = new Array(8);

function Selectblock(x,y){
    board[x][y] = 1;
    PintarBloque(x, y,"aquamarine");
}

function Matriz(){
    for(i=0;i<8;i++) board[i] = new Array(8);
    Limpiar();
    Selectblock(x,y);
}
function Limpiar(){
    for(x=0; x<8; x++){
        for(y=2; y<6; y++){
            board[x][y]=0;
        }
    }
}
function CheckBloque(x,y){
    Selectblock(x,y);
}

function PintarBloque (x,y, color){
    Bloque = document.getElementById("b"+x+y);
    Bloque.style.background = color;
}

play();