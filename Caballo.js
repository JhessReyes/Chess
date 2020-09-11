function CheckWhiteHorse(x,y){
    checktrue=false;
    if(blancas){
        if(valor == "♘" && mano==false && board[x][y] == 1){ /*SI ES UN CABALLO BLANCO, EXISTE UNA PIEZA Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==2){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            dif_x = x - bloqueselec_x; /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = y - bloqueselec_y; /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♘" ){
                if(((dif_x*dif_x) + (dif_y*dif_y) ==5)) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 1; 
                    PaintWhitesHorses(x,y); 
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
function CheckBlackHorse(x,y){
    checktrue=false;
    if(negras){
        if(valor == "♞" && mano==false && board[x][y] == 2){ /*SI ES UN CABALLO NEGRO, EXISTE UNA PIEZA Y NO SE HA AGARRADO */
            mano=true; 
            bloqueselec_x = x;
            bloqueselec_y = y;
        }
        if(mano == true && board[x][y] == 0|| mano == true && board[x][y]==1){ /*SI YA SE AGARRO Y EL BLOQUE ESTA BACÍO*/
            dif_x = x - bloqueselec_x; /*DIFERENCIA EJE X DEL ACTUAL Y EL ANTERIOR */
            dif_y = y - bloqueselec_y; /*DIFERENCIA EJE Y DEL ACTUAL Y EL ANTERIOR */
            b = document.getElementById("b"+bloqueselec_x+bloqueselec_y).innerText;
            if(b == "♞" ){
                if(((dif_x*dif_x) + (dif_y*dif_y) ==5)) checktrue = true;
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 2; 
                    PaintBlacksHorses(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=true;
                    negras=false;
                    deselect(x,y);
                    alert("Turno del jugador 1(BLANCAS)");
                }
            }
        }
    }  
}
function PaintWhitesHorses(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x2658;</span>";
}
function PaintBlacksHorses(x,y){
    Bloque = document.getElementById("b"+x+y);
    Bloque.innerHTML = "<span>&#x265E;</span>";
}
