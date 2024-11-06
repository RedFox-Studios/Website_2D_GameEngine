class ErrorHandler {
    static logError(error, context = '') {
      const timestamp = new Date().toISOString();
      const errorMessage = error instanceof Error ? error.stack : String(error);
      const fullMessage = `[${timestamp}] ${context ? `${context}: ` : ''}${errorMessage}`;
      
      console.error(fullMessage);
  
      // You could also send this error to a server or external logging service here
      // For example:
      // sendErrorToServer(fullMessage);
    }
  
    static wrapAsync(fn) {
      return async (...args) => {
        try {
          return await fn(...args);
        } catch (error) {
          ErrorHandler.logError(error, fn.name);
          throw error; // Re-throw the error after logging
        }
      };
    }
  
    static wrapSync(fn) {
      return (...args) => {
        try {
          return fn(...args);
        } catch (error) {
          ErrorHandler.logError(error, fn.name);
          throw error; // Re-throw the error after logging
        }
      };
    }
  }
  
  export default ErrorHandler;