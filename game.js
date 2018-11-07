function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.clear();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }


      if (this.framesCounter % 50 === 0) {
        this.generateObstacle();
      } else if (this.framesCounter % 80 === 0) {
        this.generateAsteroids();
      } else if (this.framesCounter % 90 === 0) {
        this.generatefireBall();
      } else if (this.framesCounter % 70 === 0) {
        this.generateAlien();
      } else if (this.framesCounter % 40 === 0) {
        this.generateCoins();
      }
    

        this.moveAll();
        this.draw();

       
        this.clearObstacles();
        this.clearAsteroids();
        this.clearfireBall();
        this.clearAlien();
        this.clearCoins();

        this.borderCollision();
         if (this.isCollision()) {
           this.gameOver();
         } else if (this.isCollision2()) {
           this.gameOver();
         } else if (this.isCollision3()) {
           this.gameOver();
         } else if (this.isCollision4()) {
           this.gameOver();
         }
          else if (this.isCollision5()) {
          this.Coins.forEach(function(coin, i) {
               this.Coins.splice(i,1);
          this.score++;
        }.bind(this));
      }

    }.bind(this),
    1000 / this.fps
  )};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();

  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.Asteroids = [];
  this.fireBall = [];
  this.Alien = [];
  this.Coins = [];
  this.framesCounter = 0;
  this.score = 0;
};
Game.prototype.isCollision = function() {
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
Game.prototype.isCollision2 = function() {
  return this.Asteroids.some(
    function(Asteroids) {
      return (
        this.player.x + this.player.w >= Asteroids.x &&
        this.player.x < Asteroids.x + Asteroids.w &&
        this.player.y + (this.player.h - 20) >= Asteroids.y &&
        this.player.y < Asteroids.y + Asteroids.h
      );
    }.bind(this)
  );
};
Game.prototype.isCollision3 = function() {
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
Game.prototype.isCollision4 = function() {
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
Game.prototype.isCollision5 = function() {
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
Game.prototype.clearAsteroids = function() {
  this.Asteroids = this.Asteroids.filter(function(Asteroids) {
    return Asteroids.x >= 0;
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
Game.prototype.generateAsteroids = function() {
  this.Asteroids.push(new Asteroids(this));
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
  this.Asteroids.forEach(function(asteroids) {
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
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) {
    obstacle.move();
  });
  this.Asteroids.forEach(function(asteroids) {
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
  this.ctx.fillStyle = "white";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
};
//document.getElementById("new game").onclick = function(){
  //document.getElementById("canvas").style.display = "none";
//}