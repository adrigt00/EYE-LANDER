function Player(game) {
  this.game = game;
 
  this.x = this.game.canvas.width * 0.08;

  // guardar posición original (suelo)
  this.y0 = this.game.canvas.height * 0.8;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = 'img/eyelander.png';
  
  // número de imágenes diferentes
  this.img.frames = 1;
  this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 80;
  this.h = 65;

  this.vy = 1;

  this.bullets = [];

  this.setListeners();
}

var Space = 32 ;
var UP = 87;
var Right = 68;
var Left = 65;

Player.prototype.draw = function() {
  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
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

  //this.animateImg();

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
      this.x += 5;
      this.vx += 10;
    } else if (event.keyCode == Left) {
      this.x -= 5;
      this.vx -= 10;
    }
  }.bind(this);
};

Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.x + this.w, this.y + this.h / 2);

  this.bullets.push(bullet);
};

//Player.prototype.animateImg = function() {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  //if (this.game.framesCounter % 6 === 0) {
  //  this.img.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
   // if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  //}
//};

Player.prototype.move = function() {
  // Aumenta la velocidad en el eje y.
  var gravity = 0.1;
 
  if (this.y != this.y0) {
    this.vy += gravity;
    this.y += this.vy;
  } 
  
  

};