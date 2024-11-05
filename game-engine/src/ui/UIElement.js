class UIElement {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    update(deltaTime) {
      // Implement update logic if needed
    }
  
    render(ctx) {
      // Implement render logic
    }
  
    isPointInside(x, y) {
      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
  }
  
  export default UIElement;