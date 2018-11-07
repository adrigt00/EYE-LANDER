function fireBall(game) {
  this.game = game;

  this.w = 200;
  this.h = 30;

  this.dx = 30;

  this.x = this.game.canvas.width;
  this.y =  Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/cohete.png';
}


fireBall.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 200, 100);
};
fireBall.prototype.move = function() {
  this.x -= this.dx;
};

