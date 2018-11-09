function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();
}

Game.prototype.start = function() {
  document.getElementById("BossBattle").play();
  this.interval = setInterval(
    function() {
      this.clear();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 70 === 0) {
        this.generateObstacle();
      } else if (this.framesCounter % 110 === 0) {
        this.generateLive();
      } else if (this.framesCounter % 130 === 0) {
        this.generatefireBall();
      } else if (this.framesCounter % 80 === 0) {
        this.generateAlien();
      } else if (this.framesCounter % 60 === 0) {
        this.generateCoins();
      }

      this.moveAll();
      this.draw();

      this.clearObstacles();
      this.clearLive();
      this.clearfireBall();
      this.clearAlien();
      this.clearCoins();

      this.borderCollision();

      if (this.collisionObstacle()) {
        if (this.scorelives > 0) {
              this.obstacles.splice(0, 1);
              this.scorelives--;
              document.getElementById("Damage").play();
        } else {
          this.gameOver();
        }
      } else if (this.collisionHeart()) {
            this.Live.splice(0, 1);
            this.scorelives++;
            document.getElementById("1-UP").play();
      } else if (this.collisionFireball()) {
        if (this.scorelives > 0) {
              this.fireBall.splice(0, 1);
              this.scorelives--;
              document.getElementById("Damage").play();
        } else {
          this.gameOver();
        }
      } else if (this.collisionLive()) {
        if (this.scorelives > 0) {
              this.Alien.splice(0, 1);
              this.scorelives--;
              document.getElementById("Damage").play();
        } else {
          this.gameOver();
        }
      } else if (this.collisionCoins()) {
            this.Coins.splice(0, 1);
            this.score++;
            document.getElementById("Coin").play();
      }
    }.bind(this),
    1000 / this.fps
  );
};

Game.prototype.stop = function() {
  document.getElementById("BossBattle").pause();
  document.getElementById("Lose").play();
  document.getElementById("BossBattle").currentTime = 0;

  this.scorelives === 0 ? clearInterval(this.interval) : this.scorelives--;
};

Game.prototype.gameOver = function() {
  document.querySelector('.container').style.display = "none";
  document.getElementById('container2').style.display = "block";
  this.stop();
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.Live = [];
  this.fireBall = [];
  this.Alien = [];
  this.Coins = [];
  this.framesCounter = 0;
  this.score = 0;
  this.scorelives = 3;
};
Game.prototype.collisionObstacle = function() {
  return this.obstacles.some(
    function(obstacle) {
      return (
        this.player.x + this.player.w >= obstacle.x &&
        this.player.x < obstacle.x + obstacle.w &&
        this.player.y + (this.player.h - 20) >= obstacle.y &&
        this.player.y < obstacle.y + obstacle.h
      );
    }.bind(this)
  );
};
Game.prototype.collisionHeart = function() {
  return this.Live.some(
    function(Live) {
      return (
        this.player.x + this.player.w >= Live.x &&
        this.player.x < Live.x + Live.w &&
        this.player.y + (this.player.h - 20) >= Live.y &&
        this.player.y < Live.y + Live.h
      );
    }.bind(this)
  );
};
Game.prototype.collisionFireball = function() {
  return this.fireBall.some(
    function(fireBall) {
      return (
        this.player.x + this.player.w >= fireBall.x &&
        this.player.x < fireBall.x + fireBall.w &&
        this.player.y + (this.player.h - 20) >= fireBall.y &&
        this.player.y < fireBall.y + fireBall.h
      );
    }.bind(this)
  );
};
Game.prototype.collisionLive = function() {
  return this.Alien.some(
    function(Alien) {
      return (
        this.player.x + this.player.w >= Alien.x &&
        this.player.x < Alien.x + Alien.w &&
        this.player.y + (this.player.h - 20) >= Alien.y &&
        this.player.y < Alien.y + Alien.h
      );
    }.bind(this)
  );
};
Game.prototype.collisionCoins = function() {
  return this.Coins.some(
    function(Coins) {
      return (
        this.player.x + this.player.w >= Coins.x &&
        this.player.x < Coins.x + Coins.w &&
        this.player.y + (this.player.h - 20) >= Coins.y &&
        this.player.y < Coins.y + Coins.h
      );
    }.bind(this)
  );
};

Game.prototype.borderCollision = function() {
  if (this.player.y > 625) {
    this.player.y = 625;
    this.player.vy = 0;
  } else if (this.player.y < 0) {
    this.player.y = 0;
    this.player.vy = 0;
  }
};

Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};
Game.prototype.clearLive = function() {
  this.Live = this.Live.filter(function(Live) {
    return Live.x >= 0;
  });
};
Game.prototype.clearfireBall = function() {
  this.fireBall = this.fireBall.filter(function(fireBall) {
    return fireBall.x >= 0;
  });
};
Game.prototype.clearAlien = function() {
  this.Alien = this.Alien.filter(function(Alien) {
    return Alien.x >= 0;
  });
};
Game.prototype.clearCoins = function() {
  this.Coins = this.Coins.filter(function(Coins) {
    return Coins.x >= 0;
  });
};
Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};
Game.prototype.generateLive = function() {
  this.Live.push(new Live(this));
};
Game.prototype.generatefireBall = function() {
  this.fireBall.push(new fireBall(this));
};
Game.prototype.generateAlien = function() {
  this.Alien.push(new Alien(this));
};
Game.prototype.generateCoins = function() {
  this.Coins.push(new Coins(this));
};
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) {
    obstacle.draw();
  });
  this.Live.forEach(function(asteroids) {
    asteroids.draw();
  });
  this.fireBall.forEach(function(fireBall) {
    fireBall.draw();
  });
  this.Alien.forEach(function(Alien) {
    Alien.draw();
  });
  this.Coins.forEach(function(Coins) {
    Coins.draw();
  });
  this.drawScore();
  this.drawScorelives();
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) {
    obstacle.move();
  });
  this.Live.forEach(function(asteroids) {
    asteroids.move();
  });
  this.fireBall.forEach(function(fireBall) {
    fireBall.move();
  });
  this.Alien.forEach(function(Alien) {
    Alien.move();
  });
  this.Coins.forEach(function(Coins) {
    Coins.move();
  });
};

Game.prototype.drawScore = function() {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "gold";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
};
Game.prototype.drawScorelives = function() {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "red";
  this.ctx.fillText(Math.floor(this.scorelives), 100, 50);
};
