function Obstacle(game) {
  this.game = game;

  this.w = 15;
  this.h = 20;

  this.dx = 10;

  this.x = this.game.canvas.width;
  this.y = Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
}


Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "white";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};
Obstacle.prototype.move = function() {
  this.x -= this.dx;
};
