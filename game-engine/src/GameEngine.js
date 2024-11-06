import Engine from './core/Engine.js';
import Scene from './core/Scene.js';
import InputManager from './input/InputManager.js';
import Renderer from './rendering/Renderer.js';
import CollisionDetector from './physics/CollisionDetector.js';
import AudioManager from './audio/AudioManager.js';
import AssetLoader from './utils/AssetLoader.js';
import UIManager from './ui/UIManager.js';
import StateManager from './state/StateManager.js';
import ErrorHandler from './utils/ErrorHandler.js';

class GameEngine {
  constructor(canvasId) {
    try {
      this.engine = new Engine(canvasId);
      this.input = new InputManager(this.engine.canvas);
      this.renderer = new Renderer(this.engine.ctx);
      this.collisionDetector = new CollisionDetector();
      this.audioManager = new AudioManager();
      this.assetLoader = new AssetLoader();
      this.uiManager = new UIManager(this.engine.ctx);
      this.stateManager = new StateManager();

      this.engine.addSystem(this.input);
      this.engine.addSystem(this.renderer);
      this.engine.addSystem(this.collisionDetector);
      this.engine.addSystem(this.audioManager);
      this.engine.addSystem(this.uiManager);
    } catch (error) {
      ErrorHandler.logError(error, 'GameEngine Constructor');
      throw error;
    }
  }

  async loadAssets(assetManifest) {
    return ErrorHandler.wrapAsync(this.assetLoader.loadAssets.bind(this.assetLoader))(assetManifest);
  }

  createScene(sceneConfig) {
    return ErrorHandler.wrapSync(() => new Scene(sceneConfig))();
  }

  setActiveScene(scene) {
    ErrorHandler.wrapSync(this.engine.setActiveScene.bind(this.engine))(scene);
  }

  start() {
    ErrorHandler.wrapSync(this.engine.start.bind(this.engine))();
  }
}

export default GameEngine;