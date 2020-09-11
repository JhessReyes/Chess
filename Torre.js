var SePuedeTB=false;
var SePuedeTN=false;
var enem_x;
var enem_y;

function CheckWhitesTowers(x,y){
    checktrue= false;
    if(blancas){
        if(valor == "♖" && mano==false && board[x][y] == 1){ /*SI ES UNA TORRE BLANCA EXISTE Y NO SE HA AGARRADO */
            bloqueselec_y = y;
            bloqueselec_x = x;
            mano=true;
        }
        if(mano == true && board[x][y] == 0){
            b = document.getElementById("b"+bloqueselec_x +bloqueselec_y).innerText; 
            if(b == "♖"){
                FreeWhiteTower(x,y);
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
    
        if(mano==true && board[x][y]==2){
            b = document.getElementById("b"+bloqueselec_x +bloqueselec_y).innerText; 
            if(b == "♖"){
                FreeWhiteTower(x,y);
                if(x==enem_x||y==enem_y){
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

function CheckBlacksTowers(x,y){
    checktrue= false;
    if(negras){
        if(valor == "♜" && mano==false && board[x][y] == 2){ /*SI ES UNA TORRE NEGRA EXISTE Y NO SE HA AGARRADO */
            bloqueselec_y = y;
            bloqueselec_x = x;
            mano=true;
        }
        if(mano == true && board[x][y] == 0){
            b = document.getElementById("b"+bloqueselec_x +bloqueselec_y).innerText; 
            if(b == "♜"){
                FreeBlacksTower(x,y);
                if(checktrue){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 1; 
                    PaintBlacksTowers(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=true;
                    negras=false;
                    deselect(x,y);
                    alert("Turno del jugador 1 (BLANCAS)");
                }
            }
        }
        if(mano==true && board[x][y]==1){
            b = document.getElementById("b"+bloqueselec_x +bloqueselec_y).innerText; 
            if(b == "♜"){
                FreeBlacksTower(x,y);
                if(x==enem_x||y==enem_y){
                    mano=false;
                    board[bloqueselec_x][bloqueselec_y]=0;
                    board[x][y] = 2; 
                    PaintBlacksTowers(x,y); 
                    eliminarpieza(bloqueselec_x,bloqueselec_y);
                    blancas=true;
                    negras=false;
                    deselect(x,y);
                    alert("Turno del jugador 2 (NEGRAS)");
                }
            }
        }
    }
}

function FreeWhiteTower(x,y){
    if(bloqueselec_x==x){ /*se mueve verticalmente*/
        if(bloqueselec_y<y){/*se mueve hacia arriba */
            for((a=bloqueselec_y+1);a<y;a++){
                if(board[x][a]!=0){
                    checktrue=false; 
                    if(board[x][a]==2){
                        enem_x=x;
                        enem_y=a;
                    }
                }else checktrue=true;
            }
        }
        else(bloqueselec_y>y) /* Se mueve hacia abajo */
            for((a=bloqueselec_y-1);a>y;a--){
                if(board[x][a]!=0){
                    checktrue=false;     
                    if(board[x][a]==2){
                        enem_x=x;
                        enem_y=a;
                    }
            }else checktrue=true; 
        }
    }else(bloqueselec_y==y) /*se mueve horizontalmente*/
        if(bloqueselec_x<y){/*se mueve hacia la derecha */
            for((a=bloqueselec_x+1);a<x;a++){
                if(board[a][y]!=0){
                    checktrue=false;            
                    if(board[a][y]==2){
                        enem_x=a;
                        enem_y=y;
                    }
                }else checktrue=true; 
            }
        }else(bloqueselec_x>y) /* Se mueve hacia la izquierda */
        for((a=bloqueselec_x-1);a>x;a--){
            if(board[a][y]!=0){
                checktrue=false;         
                if(board[a][y]==2){
                    enem_x=a;
                    enem_y=y;
                }
        }else checktrue=true;
    }
}

function FreeBlacksTower(x,y){
    if(bloqueselec_x==x){ /*se mueve verticalmente*/
        if(bloqueselec_y<y){/*se mueve hacia arriba */
            for((a=bloqueselec_y+1);a<y;a++){
                if(board[x][a]!=0){
                    if(board[x][a]==2){
                        enem_x=x;
                        enem_y=a;
                    }
                    checktrue=false; 
                }else checktrue=true;
            }
        }
        else(bloqueselec_y>y) /* Se mueve hacia abajo */
            for((a=bloqueselec_y-1);a>y;a--){
                if(board[x][a]!=0){
                    if(board[x][a]==2){
                        enem_x=x;
                        enem_y=a;
                    }
                    checktrue=false;     
            }else checktrue=true; 
        }
    }else(bloqueselec_y==y) /*se mueve horizontalmente*/
        if(bloqueselec_x<y){/*se mueve hacia la derecha */
            for((a=bloqueselec_x+1);a<x;a++){
                if(board[a][y]!=0){
                    if(board[a][y]==2){
                        enem_x=a;
                        enem_y=y;
                    }
                    checktrue=false;            
                }else checktrue=true; 
            }
        }else(bloqueselec_x>y) /* Se mueve hacia la izquierda */
        for((a=bloqueselec_x-1);a>x;a--){
            if(board[a][y]!=0){
                if(board[a][y]==2){
                    enem_x=a;
                    enem_y=y;
                }
                checktrue=false;         
        }else checktrue=true;
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

