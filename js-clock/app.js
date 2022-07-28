let name=prompt("Adınızı giriniz...")

let welcomeName=document.getElementById("welcome")
welcomeName.innerHTML="Merhaba, "+name+" Hoşgeldin !"


function showTime(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var d=weekday[date.getDay()];
    var time=h+":"+m+":"+s+" "+d
    document.getElementById("date").innerText=time;
    setTimeout(showTime,1000)
   

}
showTime()