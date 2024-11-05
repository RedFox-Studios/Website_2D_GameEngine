class AssetLoader {
    constructor() {
      this.images = new Map();
      this.audioFiles = new Map();
    }
  
    async loadImage(name, src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.images.set(name, img);
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
    }
  
    async loadAudio(name, src) {
      return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.oncanplaythrough = () => {
          this.audioFiles.set(name, audio);
          resolve(audio);
        };
        audio.onerror = reject;
        audio.src = src;
      });
    }
  
    async loadAssets(assetManifest) {
      const imagePromises = assetManifest.images.map(img => this.loadImage(img.name, img.src));
      const audioPromises = assetManifest.audio.map(audio => this.loadAudio(audio.name, audio.src));
      await Promise.all([...imagePromises, ...audioPromises]);
    }
  
    getImage(name) {
      return this.images.get(name);
    }
  
    getAudio(name) {
      return this.audioFiles.get(name);
    }
  }
  
  export default AssetLoader;