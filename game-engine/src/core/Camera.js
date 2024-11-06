import Vector2D from '../physics/Vector2D.js';

class Camera {
  constructor(width, height) {
    this.position = new Vector2D(0, 0);
    this.width = width;
    this.height = height;
    this.zoom = 1;
    this.target = null;
    this.smoothFactor = 0.1;
  }

  follow(entity) {
    this.target = entity;
  }

  update(deltaTime) {
    if (this.target) {
      const targetX = this.target.position.x - this.width / 2;
      const targetY = this.target.position.y - this.height / 2;
      
      this.position.x += (targetX - this.position.x) * this.smoothFactor;
      this.position.y += (targetY - this.position.y) * this.smoothFactor;
    }
  }

  apply(ctx) {
    ctx.translate(-this.position.x, -this.position.y);
    ctx.scale(this.zoom, this.zoom);
  }
}

export default Camera;