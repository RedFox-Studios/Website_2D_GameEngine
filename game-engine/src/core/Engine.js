import Scene from './Scene.js';

class Engine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scenes = [];
    this.activeScene = null;
    this.systems = [];
    this.lastTime = 0;
    this.deltaTime = 0;
  }

  addSystem(system) {
    this.systems.push(system);
  }

  createScene(sceneConfig) {
    const scene = new Scene(sceneConfig);
    this.scenes.push(scene);
    return scene;
  }

  setActiveScene(scene) {
    this.activeScene = scene;
  }

  update(timestamp) {
    this.deltaTime = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    for (const system of this.systems) {
      if (system.update) {
        system.update(this.deltaTime);
      }
    }

    if (this.activeScene) {
      this.activeScene.update(this.deltaTime);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.activeScene) {
      this.activeScene.render(this.ctx);
    }
  }

  start() {
    const gameLoop = (timestamp) => {
      this.update(timestamp);
      this.render();
      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
  }
}

export default Engine;