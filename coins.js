function Coins(game) {
  this.game = game;

  this.w = 15;
  this.h = 20;

  this.dx = 5;

  this.x = this.game.canvas.width;
  this.y = Math.floor(Math.random()*(this.game.player.y0 + this.game.player.h  - 5))
  this.img = new Image();
  this.img.src = 'img/kisspng-super-mario-bros-super-mario-world-minecraft-coin-stack-5acb5391e673c5.1439378015232746419439.png';
}


Coins.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
};
Coins.prototype.move = function() {
  this.x -= this.dx;
};

