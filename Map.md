project-root/
│
├── game-engine/
│   ├── src/
│   │   ├── core/
│   │   │   ├── Engine.js
│   │   │   ├── Entity.js
│   │   │   ├── Scene.js
│   │   │   └── Camera.js
│   │   ├── input/
│   │   │   └── InputManager.js
│   │   ├── physics/
│   │   │   ├── CollisionDetector.js
│   │   │   └── Vector2D.js
│   │   ├── rendering/
│   │   │   ├── Renderer.js
│   │   │   └── Shape.js
│   │   ├── audio/
│   │   │   └── AudioManager.js
│   │   ├── ui/
│   │   │   ├── UIManager.js
│   │   │   └── UIElement.js
│   │   ├── utils/
│   │   │   ├── AssetLoader.js
│   │   │   └── MathUtils.js
│   │   ├── state/
│   │   │   └── StateManager.js
│   │   └── GameEngine.js
│   ├── dist/
│   │   └── game-engine.js
│   ├── package.json
│   └── webpack.config.js
│
└── examples/
    └── simple-platformer/
        ├── assets/
        │   ├── background_music.mp3
        │   └── jump_sound.wav
        ├── game.js
        └── index.html