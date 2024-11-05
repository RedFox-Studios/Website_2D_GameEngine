class StateManager {
    constructor() {
      this.states = {};
      this.currentState = null;
    }
  
    addState(name, state) {
      this.states[name] = state;
    }
  
    setState(name) {
      if (this.currentState && this.currentState.exit) {
        this.currentState.exit();
      }
      this.currentState = this.states[name];
      if (this.currentState && this.currentState.enter) {
        this.currentState.enter();
      }
    }
  
    update(deltaTime) {
      if (this.currentState && this.currentState.update) {
        this.currentState.update(deltaTime);
      }
    }
  
    render(ctx) {
      if (this.currentState && this.currentState.render) {
        this.currentState.render(ctx);
      }
    }
  }
  
  export default StateManager;