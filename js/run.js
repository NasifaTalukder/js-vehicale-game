let mValue=0;
let interval_value;

function vehiStart(){
    interval_value=setInterval(startfunc,100);
}
function startfunc(){
    mValue = mValue+5;
    let VehiImage=document.getElementById("VehiImg");
    VehiImage.style.marginLeft=mValue+"px";
    
}
function vehiStop(){
    clearInterval(interval_value)
}