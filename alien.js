function Alien(game) {
  this.game = game;

  this.w = 20;
  this.h = 25;
  this.dx = 5;

  this.x = this.game.canvas.width;
  this.y =  Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/pixelated_spaceship_by_theduckminerpmc-d5yyptv.png';
}


Alien.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
};
Alien.prototype.move = function() {
  this.x -= this.dx;
};

