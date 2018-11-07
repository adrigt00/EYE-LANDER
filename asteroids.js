function Asteroids(game) {
  this.game = game;

  this.w = 150;
  this.h = 150;

  this.dx = 5;

  this.x = this.game.canvas.width;
  this.y =  Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/Green Gas Planet.png';
}


Asteroids.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 80, 80);
};

Asteroids.prototype.move = function() {
  this.x -= this.dx;
};
