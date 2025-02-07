export class Res {
    static success<T>(data: T, message = 'Success',code : number = 500) {
      return {
        success: true,
        message,
        data,
        code
      };
    }
  
    static error(message = 'Something went wrong' , code : number = 500) {
      return {
        success: false,
        message,
        code
      };
    }
  }
  