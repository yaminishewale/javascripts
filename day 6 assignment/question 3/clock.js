 var name = window.prompt("what is your name ?");
 document.write(" welcome "+ name +", how are you");

 function changecolor()
 {setTimeout(() => {
    document.body.style.background = 'balck'
 },3000);
}

 const dmode = document.getElementById('dark');
 dmode.onclick = function cahngecolor(){
 }

 const time = document.getElementById('time');
 function clock(){
     let date = new Date();
     let time = date.toLocaleTimeString();
     ctime.innerText = time
 }
 clock();