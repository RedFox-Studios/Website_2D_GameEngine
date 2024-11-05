import Vector2D from '../physics/Vector2D.js';

class Particle {
  constructor(x, y, velocity, life, color, size) {
    this.position = new Vector2D(x, y);
    this.velocity = velocity;
    this.life = life;
    this.color = color;
    this.size = size;
  }

  update(deltaTime) {
    this.position.add(this.velocity.multiply(deltaTime));
    this.life -= deltaTime;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class ParticleSystem {
  constructor(ctx) {
    this.ctx = ctx;
    this.particles = [];
  }

  emit(x, y, count, options = {}) {
    const {
      minVelocity = -50,
      maxVelocity = 50,
      minLife = 0.5,
      maxLife = 2,
      color = 'rgba(255, 0, 0, 0.5)',
      size = 2
    } = options;

    for (let i = 0; i < count; i++) {
      const velocity = new Vector2D(
        Math.random() * (maxVelocity - minVelocity) + minVelocity,
        Math.random() * (maxVelocity - minVelocity) + minVelocity
      );
      const life = Math.random() * (maxLife - minLife) + minLife;
      this.particles.push(new Particle(x, y, velocity, life, color, size));
    }
  }

  update(deltaTime) {
    this.particles = this.particles.filter(particle => particle.life > 0);
    for (const particle of this.particles) {
      particle.update(deltaTime);
    }
  }

  render() {
    for (const particle of this.particles) {
      particle.render(this.ctx);
    }
  }
}

export default ParticleSystem;