function Reset(){
    clearInterval(cronometro);
}
function Start(){
    segundos = 0;
    seg = document.getElementById("segun");
    min = document.getElementById("minut");
    cronometro = setInterval(function(){
        segundos++;

        segs = segundos;
        minu = 0;

        while (segs>=60) {
            minu++;
            segs -=60;            
        }

        if(minu<10) min.innerHTML = "0" +minu;
        else min.innerHTML = minu;
        
        if(segs<10) seg.innerHTML = "0" +segs;
        else seg.innerHTML = segs;

        Total_m = minu;
        Total_s = segs;
    },1000)
}