function CheckTowerWhite(x,y){
    checktrue= false;
    if(blancas){
        if(valor == "♖" && mano==false && board[x][y] == 1){ /*SI ES UN PEON BLANCO EXISTE UNA PIEZA Y NO SE HA AGARRADO */
            mano=true; 
            for(i=0;i<8;i++){
                for(j=0;j<8;j++){
                    if(board[x][j+1]==0){
                        PintarBloque(x,j+1,"aquamarine");
                    }

                }
            }
        }
        bloqueselec_x = x;
        bloqueselec_y = y;
    }
}