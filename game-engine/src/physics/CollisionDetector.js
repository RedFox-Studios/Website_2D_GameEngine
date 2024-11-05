class CollisionDetector {
    constructor() {
      this.collidables = [];
      this.tilemapManager = null;
    }
  
    setTilemapManager(tilemapManager) {
      this.tilemapManager = tilemapManager;
    }
  
    addCollidable(entity) {
      this.collidables.push(entity);
    }
  
    removeCollidable(entity) {
      const index = this.collidables.indexOf(entity);
      if (index > -1) {
        this.collidables.splice(index, 1);
      }
    }
  
    checkCollisions() {
      for (let i = 0; i < this.collidables.length; i++) {
        for (let j = i + 1; j < this.collidables.length; j++) {
          if (this.isColliding(this.collidables[i], this.collidables[j])) {
            this.collidables[i].onCollision(this.collidables[j]);
            this.collidables[j].onCollision(this.collidables[i]);
          }
        }
        this.checkTilemapCollision(this.collidables[i]);
      }
    }
  
    isColliding(entity1, entity2) {
      return (
        entity1.position.x < entity2.position.x + entity2.width &&
        entity1.position.x + entity1.width > entity2.position.x &&
        entity1.position.y < entity2.position.y + entity2.height &&
        entity1.position.y + entity1.height > entity2.position.y
      );
    }
  
    checkTilemapCollision(entity) {
      if (!this.tilemapManager) return;
  
      const tileSize = this.tilemapManager.tileSize;
      const startCol = Math.floor(entity.position.x / tileSize);
      const endCol = Math.ceil((entity.position.x + entity.width) / tileSize);
      const startRow = Math.floor(entity.position.y / tileSize);
      const endRow = Math.ceil((entity.position.y + entity.height) / tileSize);
  
      for (let row = startRow; row < endRow; row++) {
        for (let col = startCol; col < endCol; col++) {
          const tile = this.tilemapManager.getTile(col, row);
          if (tile !== null && tile !== 0) { // Assuming 0 is an empty tile
            const tileX = col * tileSize;
            const tileY = row * tileSize;
            if (this.isColliding(entity, { position: { x: tileX, y: tileY }, width: tileSize, height: tileSize })) {
              entity.onCollision({ type: 'tile', row, col, tile });
            }
          }
        }
      }
    }
  
    update() {
      this.checkCollisions();
    }
  }
  
  export default CollisionDetector;