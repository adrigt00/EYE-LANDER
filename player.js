function Player(game) {
  this.game = game;
 
  this.x = this.game.canvas.width * 0.08;


  this.y0 = this.game.canvas.height * 0.8;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = 'img/eyelander.png';
  

  this.img.frames = 1;
  this.img.frameIndex = 0;

  this.w = 80;
  this.h = 65;
  this.vx = 0;
  this.vy = 0;
  this.newPos = function() {
    this.x += this.vx;
    this.y += this.vy;
}

  this.bullets = [];

  this.setListeners();
}

var Space = 32 ;
var UP = 87;
var Right = 68;
var Left = 65;

Player.prototype.draw = function() {
 
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.x < this.game.canvas.width;
  }.bind(this));

  this.bullets.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    
    if (event.keyCode === UP) {
      this.y -= 1;
      this.vy -= 2;
    } else if (event.keyCode == Space) {
      this.shoot();
    } else if (event.keyCode == Right) {
      this.vx += 5;
      this.x += this.vx;
    } else if (event.keyCode == Left) {
      this.vx -= 5;
      this.x -= this.vx;
    }
  }.bind(this);
};

Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.x + this.w, this.y + this.h / 2);

  this.bullets.push(bullet);
};

Player.prototype.move = function() {
  var gravity = 0.15;
  if (this.y != this.y0) {
    this.vy += gravity;
    this.y += this.vy;
  } 
};