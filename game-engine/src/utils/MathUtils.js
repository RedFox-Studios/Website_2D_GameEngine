class MathUtils {
    static clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
  
    static lerp(start, end, t) {
      return start + (end - start) * t;
    }
  
    static randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    static degToRad(degrees) {
      return degrees * (Math.PI / 180);
    }
  
    static radToDeg(radians) {
      return radians * (180 / Math.PI);
    }
  }
  
  export default MathUtils;