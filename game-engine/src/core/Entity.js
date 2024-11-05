import Vector2D from '../physics/Vector2D.js';

class Entity {
  constructor(config) {
    this.position = new Vector2D(config.x || 0, config.y || 0);
    this.velocity = new Vector2D(0, 0);
    this.acceleration = new Vector2D(0, 0);
    this.rotation = 0;
    this.scale = new Vector2D(1, 1);
    this.sprite = null;
    this.collider = null;
  }

  update(deltaTime) {
    this.velocity.add(this.acceleration.multiply(deltaTime));
    this.position.add(this.velocity.multiply(deltaTime));
  }

  render(ctx) {
    if (this.sprite) {
      this.sprite.draw(ctx, this.position, this.rotation, this.scale);
    }
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  setCollider(collider) {
    this.collider = collider;
  }
}

export default Entity;