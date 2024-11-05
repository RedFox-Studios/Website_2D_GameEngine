class Sprite {
  constructor(image, frameWidth, frameHeight, frameCount = 1, framesPerRow = frameCount, fps = 10) {
    this.image = image;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameCount = frameCount;
    this.framesPerRow = framesPerRow;
    this.currentFrame = 0;
    this.fps = fps;
    this.frameTime = 1 / fps;
    this.elapsedTime = 0;
  }

  update(deltaTime) {
    if (this.frameCount > 1) {
      this.elapsedTime += deltaTime;
      if (this.elapsedTime >= this.frameTime) {
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;
        this.elapsedTime = 0;
      }
    }
  }

  draw(ctx, position, rotation = 0, scale = { x: 1, y: 1 }) {
    const row = Math.floor(this.currentFrame / this.framesPerRow);
    const col = this.currentFrame % this.framesPerRow;

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);
    ctx.scale(scale.x, scale.y);
    ctx.drawImage(
      this.image,
      col * this.frameWidth,
      row * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      -this.frameWidth / 2,
      -this.frameHeight / 2,
      this.frameWidth,
      this.height
    );
    ctx.restore();
  }
}

export default Sprite;