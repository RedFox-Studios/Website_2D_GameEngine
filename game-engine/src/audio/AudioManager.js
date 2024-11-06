class AudioManager {
  constructor() {
    this.sounds = new Map();
    this.music = null;
  }

  loadSound(name, src) {
    const audio = new Audio(src);
    this.sounds.set(name, audio);
  }

  playSound(name) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }

  stopSound(name) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  playMusic(src) {
    if (this.music) {
      this.music.pause();
    }
    this.music = new Audio(src);
    this.music.loop = true;
    this.music.play();
  }

  stopMusic() {
    if (this.music) {
      this.music.pause();
      this.music.currentTime = 0;
    }
  }
}

export default AudioManager;