let hr= document.querySelector('#hr')
let sc= document.querySelector('#sc')
let mn= document.querySelector('#mn')
setInterval(()=>{
let day= new Date();
let hh=day.getHours()*30;
let mm= day.getMinutes()*6;
let ss=day.getSeconds()*6;
hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`
sc.style.transform=`rotateZ(${ss}deg)`
mn.style.transform=`rotateZ(${mm}deg)`
//digital clock

let hours= document.getElementById('hour')
let minutes= document.getElementById('minutes')
let second= document.getElementById('seconds')

let ampm= document.getElementById('ampm')
let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();
let am= h>=12 ? "pm":"am";
//add zero brfore single digit 
h= (h<10)?"0"+h:h;
m= (m<10)?"0"+m:m;
s= (s<10)?"0"+s:s;

//inner html
hours.innerHTML=h;
minutes.innerHTML=m;
second.innerHTML=s;
})


