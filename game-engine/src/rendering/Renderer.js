class Renderer {
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  
    drawSprite(sprite, x, y, rotation = 0, scale = { x: 1, y: 1 }) {
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotation);
      this.ctx.scale(scale.x, scale.y);
      this.ctx.drawImage(sprite.image, -sprite.width / 2, -sprite.height / 2);
      this.ctx.restore();
    }
  
    drawRect(x, y, width, height, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, width, height);
    }
  
    drawCircle(x, y, radius, color) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
    }
  
    drawText(text, x, y, font, color) {
      this.ctx.font = font;
      this.ctx.fillStyle = color;
      
      this.ctx.fillText(text, x, y);
    }
  }
  
  export default Renderer;