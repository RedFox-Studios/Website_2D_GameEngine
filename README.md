# RedFox Studios 2D Game Engine

A lightweight, modular 2D game engine built with JavaScript, designed for creating browser-based games with ease and efficiency.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

The RedFox Studios 2D Game Engine is a JavaScript-based game development framework that provides essential tools and components for creating 2D games that run in web browsers. This engine focuses on simplicity and performance, making it ideal for small to medium-sized game projects.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
  - [Game Engine](#game-engine)
  - [Scenes](#scenes)
  - [Entities](#entities)
  - [Components](#components)
  - [Physics](#physics)
  - [Input Handling](#input-handling)
  - [Audio System](#audio-system)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Engine Features
- Scene-based game structure
- Entity-Component System
- Fixed timestep game loop
- Smooth camera system with following behavior

### Physics and Collision
- Basic 2D physics simulation
- Collision detection and response
- Vector-based movement and calculations

### Graphics and Rendering
- Shape-based rendering system
- Basic animations support
- Camera system with smooth following
- Flexible rendering pipeline

### Input and Audio
- Keyboard input handling
- Audio playback system
- Sound effects and background music support

### Additional Features
- Asset loading and management
- State management system
- UI management system
- Debug utilities

## Getting Started

### Prerequisites

- Modern web browser
- Node.js (version 12.0.0 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RedFox-Studios/Website_2D_GameEngine.git
   ```

2. Navigate to the game engine directory:
   ```bash
   cd Website_2D_GameEngine/game-engine
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the engine:
   ```bash
   npm run build
   ```

### Quick Start

1. Create a new HTML file:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>My First Game</title>
   </head>
   <body>
       <canvas id="gameCanvas" width="800" height="600"></canvas>
       <script type="module" src="game.js"></script>
   </body>
   </html>
   ```

2. Create a new game file (game.js):
   ```javascript
   import GameEngine from './path/to/game-engine.js';
   import Entity from './path/to/core/Entity.js';
   import Shape from './path/to/rendering/Shape.js';

   // Initialize the engine
   const engine = new GameEngine('gameCanvas');

   // Create a simple game object
   class GameObject extends Entity {
     constructor(x, y) {
       super({ x, y, width: 50, height: 50 });
       this.setShape(new Shape('rectangle', this.width, this.height, 'blue'));
     }

     update(deltaTime) {
       // Add your game logic here
     }
   }

   // Start the game
   async function startGame() {
     const scene = engine.createScene({ width: 800, height: 600 });
     const gameObject = new GameObject(400, 300);
     scene.addEntity(gameObject);
     engine.setActiveScene(scene);
     engine.start();
   }

   startGame();
   ```

## Core Concepts

### Game Engine

The GameEngine class is the main entry point for the engine. It manages all core systems and coordinates their interaction:

```javascript
const engine = new GameEngine('canvasId');
```

Key responsibilities:
- Scene management
- System coordination
- Game loop management
- Asset loading

### Scenes

Scenes represent different states or levels in your game:

```javascript
const scene = engine.createScene({
  width: 800,
  height: 600
});
engine.setActiveScene(scene);
```

### Entities

Entities are the basic game objects. They can have positions, shapes, and behaviors:

```javascript
class Player extends Entity {
  constructor(x, y) {
    super({ x, y, width: 32, height: 32 });
    this.setShape(new Shape('rectangle', this.width, this.height, 'blue'));
  }

  update(deltaTime) {
    // Update logic
  }

  onCollision(other) {
    // Collision handling
  }
}
```

### Physics

The engine includes basic physics simulation:

- Vector-based movement
- Gravity simulation
- Collision detection
- Velocity and acceleration

Example of physics implementation:

```javascript
class PhysicsObject extends Entity {
  constructor(x, y) {
    super({ x, y, width: 32, height: 32 });
    this.velocity = new Vector2D(0, 0);
    this.acceleration = new Vector2D(0, 0);
  }

  update(deltaTime) {
    // Apply physics
    this.velocity.add(this.acceleration.multiply(deltaTime));
    this.position.add(this.velocity.multiply(deltaTime));
  }
}
```

### Input Handling

The engine provides a simple input management system:

```javascript
// Check for key press
if (engine.input.isKeyDown('ArrowLeft')) {
  // Move left
}

// Multiple key support
if (engine.input.isKeyDown('Space') && !this.isJumping) {
  // Jump
}
```

### Audio System

Handle game audio with the built-in audio system:

```javascript
// Play a sound effect
engine.audioManager.playSound('jump');

// Play background music
engine.audioManager.playMusic('bgm');

// Stop sounds
engine.audioManager.stopSound('jump');
engine.audioManager.stopMusic();
```

## API Reference

### GameEngine Class

```javascript
class GameEngine {
  constructor(canvasId)
  async loadAssets(assetManifest)
  createScene(sceneConfig)
  setActiveScene(scene)
  start()
}
```

### Entity Class

```javascript
class Entity {
  constructor(config)
  update(deltaTime)
  fixedUpdate(fixedDeltaTime)
  render(ctx)
  setShape(shape)
  onCollision(other)
}
```

### Vector2D Class

```javascript
class Vector2D {
  constructor(x = 0, y = 0)
  add(vector)
  subtract(vector)
  multiply(scalar)
  divide(scalar)
  magnitude()
  normalize()
  static distance(v1, v2)
}
```

## Examples

Check out the `examples` directory for complete game examples:

- Simple Platformer: A basic platforming game demonstrating physics and collision
- More examples coming soon!

## Contributing

We welcome contributions to the RedFox Studios 2D Game Engine! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact us through our website.

---

Made with ❤️ by [RedFox Studios](https://github.com/RedFox-Studios)