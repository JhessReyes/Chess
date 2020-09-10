var board = new Array(8);
function Matriz(){
    for(i=0;i<8;i++) board[i] = new Array(8);
    Bloquelibre();
    BloqueOcupadoBlancas();
    BloqueOcupadoNegras();
}
function BloqueOcupadoBlancas(){
    for(x=0; x<8; x++){
        for(y=0; y<2; y++){
            if(y==1){
                board[x][y]=1;
            }
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
