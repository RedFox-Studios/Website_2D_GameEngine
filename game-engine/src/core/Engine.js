class Engine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.systems = [];
    this.activeScene = null;
    this.lastTime = 0;
    this.accumulator = 0;
    this.fixedTimeStep = 1 / 60; // 60 updates per second
  }

  addSystem(system) {
    this.systems.push(system);
  }

  setActiveScene(scene) {
    this.activeScene = scene;
  }

  update(deltaTime) {
    this.accumulator += deltaTime;

    while (this.accumulator >= this.fixedTimeStep) {
      this.fixedUpdate(this.fixedTimeStep);
      this.accumulator -= this.fixedTimeStep;
    }

    for (const system of this.systems) {
      if (system.update) {
        system.update(deltaTime);
      }
    }

    if (this.activeScene) {
      this.activeScene.update(deltaTime);
    }
  }

  fixedUpdate(fixedDeltaTime) {
    if (this.activeScene) {
      this.activeScene.fixedUpdate(fixedDeltaTime);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.activeScene) {
      this.activeScene.render(this.ctx);
    }

    for (const system of this.systems) {
      if (system.render) {
        system.render(this.ctx);
      }
    }
  }

  start() {
    const gameLoop = (currentTime) => {
      const deltaTime = (currentTime - this.lastTime) / 1000;
      this.lastTime = currentTime;

      this.update(deltaTime);
      this.render();

      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
  }
}

export default Engine;