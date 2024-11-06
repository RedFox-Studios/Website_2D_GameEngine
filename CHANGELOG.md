# Changelog

All notable changes to the RedFox Studios 2D Game Engine will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-11-06

### Added
- New ErrorHandler utility for capturing and logging errors
  - Adds timestamp and context to error logs
  - Provides wrappers for both synchronous and asynchronous functions
  - Integrated into GameEngine and Engine classes for comprehensive error catching
- Error logs now appear in the JavaScript console with detailed information

### Changed
- Updated GameEngine.js to use new ErrorHandler for all methods
- Modified Engine.js to incorporate ErrorHandler in the game loop and all major methods

### Technical
- Improved debugging capabilities with more informative error messages
- Enhanced error traceability across the engine's core components

## [1.0.0] - 2024-11-06

### Added
- Initial release of the game engine
- Basic game engine structure with core components
- Entity-Component System
- Scene management system
- Input handling system
- Basic physics system with collision detection
- Shape-based rendering system
- Audio system for sound effects and background music
- Camera system with smooth following
- Asset loading system
- Example platformer game

### Changed
- Moved from sprite-based rendering to shape-based rendering for simplicity
- Removed tilemap system in favor of simple shape-based platforms
- Updated collision detection to work with shape-based entities
- Simplified the example game to use basic shapes instead of sprites

### Fixed
- Collision detection system now properly manages entity list
- Audio system now properly handles sound stopping
- Camera following now implements smooth movement
- Jump sound no longer plays multiple times when rapidly jumping
- Fixed memory leaks in entity management
- Improved physics calculations accuracy

### Technical
- Implemented proper fixed timestep game loop
- Added proper error handling for asset loading
- Improved code organization and file structure
- Added comprehensive documentation
- Set up build system with Webpack

### Documentation
- Added detailed README.md with installation and usage instructions
- Added API documentation for all major classes
- Added example code snippets
- Created CHANGELOG.md to track version history

## [Unreleased]

### Planned
- Additional example games
- Performance optimizations
- Enhanced debugging tools
- More shape types for rendering
- Particle system
- Enhanced audio features
- Mobile input support
- Network multiplayer support

[1.0.0]: https://github.com/RedFox-Studios/Website_2D_GameEngine/releases/tag/v1.0.0