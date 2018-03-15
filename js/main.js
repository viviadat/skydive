var counter = document.getElementById('counter');
var chute = document.getElementById('chute');
var stand= document.getElementById('stand');
var fromTop = window.pageYOffset;

window.onscroll = function(){

    fromTop = window.pageYOffset;
    console.log(fromTop);

    counter.style.top = 500 + fromTop + "px";
    chute.style.top = 200 + fromTop + "px";

    if (fromTop < 3900){
      counter.style.backgroundImage="url(img/diver1.png)";
      counter.style.animation ="paradown 2s infinite"
      // document.getElementById('chute').style.display = 'none';
    }else {
      // document.getElementById('counter').style.display = 'none';
      chute.style.backgroundImage ="url(img/diver2.png)";
      chute.style.animation ="paradown 6s infinite";
    }if (fromTop > 8900){
      // chute.style.top = 100 + fromTop + "px";
      document.getElementById('counter').style.visibility = 'hidden';
      document.getElementById('chute').style.visibility = 'hidden';
      stand.style.animation ="lastdiver 3s once" }
    // }
      // stand.style.backgroundImage="url(img/diver3.png)";
    // }if (fromTop > 9400){
    //   document.getElementById('counter').style.display = 'none';
    //   document.getElementById('chute').style.display = 'none';
    // }

}

AOS.init(1200);
