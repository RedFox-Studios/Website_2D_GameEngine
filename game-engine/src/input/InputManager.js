class InputManager {
    constructor(canvas) {
      this.keys = {};
      this.mouse = { x: 0, y: 0, isDown: false };
      this.setupEventListeners(canvas);
    }
  
    setupEventListeners(canvas) {
      window.addEventListener('keydown', (e) => this.keys[e.code] = true);
      window.addEventListener('keyup', (e) => this.keys[e.code] = false);
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });
      canvas.addEventListener('mousedown', () => this.mouse.isDown = true);
      canvas.addEventListener('mouseup', () => this.mouse.isDown = false);
    }
  
    isKeyDown(keyCode) {
      return this.keys[keyCode] || false;
    }
  
    update() {
      // Update method can be used for more complex input handling
    }
  }
  
  export default InputManager;