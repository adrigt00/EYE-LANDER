function Obstacle(game) {
  this.game = game;

  this.w = 50;
  this.h = 55;

  this.dx = 7;

  this.x = this.game.canvas.width;
  this.y = Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/pixel-asteroid-png-3.png';
}

Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 50, 55);
};
Obstacle.prototype.move = function() {
  this.x -= this.dx;
};
