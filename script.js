setInterval(setclock,1000);
let hourt=document.querySelector(".hour");
let minutet=document.querySelector(".minute");
let secondt=document.querySelector(".second");


function setclock(){
    const date=new Date();
    const second=date.getSeconds()*6;

    const minute=(date.getMinutes())*6;
    const hour=((minute/12)+(date.getHours()*30));

    setrotation(secondt,second);
    setrotation(minutet,minute);
    setrotation(hourt,hour);
}

function setrotation(element,rotat){
    element.style.setProperty('--rotation',rotat);
}

setclock();