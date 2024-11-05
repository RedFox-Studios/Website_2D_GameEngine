class TilemapManager {
    constructor(ctx) {
      this.ctx = ctx;
      this.tilemap = null;
      this.tileSize = 32;
    }
  
    loadTilemap(tilemapData, tilesetImage) {
      this.tilemap = tilemapData;
      this.tilesetImage = tilesetImage;
    }
  
    getTile(x, y) {
      if (this.tilemap && x >= 0 && x < this.tilemap[0].length && y >= 0 && y < this.tilemap.length) {
        return this.tilemap[y][x];
      }
      return null;
    }
  
    render(camera) {
      if (!this.tilemap || !this.tilesetImage) return;
  
      const startCol = Math.floor(camera.position.x / this.tileSize);
      const endCol = startCol + Math.ceil(camera.width / this.tileSize);
      const startRow = Math.floor(camera.position.y / this.tileSize);
      const endRow = startRow + Math.ceil(camera.height / this.tileSize);
  
      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          const tile = this.getTile(col, row);
          if (tile !== null) {
            const x = col * this.tileSize - camera.position.x;
            const y = row * this.tileSize - camera.position.y;
            this.ctx.drawImage(
              this.tilesetImage,
              (tile % 10) * this.tileSize,
              Math.floor(tile / 10) * this.tileSize,
              this.tileSize,
              this.tileSize,
              x,
              y,
              this.tileSize,
              this.tileSize
            );
          }
        }
      }
    }
  }
  
  export default TilemapManager;