
var bloqueselec_x;
var bloqueselec_y;
var mano = false;
var dif_x;
var dif_y;
var sepuedeN =false;
var sepuedeB = false;
var Total_s;
var Total_m;
var cronometro;

/*Turnos de jugada */
let blancas = true;
let negras = false;

function play(){
    Reset();
    Matriz();
    Start();
}
function CheckBloque(x,y){
    valor = document.getElementById("b"+x+y).innerText;
    Turno(x,y,"none");
    if(sepuedeN){
        CheckPeonNegro(x,y);
    }

    if(sepuedeB){
        CheckPeonBlanco(x,y);
    }
    
    if(blancas){
        Turno(x,y,"White");
        if(mano==true && board[x][y]==1){
            deselect(x,y);
        }
            CheckPeonBlanco(x,y);
            CheckWhiteTow(x,y);
            CheckWhiteHorse(x,y);
            CheckWhiteAlfil(x,y);
            CheckWhiteQueen(x,y);
            CheckWhiteKing(x,y);       
    }

    if(negras){
        Turno(x,y,"gray");
        if(mano==true && board[x][y]==2){
            deselect(x,y);
        }
            CheckPeonNegro(x,y);
            CheckBlackTow(x,y);
            CheckBlackHorse(x,y);
            CheckBlackAlfil(x,y);
            CheckBlackQueen(x,y);
            CheckBlackKing(x,y);
    }
} /*FUNCION PRICIPAL PARA CHECKEAR UNA POSICION EN LA MATRIZ */


/*FUNCIONES PARA VALIDAR DATOS DE LOS PEONES */
function CheckPeonBlanco(x,y){
checktrue= false;
    if(blancas){
        if(valor == "♙" && mano==false && board[x][y] == 1){ /*SI ES UN PEON BLANCO EXISTE UNA PIEZA Y NO SE HA AGARRADO */
            mano=true; 
            if(y==1 && board[x][y+2]!=2 && board[x][y+1]==0){
                PintarBloque(x,y,"aquamarine");
                PintarBloque(x,y+1,"aquamarine");
                PintarBloque(x,y+2,"aquamarine");    
            }
            PintarBloque(x,y,"aquamarine");
            PintarBloque(x,y+1,"aquamarine");
            bloqueselec_x = x;
            bloqueselec_y = y;
            comerNegras(x,y);
        }
        if(mano == true && board[x][y] == 0){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            dif_x = x - bloqueselec_x; /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = y - bloqueselec_y; /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */    
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♙" && bloqueselec_y==1 && board[bloqueselec_x][bloqueselec_y+1]==0 && dif_x == 0 && dif_y == 2|| b == "♙"&&dif_x == 0 && dif_y== 1){checktrue=true;} /*mover el peon blanco dos o una casilla arriba*/
            if(checktrue){
                mano=false;
                board[bloqueselec_x][bloqueselec_y]=0;
                board[x][y] = 1; 
                PintarPeonBlanco(x,y); 
                eliminarpieza(bloqueselec_x,bloqueselec_y);
                blancas=false;
                negras=true;
                deselect(x,y);
                alert("Turno del jugador 2 (NEGRAS)");
            }
        }
    }        
    
    if(sepuedeB==true && mano==true && board[x][y]==1){
            Cbla(x,y); /*Llama la funcion para eliminar al enemigo */
    }
}

function CheckPeonNegro(x,y){
checktrue= false;
    if(negras){
        if(valor == "♟" && mano==false && board[x][y] == 2){ /*SI ES UN PEON NEGRO, ES PIEZA NEGRA Y NO SE HA AGARRADO */
            mano=true;
            if(y==6 && board[x][y-2]!=1 && board[x][y-1]==0 ){
                PintarBloque(x,y,"aquamarine");
                PintarBloque(x,y-1,"aquamarine");
                PintarBloque(x,y-2,"aquamarine");    
            }
            PintarBloque(x,y,"aquamarine");
            PintarBloque(x,y-1,"aquamarine");
            bloqueselec_x = x;
            bloqueselec_y = y;
            comerBlancas(x,y);
        }
        if(mano==true && board[x][y]==0){ /*YA SE AGARRO Y EL BLOQUE SELECCIONADO ESTA BACIO */
            dif_x = x - bloqueselec_x; /* DIFERENCIA EJE X ACTUAL - ANTERIOR*/
            dif_y = y - bloqueselec_y; /* DIFERENCIA EJE Y ACTUAL - ANTERIOR*/
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♟" && bloqueselec_y==6 && board[bloqueselec_x][bloqueselec_y-1]==0 && dif_x == 0 && dif_y == -2|| b == "♟" && dif_x == 0 && dif_y==-1){checktrue=true;} /*mover el peon negro uno abajo*/
            if(checktrue){
                board[bloqueselec_x][bloqueselec_y]=0; 
                mano=false;
                board[x][y] = 2; 
                PintarPeonNegro(x,y);  
                eliminarpieza(bloqueselec_x,bloqueselec_y); /*ELIMINA PARA MOVER */
                blancas=true;
                negras=false;
                deselect(x,y);
                alert("Turno del jugador 1 (BLANCAS)");        
            }
        }
    }
        if(sepuedeN==true && mano==true && board[x][y]==2){
            Cneg(x,y); /*Llama la funcion para eliminar al enemigo */
        }
}

function deselect(x,y){ 
    mano=false;
    for(x=0; x<8; x++){
        for(y=0; y<8; y++){
            PintarBloque(x,y,"transparent");
        }
    }
}/*Funcion para deseleccionar el borde*/


function comerBlancas(x,y){
    a =(x-1); b=(y-1);
    c =(x+1);
    if(!blancas){
        if(c!=8)
            if (board[c][b]==1){
                PintarBloque(x+1, y-1,"red");
                sepuedeB=true;
            }
        if(a!=-1){
            if(board[a][b]==1){
                PintarBloque(x-1, y-1,"red");
                sepuedeB=true;    
            }
        }
        if(board[x][b]==1){
            PintarBloque(x, y-1,"yellow");
        }            
    }    
}/* VERIFICA SI A SUS ALREDEDORES HAY ENEMIGOS*/


function comerNegras(x,y){  
    a =(x-1); b=(y+1); c =(x+1);
    if(!negras){
        if(c!=8)
            if (board[c][b]==2){
                PintarBloque(c, b,"red");
                sepuedeN=true;
            }
        if(a!=-1){
            if(board[a][b]==2){
                PintarBloque(a, b,"red");
                sepuedeN=true;    
            }
        }
        if(board[x][b]==2){
            PintarBloque(x, b,"yellow");
        }            
    }  
}/* VERIFICA SI A SUS ALREDEDORES HAY ENEMIGOS*/


function Cneg(x,y){ 
    checktrue = false;
    dif_x = x - bloqueselec_x;
    dif_y = y - bloqueselec_y;
    if(dif_x == 1 && dif_y == 1|| dif_x == -1 && dif_y== 1){checktrue=true;}
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
        deselect(x,y);
    }
}/* FUNCION QUE ELIMINA LAS PIEZAS NEGRAS POR TURNO */


function Cbla(x,y){ 
    checktrue = false;
    dif_x = x - bloqueselec_x;
    dif_y = y - bloqueselec_y;
    if(dif_x == 1 && dif_y == -1|| dif_x == -1 && dif_y== -1){checktrue=true;}
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
        deselect(x,y);
    }
}/* FUNCION QUE ELIMINA LA PIEZA BLANCA POR TURNO*/


function eliminarpieza(bloqueselec_x,bloqueselec_y){ 
        valor = document.getElementById("b"+bloqueselec_x+bloqueselec_y);
        valor.innerHTML="<span></span>";
 }/*FUNCION QUE TOMA DE ENTRADA EL BLOQUE ANTERIOR Y ELIMINA SU CONTENIDO */


function PintarBloque(x,y,borderColor){ 
    Bloque = document.getElementById("b"+x+y);
    Bloque.style.borderColor = borderColor;
}/* CUANDO SE LLAMA ESTA FUNCION PINTA LOS BLOQUES DESEADOS */

function PintarPeonNegro(x,y){ 
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265F;</span>";
}/* PINTA EN LA PANTALLA SEGUN SU POSICION EL PEON NEGRO*/

function PintarPeonBlanco(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x2659;</span>";
} /*PINTA EN LA PANTALLA SEGUN SU POSICION EL PEON BLANCO*/   

function Turno(x,y,color){
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            if(i==x && j==y){
            var x = document.getElementsByClassName("Bloque");
                for(j=0; j<10 ; j++){
                    x[j].style.backgroundColor = color;
                }
                for(j=90; j<100 ; j++){
                    x[j].style.backgroundColor = color;
                }
                for(k=10; k<90;k++){
                    k=k+9
                    x[k].style.backgroundColor = color;
                }
                for(l=0; l<81; l=(l+10)){
                    x[l].style.backgroundColor = color;
                }

            }
        }
    }
}/*CUANDO CAMBIA DE TURNO EL TABLERO CAMBIA DE COLOR */

play();