import Vector2D from '../physics/Vector2D.js';

class Entity {
  constructor(config) {
    this.position = new Vector2D(config.x || 0, config.y || 0);
    this.velocity = new Vector2D(0, 0);
    this.acceleration = new Vector2D(0, 0);
    this.width = config.width || 0;
    this.height = config.height || 0;
    this.rotation = 0;
    this.shape = null;
  }

  update(deltaTime) {
    // This method can be overridden by child classes
  }

  fixedUpdate(fixedDeltaTime) {
    this.velocity.add(this.acceleration.multiply(fixedDeltaTime));
    this.position.add(this.velocity.multiply(fixedDeltaTime));
  }

  render(ctx) {
    if (this.shape) {
      this.shape.draw(ctx, this.position, this.rotation);
    }
  }

  setShape(shape) {
    this.shape = shape;
  }
}

export default Entity;