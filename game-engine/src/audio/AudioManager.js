class AudioManager {
    constructor() {
      this.sounds = new Map();
      this.musicTracks = new Map();
      this.currentMusic = null;
    }
  
    loadSound(name, src) {
      const audio = new Audio(src);
      this.sounds.set(name, audio);
    }
  
    loadMusic(name, src) {
      const audio = new Audio(src);
      audio.loop = true;
      this.musicTracks.set(name, audio);
    }
  
    playSound(name) {
      const sound = this.sounds.get(name);
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    }
  
    playMusic(name) {
      if (this.currentMusic) {
        this.currentMusic.pause();
      }
      const music = this.musicTracks.get(name);
      if (music) {
        music.currentTime = 0;
        music.play();
        this.currentMusic = music;
      }
    }
  
    stopMusic() {
      if (this.currentMusic) {
        this.currentMusic.pause();
        this.currentMusic.currentTime = 0;
      }
    }
  
    setVolume(volume) {
      for (const sound of this.sounds.values()) {
        sound.volume = volume;
      }
      for (const music of this.musicTracks.values()) {
        music.volume = volume;
      }
    }
  }
  
  export default AudioManager;