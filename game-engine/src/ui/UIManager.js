import UIElement from './UIElement.js';

class UIManager {
  constructor(ctx) {
    this.ctx = ctx;
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index > -1) {
      this.elements.splice(index, 1);
    }
  }

  update(deltaTime) {
    for (const element of this.elements) {
      element.update(deltaTime);
    }
  }

  render() {
    for (const element of this.elements) {
      element.render(this.ctx);
    }
  }
}

export default UIManager;