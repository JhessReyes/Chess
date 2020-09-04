
var board = new Array(8);
var bloqueselec_x;
var bloqueselec_y;
var mano = false;
var dif_x;
var dif_y;

/*Turnos de jugada */
let blancas = true;
let negras = false;

function play(){
    Matriz();
}

function Matriz(){
    for(i=0;i<8;i++) board[i] = new Array(8);
    Bloquelibre();
    BloqueOcupadoBlancas();
    BloqueOcupadoNegras();
}

function BloqueOcupadoBlancas(){
    for(x=0; x<8; x++){
        for(y=0; y<2; y++){
            board[x][y]=1;
        }
    }
}
function BloqueOcupadoNegras(){
    for(x=0; x<8; x++){
        for(y=6; y<8; y++){
            board[x][y]=2;
        }
    }
}

function Bloquelibre(){
    for(x=0; x<8; x++){
        for(y=2; y<6; y++){
            board[x][y]=0;
        }
    }
}


function CheckBloque(x,y){
    if(sepuedeN){
        CheckPeonNegro(x,y);
    }

    if(sepuedeB){
        CheckPeonBlanco(x,y);
    }
    if(blancas){
        if(mano==true && board[x][y]==1){
            deselect(x,y);
        }
        CheckPeonBlanco(x,y);
    }
    if(negras){
        if(mano==true && board[x][y]==2){
            deselect(x,y);
        }
        CheckPeonNegro(x,y);
    }
}


/*FUNCIONES PARA VALIDAR DATOS DE LOS PEONES */
function CheckPeonBlanco(x,y){
checktrue= false;
valor = document.getElementById("b"+x+y).innerText;
        if(valor == "♙" && mano==false && board[x][y] == 1){ /*SI ES UN PEON BLANCO EXISTE UNA PIEZA Y NO SE AGARRADO */
            mano=true;
            if(y==1){
                PintarBloque(x,y,"aquamarine");
                PintarBloque(x,y+1,"aquamarine");
                PintarBloque(x,y+2,"aquamarine");    
            }
            PintarBloque(x,y,"aquamarine");
            PintarBloque(x,y+1,"aquamarine");
            casilla0 = y;
            casilla1 = y+1;
            casilla2 = y+2;
            bloqueselec_x = x;
            bloqueselec_y = y;
            comerNegras(x,y);
        }
        if(mano==true && board[x][y]==0){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            dif_x = x - bloqueselec_x; /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = y - bloqueselec_y; /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */
            board[bloqueselec_x][bloqueselec_y]=0;
            if(dif_x == 0 && dif_y == 2|| dif_x == 0 && dif_y== 1){checktrue=true;} /*mover el peon blanco dos o una casilla arriba*/
            if(checktrue){
                mano=false;
                board[x][y] = 1; 
                PintarPeonBlanco(x,y); 
                PintarBloque(x, casilla0,"black");
                PintarBloque(x, casilla1,"black");
                PintarBloque(x, casilla2,"black");    
                eliminarpieza(bloqueselec_x,bloqueselec_y);
                blancas=false;
                negras=true;
                deselect(x,y);
                alert("Turno del jugador 2 (NEGRAS)");
            }
        }
        if(sepuedeB==true && mano==true && board[x][y]==1){
            Cbla(x,y); /*Llama la funcion para eliminar al enemigo */
        }

}

function CheckPeonNegro(x,y){
checktrue= false;
valor = document.getElementById("b"+x+y).innerText;
        if(valor == "♟" && mano==false && board[x][y] == 2){ /*SI ES UN PEON NEGRO, ES PIEZA NEGRA Y NO SE AGARRADO */
            mano=true;
            if(y==6){
                PintarBloque(x,y,"aquamarine");
                PintarBloque(x,y-1,"aquamarine");
                PintarBloque(x,y-2,"aquamarine");    
            }
            PintarBloque(x,y,"aquamarine");
            PintarBloque(x,y-1,"aquamarine");
            casilla0 = y;
            casilla1 = y-1;
            casilla2 = y-2;
            bloqueselec_x = x;
            bloqueselec_y = y;
            comerBlancas(x,y);
        }
        if(mano==true && board[x][y]==0){ /*YA SE AGARRO Y EL BLOQUE SELECCIONADO ESTA BACIO */
            dif_x = x - bloqueselec_x; /* DIFERENCIA EJE X ACTUAL - ANTERIOR*/
            dif_y = y - bloqueselec_y; /* DIFERENCIA EJE Y ACTUAL - ANTERIOR*/
            board[bloqueselec_x][bloqueselec_y]=0; 
            if(dif_x == 0 && dif_y == -2|| dif_x == 0 && dif_y==-1){checktrue=true;} /*mover el peon negro dos abajo*/
            if(checktrue){
                mano=false;
                board[x][y] = 2; 
                PintarPeonNegro(x,y); 
                PintarBloque(x, casilla0,"black");
                PintarBloque(x, casilla1,"black");
                PintarBloque(x, casilla2,"black");    
                eliminarpieza(bloqueselec_x,bloqueselec_y); /*ELIMINA PARA MMOVER */
                blancas=true;
                negras=false;
                deselect(x,y);
                alert("Turno del jugador 1 (BLANCAS)");        
            }
        }
        if(sepuedeN==true && mano==true && board[x][y]==2){
            Cneg(x,y); /*Llama la funcion para eliminar al enemigo */
        }

}

function deselect(x,y){
    mano=false;
    if(x==bloqueselec_x && y==bloqueselec_y){
        for(x=0; x<8; x++){
            for(y=0; y<8; y++){
                PintarBloque(x,y,"black")
            }
        }
    }
}
var sepuedeN =false;
var sepuedeB = false;

function comerNegras(x,y){ /* VERIFICA SI A SUS ALREDEDORES HAY ENEMIGOS*/ 
    pieza1 = board[x+1][y+1];
    pieza2 = board[x-1][y+1];
    pieza3 = board[x][y+1];
    if(!negras){
    if (board[x+1][y+1]==2){
        PintarBloque(x+1, y+1,"red");
        sepuedeN = true;
    }
    if(pieza2==2){
        PintarBloque(x-1, y+1,"red");
        sepuedeN = true;
    }
    if(pieza3==2){
        PintarBloque(x, y+1,"yellow");
    }
}

}
function Cneg(x,y){ /* FUNCION QUE ELIMINA LAS PIEZAS NEGRAS POR TURNO */
    checktrue = false;
    dif_x = x - bloqueselec_x;
    dif_y = y - bloqueselec_y;
    if(dif_x == 1 && dif_y == 1|| dif_x == -1 && dif_y== 1){
        checktrue=true;}
    if(checktrue){
        board[x][y] = 1;
        sepuedeN = false;
        blancas=false;
        negras=true;
        alert("Turno del jugador 2 (NEGRAS)");
        mano=false;
        eliminarpieza(bloqueselec_x,bloqueselec_y);
        PintarPeonBlanco(x,y);
        board[bloqueselec_x][bloqueselec_y]=0;
    }
}
function Cbla(x,y){ /* FUNCION QUE ELIMINA LA PIEZA BLANCA POR TURNO*/
    checktrue = false;
    dif_x = x - bloqueselec_x;
    dif_y = y - bloqueselec_y;
    if(dif_x == 1 && dif_y == -1|| dif_x == -1 && dif_y== -1){
        checktrue=true;}
    if(checktrue){
        board[x][y] = 2;
        sepuedeB = false;
        blancas = true;
        negras =false;
        alert("Turno del jugador 1 (BLANCAS)");
        mano=false;
        eliminarpieza(bloqueselec_x,bloqueselec_y);
        PintarPeonNegro(x,y);
        board[bloqueselec_x][bloqueselec_y]=0;
    }
}

function comerBlancas(x,y){
    pieza1 = board[x+1][y-1];
    pieza2 = board[x-1][y-1];
    pieza3 = board[x][y-1];
    if(!blancas){
    if (pieza1==1){
        PintarBloque(x+1, y-1,"red");
        sepuedeB=true;
    }
    if(pieza2==1){
        PintarBloque(x-1, y-1,"red");
        sepuedeB=true;
    }
    if(pieza3==1){
        PintarBloque(x, y-1,"yellow");
    }
}
}

function eliminarpieza(bloqueselec_x,bloqueselec_y){
    valor = document.getElementById("b"+bloqueselec_x+bloqueselec_y);
        valor.innerHTML="<span></span>";
}

function PintarBloque(x,y,borderColor){
    Bloque = document.getElementById("b"+x+y);
    Bloque.style.borderColor = borderColor;
}

function PintarPeonNegro(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265F;</span>";
}
function PintarPeonBlanco(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x2659;</span>";
}   


play();