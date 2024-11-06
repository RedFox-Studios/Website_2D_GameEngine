class CollisionDetector {
  constructor() {
    this.entities = [];
  }

  addEntity(entity) {
    if (!this.entities.includes(entity)) {
      this.entities.push(entity);
    }
  }

  removeEntity(entity) {
    const index = this.entities.indexOf(entity);
    if (index > -1) {
      this.entities.splice(index, 1);
    }
  }

  update() {
    for (let i = 0; i < this.entities.length; i++) {
      for (let j = i + 1; j < this.entities.length; j++) {
        if (this.checkCollision(this.entities[i], this.entities[j])) {
          this.entities[i].onCollision(this.entities[j]);
          this.entities[j].onCollision(this.entities[i]);
        }
      }
    }
  }

  checkCollision(entity1, entity2) {
    return (
      entity1.position.x < entity2.position.x + entity2.width &&
      entity1.position.x + entity1.width > entity2.position.x &&
      entity1.position.y < entity2.position.y + entity2.height &&
      entity1.position.y + entity1.height > entity2.position.y
    );
  }
}

export default CollisionDetector;