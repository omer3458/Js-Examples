let sec=00;
let tens=00;
let displaySec=document.getElementById("second")
let displayTens=document.getElementById("tens")
const btnStart=document.getElementById("btn-start")
const btnStop=document.getElementById("btn-stop")
const btnReset=document.getElementById("btn-reset")
let interval
btnStart.addEventListener("click",()=>{
  clearInterval(interval)
  interval=setInterval(startTime,10)

})

btnStop.addEventListener("click",()=>{
  clearInterval(interval)
})

btnReset.addEventListener("click",()=>{
  clearInterval(interval)
  tens="00"
  sec="00"
  displaySec.innerHTML=seconds;
  displayTens.innerHTML=tens;
})

function startTime(){
  tens++;
  if(tens<=9){
    displayTens.innerHTML="0"+tens
  }
  if(tens>9){
    displayTens.innerHTML=tens
  }
  if(tens>99){
    sec++
    displaySec.innerHTML="0"+sec
    tens=0
    displayTens.innerHTML="0"+tens
  }
  if(sec>9){
    displaySec.innerHTML=sec
  }
}

