import Vector2D from '../physics/Vector2D.js';

class Camera {
  constructor(width, height) {
    this.position = new Vector2D(0, 0);
    this.width = width;
    this.height = height;
    this.zoom = 1;
  }

  update(deltaTime) {
    // Camera movement logic can be added here
  }

  apply(ctx) {
    ctx.translate(-this.position.x + this.width / 2, -this.position.y + this.height / 2);
    ctx.scale(this.zoom, this.zoom);
  }

  follow(entity) {
    this.position.x = entity.position.x;
    this.position.y = entity.position.y;
  }
}

export default Camera;