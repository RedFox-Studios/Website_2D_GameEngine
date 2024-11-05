import Engine from './core/Engine.js';
import Scene from './core/Scene.js';  // Add this import
import InputManager from './input/InputManager.js';
import Renderer from './rendering/Renderer.js';
import CollisionDetector from './physics/CollisionDetector.js';
import AudioManager from './audio/AudioManager.js';
import AssetLoader from './utils/AssetLoader.js';
import UIManager from './ui/UIManager.js';
import ParticleSystem from './rendering/ParticleSystem.js';
import StateManager from './state/StateManager.js';
import TilemapManager from './tilemap/TilemapManager.js';

class GameEngine {
  constructor(canvasId) {
    this.engine = new Engine(canvasId);
    this.input = new InputManager(this.engine.canvas);
    this.renderer = new Renderer(this.engine.ctx);
    this.collisionDetector = new CollisionDetector();
    this.audioManager = new AudioManager();
    this.assetLoader = new AssetLoader();
    this.uiManager = new UIManager(this.engine.ctx);
    this.particleSystem = new ParticleSystem(this.engine.ctx);
    this.stateManager = new StateManager();
    this.tilemapManager = new TilemapManager(this.engine.ctx);

    this.engine.addSystem(this.input);
    this.engine.addSystem(this.renderer);
    this.engine.addSystem(this.collisionDetector);
    this.engine.addSystem(this.audioManager);
    this.engine.addSystem(this.uiManager);
    this.engine.addSystem(this.particleSystem);
    this.engine.addSystem(this.tilemapManager);
  }

  async loadAssets(assetManifest) {
    await this.assetLoader.loadAssets(assetManifest);
  }

  createScene(sceneConfig) {
    return new Scene(sceneConfig);  // Use the Scene class directly
  }

  setActiveScene(scene) {
    this.engine.setActiveScene(scene);
  }

  start() {
    this.engine.start();
  }
}

export default GameEngine;