
var board = new Array(8);

var piezasN = ["<span>&#x265F;</span>","♘","♗","♕","♔","♗","♘","♖"];
var peonN = "<span>&#x265F;</span>"; 

function play(){
    Matriz();
    Bloque = document.getElementById("b07");
    Bloque.innerHTML = "<span>&#x265F;</span>";
}

function Matriz(){
    for(i=0;i<8;i++) board[i] = new Array(8);
    Limpiar();
    mover();
    insertarpieza();


}

var bloqueselec_x;
var bloqueselec_y;
var mano = false;

function Limpiar(){
    for(x=0; x<8; x++){
        for(y=2; y<6; y++){
            board[x][y]=0;
        }
    }
}
function mover(){
    for(x=0; x<8; x++){
        for(y=0; y<8; y++){
            board[x][y]=false;
        }
    }
}

function insertarpieza(){
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
        }
    }
}

function Selectblock(x,y){
    if(mano==false && board[x][y] == false){
        board[x][y] = true; 
        PintarBloque(x, y,"aquamarine");
        bloqueselec_x = x;
        bloqueselec_y = y;
        board[x][y] = 1;
        mano=true;
    }
    
}

function CheckBloque(x,y){
    CheckPeon(x,y);
}


function CheckPeon(x,y){
    checktrue= false;
    valor = document.getElementById("b"+x+y).innerText;

    dif_x = x - bloqueselec_x;
    dif_y = y - bloqueselec_y;

    if(valor == "♟" && mano==false&& board[x][y] == false){
        board[x][y] = true;
        mano=true;
        PintarBloque(x, y,"yellow");
        PintarBloque(x, y-1,"yellow");
        PintarBloque(x, y-2,"yellow");
        bloqueselec_x = x;
        bloqueselec_y = y;
    }
    if(dif_x==0 && dif_y==0){
        PintarBloque(x, y,"transparent");
        PintarBloque(x, y-1,"transparent");
        PintarBloque(x, y-2,"transparent");
    }


    if(mano==true && board[x][y] == false){
        if(dif_x == 0 && dif_y == -2|| dif_x == 0 && dif_y==-1){checktrue=true;} /*mover el peon negro dos abajo*/
        if(checktrue){PintarPeon(x,y); mano=false; eliminarpieza(bloqueselec_x,bloqueselec_y);}

    }
}

function eliminarpieza(bloqueselec_x,bloqueselec_y){
    valor = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
        $("#p"+bloqueselec_x+bloqueselec_y).remove();
}

function PintarBloque (x,y, color){
    Bloque = document.getElementById("b"+x+y);
    Bloque.style.background = color;
}

function PintarPeon(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265F;</span>";
    Bloque.style.background = "green";
}   

play();