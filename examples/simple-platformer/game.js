class Player extends Entity {
  constructor(x, y) {
    super({ x, y, width: 32, height: 32 });
    this.velocity = new Vector2D(0, 0);
    this.isJumping = false;
    this.setShape(new Shape('rectangle', this.width, this.height, 'blue'));
  }

  update(deltaTime) {
    // Handle input
    if (engine.input.isKeyDown('ArrowLeft')) {
      this.velocity.x = -PLAYER_SPEED;
    } else if (engine.input.isKeyDown('ArrowRight')) {
      this.velocity.x = PLAYER_SPEED;
    } else {
      this.velocity.x = 0;
    }

    if (engine.input.isKeyDown('Space') && !this.isJumping) {
      this.velocity.y = -JUMP_FORCE;
      this.isJumping = true;
      engine.audioManager.playSound('jump');
    }

    // Apply gravity
    this.acceleration.y = GRAVITY;
  }

  fixedUpdate(fixedDeltaTime) {
    super.fixedUpdate(fixedDeltaTime);

    // Keep player on screen
    this.position.x = Math.max(0, Math.min(this.position.x, 800 - this.width));
    if (this.position.y > 600 - this.height) {
      this.position.y = 600 - this.height;
      this.velocity.y = 0;
      if (this.isJumping) {
        this.isJumping = false;
        engine.audioManager.stopSound('jump');
      }
    }
  }

  onCollision(other) {
    if (other instanceof Platform) {
      // Simple collision resolution
      const overlapX = (this.width + other.width) / 2 - Math.abs(this.position.x - other.position.x);
      const overlapY = (this.height + other.height) / 2 - Math.abs(this.position.y - other.position.y);

      if (overlapX > overlapY) {
        // Collision from top or bottom
        if (this.position.y < other.position.y) {
          this.position.y = other.position.y - this.height;
          this.velocity.y = 0;
          if (this.isJumping) {
            this.isJumping = false;
            engine.audioManager.stopSound('jump');
          }
        } else {
          this.position.y = other.position.y + other.height;
          this.velocity.y = 0;
        }
      } else {
        // Collision from left or right
        if (this.position.x < other.position.x) {
          this.position.x = other.position.x - this.width;
        } else {
          this.position.x = other.position.x + other.width;
        }
        this.velocity.x = 0;
      }
    }
  }
}