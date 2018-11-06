function Obstacle2(game) {
  this.game = game;

  this.w = 1500;
  this.h = 10;

  this.dx = 1;

  this.x = this.game.canvas.width;
  this.y = this.game.player.y-3 + this.game.player.h - 5;
}


Obstacle2.prototype.draw = function() {
  this.game.ctx.fillStyle = "white";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};
Obstacle2.prototype.move = function() {
  this.x -= this.dx;
};
Obstacle2.prototype.clearObstacles = Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return Obstacle2.x >= 0;
  });
};
