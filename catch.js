document.addEventListener("DOMContentLoaded", ready);
function ready() {

var wolf = document.getElementsByClassName('wolf')[0];
var score = document.getElementsByClassName('score')[0];
var egg1 = document.getElementsByClassName('egg1')[0];
var egg2 = document.getElementsByClassName('egg2')[0];

wolf.onmousedown = function(e) {
  moveAt(e);
  document.body.appendChild(wolf);
  wolf.style.zIndex = 1000;

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    wolf.style.left = e.pageX - wolf.offsetWidth / 2 + 'px';
  }

var count = 0;

  function eggSave() {
    var wolfCoordX = wolf.offsetLeft - 100,
        wolfCoordY = wolf.offsetTop,
        egg1CoordY = egg1.offsetTop + 396,
        egg2CoordX = egg2.offsetLeft + 912,
        egg2CoordY = egg2.offsetTop + 396;
        ++count;
        console.log(egg1CoordY);
    if (wolfCoordX <= egg1.offsetLeft && (wolfCoordY >= egg1CoordY && egg1CoordY >= 400)) {
        egg1.style.backgroundImage = 'url(ципа1.png)';
        score.innerHTML = count + 'egg';
        setTimeout(function() {
          egg1.style.visibility = 'hidden';
        }, 350);
    }
     if ((wolfCoordX <= egg2CoordX && wolfCoordX >= 785 && egg2CoordX <= 900) && (wolfCoordY >= egg2CoordY && egg2CoordY >= 400)) {
      egg2.style.backgroundImage = 'url(ципа1.png)';
      score.innerHTML = count + 'egg';
      setTimeout(function() {
        egg2.style.visibility = 'hidden';
      }, 350);
    }
  }
  setInterval(eggSave, 3000);

  document.onmousemove = function(e) {
    moveAt(e);
  }

  wolf.onmouseup = function() {
    document.onmousemove = null;
    wolf.onmouseup = null;
  }
  wolf.onmousemove = function mirror() {
    if(e.pageX >= 750) {
      wolf.style.transform = 'rotateY(180deg)';
    }
    else if(e.pageX <= 749) {
      wolf.style.transform = 'rotateY(0deg)';
    }

  }
}

//console.log(egg1);
function egg1Move1() {
  egg1.style.backgroundImage = 'url(egg1.png)';
  egg1.style.visibility = 'visible';
  egg1.style.transitionProperty = 'left';
  egg1.style.transitionDuration = '2.4s';
  egg1.style.left = '120px';
}
function egg1Move2() {
  egg1.style.left = '360px';
}
function egg1Move3() {
  egg1.style.top = '20px';
  egg1.style.transitionProperty = 'top';
  egg1.style.transitionDuration = '3s';
  //console.log(egg1.style.transitionProperty);
  //console.log(egg1.style.transitionDuration);
}

function egg1Move4() {
  egg1.style.top = '320px';
}
function egg1Move5() {
  egg1.style.backgroundImage = 'url(eggBr.png)';
}
function egg1Start() {
  egg1.style.top = '0px';
  egg1.style.left = '120px';
  egg1.style.visibility = 'hidden';
}
function timers1() {
  setTimeout(egg1Move1, 1000);
  setTimeout(egg1Move2, 3200);
  setTimeout(egg1Move3, 6200);
  setTimeout(egg1Move4, 7400);
  setTimeout(egg1Move5, 9600);
  setTimeout(egg1Start, 12500);
}
setInterval(timers1, 15200);


//console.log(egg2);
function egg2Move1() {
  egg2.style.backgroundImage = 'url(egg1.png)';
  egg2.style.visibility = 'visible';
  egg2.style.transitionProperty = 'right';
  egg2.style.transitionDuration = '2.4s';
  egg2.style.right = '120px';
}
function egg2Move2() {
  egg2.style.right = '360px';
}
function egg2Move3() {
  egg2.style.top = '20px';
  egg2.style.transitionProperty = 'top';
  egg2.style.transitionDuration = '3s';
  //console.log(egg2.style.transitionProperty);
  //console.log(egg2.style.transitionDuration);
}
function egg2Move4() {
  egg2.style.top = '320px';
}
function egg2Move5() {
  egg2.style.backgroundImage = 'url(eggBr.png)';
}
function egg2Start() {
  egg2.style.top = '0px';
  egg2.style.right = '120px';
  egg2.style.visibility = 'hidden';
}
function timers2() {
  setTimeout(egg2Move1, 4000);
  setTimeout(egg2Move2, 6200);
  setTimeout(egg2Move3, 9200);
  setTimeout(egg2Move4, 10400);
  setTimeout(egg2Move5, 12000);
  setTimeout(egg2Start, 15500);
}
setInterval(timers2, 18200);

/*var count = setTimeout(function timers1() {
(function egg1Act() {
setTimeout(eggMove1, 1000);
setTimeout(eggMove2, 3200);
setTimeout(eggMove3, 6200);
setTimeout(eggMove4, 7400);
setTimeout(eggStart, 12000);
}());
count = setTimeout(timers1, 15200);
}, 1000);*/
}
