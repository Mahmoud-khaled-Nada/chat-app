declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST?: string;
    DB_PORT?: string;
    DB_DATABASE?: string;
    DB_USERNAME?: string;
    DB_PASSWORD?: string;
    COOKIE_SECRET: string;
  }
}
