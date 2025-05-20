

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["51f6784d-8988-4481-9a65-e9e53a8d2259","a3a6bf42-e083-4455-9053-81e5059ed957","ae9a36ac-8429-4d12-b1a2-c9fd1bcb2673","5943f278-8409-4633-8d2a-bada1aa44962","f4ff1f3a-00d3-440e-92ec-dda795d2ce34","0130e2b4-4540-4a64-a588-55d440ce7f21","651e1d1e-349f-46b6-ac70-8e452e91f5b6","d7f93a08-3bba-453a-ad17-9740b6a0c879","7446dde0-312b-4ca2-b7e6-2659b3a4a45b","16f95d89-3982-4fbc-9d14-bae8cc926389"],"propsByKey":{"51f6784d-8988-4481-9a65-e9e53a8d2259":{"name":"Player Idle right","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":1,"looping":true,"frameDelay":12,"version":"VpiAU0fNjU_h1FG.2PJVKa3SvVimSx7o","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":142},"rootRelativePath":"assets/51f6784d-8988-4481-9a65-e9e53a8d2259.png"},"a3a6bf42-e083-4455-9053-81e5059ed957":{"name":"Player Idle left","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":1,"looping":true,"frameDelay":12,"version":"mAwlT7aTJx2BWc6r_.euEkSr2kNwY7cI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":142},"rootRelativePath":"assets/a3a6bf42-e083-4455-9053-81e5059ed957.png"},"ae9a36ac-8429-4d12-b1a2-c9fd1bcb2673":{"name":"Player walk right","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":2,"looping":true,"frameDelay":12,"version":"rTCMpcpiQaLqobSUNsNDaaX4.kG15YtT","loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":284},"rootRelativePath":"assets/ae9a36ac-8429-4d12-b1a2-c9fd1bcb2673.png"},"5943f278-8409-4633-8d2a-bada1aa44962":{"name":"Player walk left","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":2,"looping":true,"frameDelay":12,"version":"1eHxvnJRoTbzLtcKl6ToDsQYIirMqFWm","loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":284},"rootRelativePath":"assets/5943f278-8409-4633-8d2a-bada1aa44962.png"},"f4ff1f3a-00d3-440e-92ec-dda795d2ce34":{"name":"Player jump","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":1,"looping":true,"frameDelay":12,"version":"HDrNladvF5JIYbYdnFU6V_8IBrk4hwg6","loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":142},"rootRelativePath":"assets/f4ff1f3a-00d3-440e-92ec-dda795d2ce34.png"},"0130e2b4-4540-4a64-a588-55d440ce7f21":{"name":"Player death","sourceUrl":null,"frameSize":{"x":135,"y":142},"frameCount":8,"looping":false,"frameDelay":3,"version":"kSwIiVWSYMLWQjCqnuDrIUSEw_hA.ybH","loadedFromSource":true,"saved":true,"sourceSize":{"x":405,"y":426},"rootRelativePath":"assets/0130e2b4-4540-4a64-a588-55d440ce7f21.png"},"651e1d1e-349f-46b6-ac70-8e452e91f5b6":{"name":"spike","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tf9mS.T58LBNMYrV75GjQWZk9m.53Wk6","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/651e1d1e-349f-46b6-ac70-8e452e91f5b6.png"},"d7f93a08-3bba-453a-ad17-9740b6a0c879":{"name":"coin","sourceUrl":null,"frameSize":{"x":57,"y":57},"frameCount":6,"looping":true,"frameDelay":5,"version":"2zLpaCEN2B19BS7iQqHn7VHR3vzDNzx5","loadedFromSource":true,"saved":true,"sourceSize":{"x":114,"y":171},"rootRelativePath":"assets/d7f93a08-3bba-453a-ad17-9740b6a0c879.png"},"7446dde0-312b-4ca2-b7e6-2659b3a4a45b":{"name":"checkpoint","sourceUrl":null,"frameSize":{"x":52,"y":78},"frameCount":2,"looping":true,"frameDelay":12,"version":"GRkYHPlJX4y_Ca8mm05.1UK36jO2Tyjm","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":78},"rootRelativePath":"assets/7446dde0-312b-4ca2-b7e6-2659b3a4a45b.png"},"16f95d89-3982-4fbc-9d14-bae8cc926389":{"name":"checkpoint_active","sourceUrl":null,"frameSize":{"x":52,"y":78},"frameCount":2,"looping":true,"frameDelay":12,"version":"Un5u.KEoWjSyrKOzUgZqLceLVfDavO.d","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":78},"rootRelativePath":"assets/16f95d89-3982-4fbc-9d14-bae8cc926389.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 60;

var gravity = 0.5;
var touchingGround = false;
var direction = "right";
var cameraTargetY = 0;

var player = createSprite(160, 303.7, 25, 25);
player.scale = 0.3;
player.horizontalVelocity = 0;

var platforms = createGroup();
var spikes = createGroup();
var coins = createGroup();
var checkpoints = createGroup();

var isDead = false;
var fadeOpacity = 0;
var fadeDirection = 0;
var deathTimer = 0;
var respawnTimer = 0;

var coinsCollected = 0;
var totalCoins = 0;
var coinsCollectedPositions = [];

var activeCheckpoint = null;

platforms.add(createSprite(10, 270, 20, 15));
platforms.add(createSprite(10, 200, 20, 15));
platforms.add(createSprite(10, 130, 20, 15));
platforms.add(createSprite(10, 60, 20, 15));
platforms.add(createSprite(10, -10, 20, 15));
platforms.add(createSprite(10, -80, 20, 15));
platforms.add(createSprite(10, -150, 20, 15));
platforms.add(createSprite(10, -220, 20, 15));
platforms.add(createSprite(540, 465, 20, 15));
platforms.add(createSprite(600, 425, 20, 15));
platforms.add(createSprite(500, 365, 20, 15));
platforms.add(createSprite(240, 350, 500, 50));
platforms.add(createSprite(-25, 13, 50, 1000));
platforms.add(createSprite(240, 500, 500, 25));
platforms.add(createSprite(575, 300, 50, 20));
platforms.add(createSprite(675, 250, 100, 20));
platforms.add(createSprite(675, 269, 100, 20));
platforms.add(createSprite(775, 200, 100, 20));
platforms.add(createSprite(875, 150, 100, 20));
platforms.add(createSprite(975, 100, 100, 20));
platforms.add(createSprite(1100, 150, 20, 100));
platforms.add(createSprite(1120, 190, 20, 20));
platforms.add(createSprite(1200, 250, 100, 20));
platforms.add(createSprite(1350, 300, 100, 20));
platforms.add(createSprite(1450, 250, 100, 20));
platforms.add(createSprite(1550, 200, 100, 20));

function createSpike(x, y, upsideDown) {
  if (upsideDown === undefined) {
    upsideDown = false;
  }
  var spike = createSprite(x, y, 20, 20);
  spike.scale = 0.3;
  spike.setAnimation("spike");
  if (upsideDown) {
    spike.mirrorY(-1);
  }
  spikes.add(spike);
}

createSpike(300, 315);
createSpike(225, 385, true);
createSpike(260, 385, true);
createSpike(320, 476);
createSpike(355, 476);
createSpike(25, 385, true);
createSpike(60, 385, true);
createSpike(589, 321, true);
createSpike(120, 476);
createSpike(155, 476);
createSpike(400, 315);
createSpike(815, 180);
createSpike(875, 130);
createSpike(900, 130);
createSpike(980, 80);
createSpike(1400, 285);
createSpike(1500, 235);
createSpike(1600, 185);

var coinPositions = [
  [20, -275],
  [50, 450],
  [600, 260],
  [700, 330],
  [775, 160],
  [975, 60],
  [1200, 220],
  [1450, 220],
  [1600, 160]
];

var goal = createSprite(1550, 65, 20, 40);

var checkpointPositions = [
  [675, 220],
  [1450, 220]
];

function createCoin(x, y) {
  var coin = createSprite(x, y, 15, 15);
  coin.setAnimation("coin");
  coin.scale = 0.5;
  coins.add(coin);
}

function resetCoins(restoreCollected) {
  coinsCollected = 0;
  coinsCollectedPositions = [];
  coins.removeSprites();

  for (var i = 0; i < coinPositions.length; i++) {
    var pos = coinPositions[i];
    var skip = false;

    if (restoreCollected) {
      for (var j = 0; j < restoreCollected.length; j++) {
        if (dist(pos[0], pos[1], restoreCollected[j][0], restoreCollected[j][1]) < 1) {
          skip = true;
          break;
        }
      }
    }

    if (!skip) {
      createCoin(pos[0], pos[1]);
    } else {
      coinsCollected++;
      coinsCollectedPositions.push(pos);
    }
  }

  totalCoins = coinPositions.length;
}

resetCoins();

function createCheckpoint(x, y) {
  var cp = createSprite(x, y, 40, 60);
  cp.scale = 0.5;
  cp.setAnimation("checkpoint");
  cp.pulseTimer = 0;
  checkpoints.add(cp);
  cp.depth = 5;
  return cp;
}

for (var i = 0; i < checkpointPositions.length; i++) {
  createCheckpoint(checkpointPositions[i][0], checkpointPositions[i][1]);
}

player.depth = 10;

function draw() {
  background("cyan");

  if (!isDead) {
    playerGravity();
    checkGround();
    playerMovement();
    playerCollision();
    cameraFollow();
  }

  drawSprites();

  coinAnimation();

  checkpoints.forEach(function(cp) {
    if (cp === activeCheckpoint) {
      cp.setAnimation("checkpoint_active");
    } else {
      cp.setAnimation("checkpoint");
    }
  });

  if (activeCheckpoint && activeCheckpoint.pulseTimer > 0) {
    activeCheckpoint.pulseTimer = activeCheckpoint.pulseTimer - 2;

    var minRadius = 10;
    var maxRadius = 100;
    var radius = map(activeCheckpoint.pulseTimer, 60, 0, minRadius, maxRadius);
    var alpha = map(activeCheckpoint.pulseTimer, 60, 0, 180, 0);

    noStroke();
    fill(0, 0, 255, alpha);
    ellipse(activeCheckpoint.position.x, activeCheckpoint.position.y, radius * 2, radius * 2);
  }

  camera.off();
  fill("black");
  textSize(20);
  textAlign(RIGHT);
  text("Coins: " + coinsCollected + " / " + totalCoins, World.width - 20, 30);
  camera.on();

  if (isDead || fadeOpacity > 0) {
    respawnTimer++;
    if (respawnTimer >= 30) {
      respawn();
    }
  }
}

function playerMovement() {
  var acceleration = 0.5;
  var maxSpeed = 4;
  var friction = 0.3;

  if (keyDown("right") || keyDown("d")) {
    direction = "right";
    player.horizontalVelocity += acceleration;
    if (player.horizontalVelocity > maxSpeed) {
      player.horizontalVelocity = maxSpeed;
    }
    player.setAnimation(touchingGround ? "Player walk right" : "Player jump");
  } else if (keyDown("left") || keyDown("a")) {
    direction = "left";
    player.horizontalVelocity -= acceleration;
    if (player.horizontalVelocity < -maxSpeed) {
      player.horizontalVelocity = -maxSpeed;
    }
    player.setAnimation(touchingGround ? "Player walk left" : "Player jump");
  } else {
    if (player.horizontalVelocity > 0) {
      player.horizontalVelocity -= friction;
      if (player.horizontalVelocity < 0) player.horizontalVelocity = 0;
    } else if (player.horizontalVelocity < 0) {
      player.horizontalVelocity += friction;
      if (player.horizontalVelocity > 0) player.horizontalVelocity = 0;
    }
  }

  player.x += player.horizontalVelocity;

  if (!keyDown("left") && !keyDown("right") && touchingGround) {
    player.setAnimation("Player Idle " + direction);
  }

  if ((keyDown("up") || keyDown("space") || keyDown("w")) && touchingGround) {
    player.velocityY = -8.5; // this is jump
  }
}

function playerGravity() {
  player.velocityY += gravity;
}

function playerCollision() {
  player.collide(platforms);
  player.overlap(coins, function(collector, collected) {
  coinsCollected++;
  coinsCollectedPositions.push([collected.position.x, collected.position.y]);

  collected.animationFrame = 0;
  collected.startX = collected.position.x;
  collected.startY = collected.position.y;
  collected.isAnimating = true;

  coins.remove(collected);
});

  if (player.overlap(spikes)) {
    die();
  }

  if (player.overlap(goal)) {
    if (coins.length === 0) {
      win();
    } else {
      textSize(20);
      fill("red");
      textAlign(CENTER);
      text("Get the coins!", camera.position.x, camera.position.y - 100);
    }
  }

  player.overlap(checkpoints, function(p, cp) {
    if (activeCheckpoint !== cp) {
      activeCheckpoint = cp;
      cp.savedCoins = coinsCollectedPositions.slice();
      cp.pulseTimer = 60;
    }
  });

  if (player.y > camera.position.y + World.height / 2 + 100) {
    die();
  }
}

function die() {
  if (isDead) return;
  isDead = true;
  player.setVelocity(0, 0);
  player.setAnimation("Player death");
  fadeDirection = 1;
  fadeOpacity = 0;
  deathTimer = 0;
  respawnTimer = 0;
}

function win() {
  textSize(50);
  fill("green");
  textAlign(CENTER);
  text("You Win!", camera.position.x, camera.position.y - 100);
}

function checkGround() {
  player.y += 0.5;
  touchingGround = player.isTouching(platforms);
  player.y -= 0.5;
}

function cameraFollow() {
  if (player.position.x >= 160) {
    camera.position.x = player.position.x;
  }

  var updateMargin = 100;
  var cameraTop = camera.position.y - World.height / 2 + updateMargin;
  var cameraBottom = camera.position.y + World.height / 2 - updateMargin;

  if (player.position.y < cameraTop) {
    cameraTargetY = player.position.y - updateMargin + World.height / 2;
  } else if (player.position.y > cameraBottom) {
    cameraTargetY = player.position.y + updateMargin - World.height / 2;
  }

  camera.position.y += (cameraTargetY - camera.position.y) * 0.1;
}

function respawn() {
  fill(0, fadeOpacity);
  noStroke();
  rect(camera.position.x - World.width / 2, camera.position.y - World.height / 2, World.width, World.height);

  if (fadeDirection === 1) {
    fadeOpacity += 10;
    if (fadeOpacity >= 255) {
      fadeOpacity = 255;

      if (deathTimer === 0) {
        if (activeCheckpoint) {
          player.x = activeCheckpoint.position.x;
          player.y = activeCheckpoint.position.y;
          resetCoins(activeCheckpoint.savedCoins);
          player.setAnimation("Player Idle " + direction);
          player.setVelocity(0, 0);
          player.horizontalVelocity = 0;
          camera.position.y = player.y - 100;
          camera.position.x = player.x;
          cameraTargetY = camera.position.y;
        } else {
          player.x = 160;
          player.y = 303.7;
          player.setAnimation("Player Idle " + direction);
          player.setVelocity(0, 0);
          player.horizontalVelocity = 0;
          resetCoins();
          camera.position.y = 203.7;
          camera.position.x = 160;
          cameraTargetY = 0;
        }
      }

      deathTimer++;
      background("cyan");
      drawSprites();
      fill(0, fadeOpacity);
      rect(camera.position.x - World.width / 2, camera.position.y - World.height / 2, World.width, World.height);

      if (deathTimer >= 30) {
        fadeDirection = -1;
        deathTimer = 0;
      }
    }
  } else if (fadeDirection === -1) {
    fadeOpacity -= 10;
    if (fadeOpacity <= 0) {
      fadeOpacity = 0;
      fadeDirection = 0;
      isDead = false;
    }
  }
}

function coinAnimation() {
  var totalFrames = 20;
  var maxHeight = 40;
  for (var i = 0; i < World.allSprites.length; i++) {
    var s = World.allSprites[i];
    if (s.isAnimating) {
      s.animationFrame++;
      var t = s.animationFrame / totalFrames;
      if (t > 1) {
        s.remove();
        continue;
      }
      var yOffset = -4 * maxHeight * (t - 0.5) * (t - 0.5) + maxHeight;
      var xOffset = 5 * t;

      s.position.x = s.startX + xOffset;
      s.position.y = s.startY - yOffset;
      s.alpha = 1 - t;
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
