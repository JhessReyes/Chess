function CheckWhiteKing(x,y){
    checktrue=false;
    if(blancas){
        if(valor == "♔" && mano==false && board[x][y] == 1){ /*SI ES UN REY BLANCO Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==2){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO O ES UN ENEMIGO*/
            dif_x = Math.abs(x - bloqueselec_x); /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = Math.abs(y - bloqueselec_y); /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♔" ){
                if(dif_x<=1 && dif_y<=1) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 1; 
                    PaintWhiteKing(x,y); 
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
function CheckBlackKing(x,y){
    checktrue=false;
    if(negras){
        if(valor == "♚" && mano==false && board[x][y] == 2){ /*SI ES UNA REINA BLANCA Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==1){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO O ES UN ENEMIGO*/
            dif_x = Math.abs(x - bloqueselec_x); /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = Math.abs(y - bloqueselec_y); /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♚" ){
                if(dif_x<=1 && dif_y<=1) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 2; 
                    PaintBlackKing(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=true;
                    negras=false;
                    deselect(x,y);
                    alert("Turno del jugador 1 (BLANCAS)");
                }
            }
        }
    }
}

function PaintWhiteKing(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x2654;</span>";
}
function PaintBlackKing(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265A;</span>";
}