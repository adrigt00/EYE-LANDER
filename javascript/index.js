
window.onload = function() {
  var game = new Game("canvas");
  document.getElementById("newGame").onclick = function(){
  document.getElementById('menu').classList.add('hide')
  game.start();
 // document.getElementById("pause-btn").style.display = "block";
};
//document.getElementById("creditBtn")

  
};