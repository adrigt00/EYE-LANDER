function Asteroids(game) {
  this.game = game;

  this.w = 150;
  this.h = 50;

  this.dx = 1;

  this.x = this.game.canvas.width;
  this.y = this.game.player.y0 + this.game.player.h  - 5;
}


Asteroids.prototype.draw = function() {
  this.game.ctx.beginPath;
  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
  this.game.ctx.closedPath;
};

Asteroids.prototype.move = function() {
  this.x -= this.dx;
};
