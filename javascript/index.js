
window.onload = function() {
  var game = new Game("canvas");
  document.getElementById("newGame").onclick = function(){
  document.getElementById('menu').classList.add('hide')
  game.start();
  }
  var game = new Game("canvas");
   document.getElementById('finalmenu').classList.add('hide')
  document.getElementById("newGame2").onclick = function(){
    game.reset();
     game.start();
   document.getElementById('finalmenu').classList.add('hide')
};
};