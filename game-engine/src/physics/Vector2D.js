class Vector2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    add(vector) {
      this.x += vector.x;
      this.y += vector.y;
      return this;
    }
  
    subtract(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
    }
  
    multiply(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
  
    divide(scalar) {
      if (scalar !== 0) {
        this.x /= scalar;
        this.y /= scalar;
      }
      return this;
    }
  
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  
    normalize() {
      const mag = this.magnitude();
      if (mag !== 0) {
        this.divide(mag);
      }
      return this;
    }
  
    static distance(v1, v2) {
      return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
    }
  }
  
  export default Vector2D;