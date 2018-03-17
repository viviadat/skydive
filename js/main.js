var counter = document.getElementById('counter');
var chute = document.getElementById('chute');
var stand= document.getElementById('stand');
var fromTop = window.pageYOffset;

window.onscroll = function(){

    fromTop = window.pageYOffset;
    console.log(fromTop);


    if (fromTop < 3800){
      counter.style.backgroundImage="url(img/diver1.png)";
      counter.style.backgroundRepeat = "no-repeat";
      counter.style.top = 500 + fromTop + "px";
      counter.style.animation ="paradown 2s infinite"
      // document.getElementById('chute').style.display = 'none';
    }else {
      // document.getElementById('counter').style.display = 'none';
      counter.style.backgroundImage ="url(img/diver2.png)";
      counter.style.animation ="paradown 6s infinite";
      counter.style.top = 200 + fromTop + "px";
      // counter.style.left = 10 + fromTop + "px";
    }if (fromTop > 8900){
      // chute.style.top = 100 + fromTop + "px";
      document.getElementById('counter').style.visibility = 'hidden';
      document.getElementById('chute').style.visibility = 'hidden';
      stand.style.animation ="lastdiver 3s once" }

}


AOS.init(1200);
