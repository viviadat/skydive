// document.getElementById('counter').innerHTML = "hello";
//initialize = set-up variables


var counter = document.getElementById('counter');
var chute = document.getElementById('chute');
var stand= document.getElementById('stand');
var fromTop = window.pageYOffset;

// counter.innerHTML = "counter text";

//pseudocode = when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean meaning yes/no
window.onscroll = function(){

  //when the user scrolls do all of this ....
    fromTop = window.pageYOffset;

    //test if it works
    console.log(fromTop);

    //says that counter should go to style and then top element
    //add the 100 to keep it in that position since the top element in css has 100px in value
    counter.style.top = 360 + fromTop + "px";
    chute.style.top = 200 + fromTop + "px";
    stand.style.top = 400 + fromTop + "px";

    //is fromTop is greater than 1000 then do something
    if (fromTop < 4000){
      // counter.innerHTML = "more than 1000 leagues";
      // counter.style.backgroundColor="red";
      // counter.style.backgroundImage="url(yellowsubmarine.png)";
      counter.style.backgroundImage="url(img/diver1.png)";
      counter.style.animation ="paradown 2s infinite"
      // document.getElementById('chute').style.display = 'none';
    }if (fromTop > 4000){
      // document.getElementById('counter').style.display = 'none';
      chute.style.backgroundImage ="url(img/diver2.png)";
      chute.style.animation ="paradown 6s infinite"
      // stand.style.backgroundImage="url(img/diver3.png)";
    }if (fromTop > 9400){
      document.getElementById('counter').style.display = 'none';
      document.getElementById('chute').style.display = 'none';
    }

}
AOS.init({
  duration: 1200,
})
