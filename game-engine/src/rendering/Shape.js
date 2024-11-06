class Shape {
  constructor(type, width, height, color) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx, position, rotation = 0) {
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);
    ctx.fillStyle = this.color;

    switch (this.type) {
      case 'rectangle':
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      // Add more shapes as needed
    }

    ctx.restore();
  }
}

export default Shape;