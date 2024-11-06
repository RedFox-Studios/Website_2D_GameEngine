import Camera from './Camera.js';

class Scene {
  constructor(config) {
    this.entities = [];
    this.camera = new Camera(config.width, config.height);
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  removeEntity(entity) {
    const index = this.entities.indexOf(entity);
    if (index > -1) {
      this.entities.splice(index, 1);
    }
  }

  update(deltaTime) {
    for (const entity of this.entities) {
      entity.update(deltaTime);
    }
    this.camera.update(deltaTime);
  }

  fixedUpdate(fixedDeltaTime) {
    for (const entity of this.entities) {
      if (entity.fixedUpdate) {
        entity.fixedUpdate(fixedDeltaTime);
      }
    }
  }

  render(ctx) {
    ctx.save();
    this.camera.apply(ctx);
    for (const entity of this.entities) {
      entity.render(ctx);
    }
    ctx.restore();
  }
}

export default Scene;