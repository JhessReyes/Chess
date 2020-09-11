function CheckWhiteTow(x,y){
    checktrue=false;
    if(blancas){
        if(valor == "♖" && mano==false && board[x][y] == 1){ /*SI ES UN ALFIL BLANCO Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==2){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♖" ){
                if(bloqueselec_x==x ||bloqueselec_y==y) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 1; 
                    PaintWhitesTowers(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=false;
                    negras=true;
                    deselect(x,y);
                    alert("Turno del jugador 2 (NEGRAS)");
                }
            }
        }
    }
}
function CheckBlackTow(x,y){
    checktrue=false;
    if(blancas){
        if(valor == "♜" && mano==false && board[x][y] == 2){ /*SI ES UN ALFIL BLANCO Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==1){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♜" ){
                if(bloqueselec_x==x ||bloqueselec_y==y) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 2; 
                    PaintBlacksTowers(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=false;
                    negras=true;
                    deselect(x,y);
                    alert("Turno del jugador 1 (BLANCAS)");
                }
            }
        }
    }
}
function PaintWhitesTowers(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x2656;</span>";
}
function PaintBlacksTowers(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265C; </span>";
}