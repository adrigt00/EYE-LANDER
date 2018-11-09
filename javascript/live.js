function Live(game) {
  this.game = game;

  this.w = 50;
  this.h = 50;

  this.dx = 15;

  this.x = this.game.canvas.width;
  this.y =  Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/heart-pixel-love-romatic-icon-graphic-vector-10163322.png';
}


Live.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
};

Live.prototype.move = function() {
  this.x -= this.dx;
};
