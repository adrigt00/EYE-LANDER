
window.onload = function() {
  var game = new Game("canvas");
  document.getElementById("newGame").onclick = function(){
  document.getElementById('menu').classList.add('hide')
  game.start();
  }
  var game = new Game("canvas");
  document.getElementById("newGame2").onclick = function(){
  document.querySelector('.container').style.display = "block";
  document.getElementById('container2').style.display = "none";
    game.reset();
     game.start();
};
};