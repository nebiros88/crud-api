export type CustomError = Error;

export type User = {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
};

export type REQUEST_TYPE = {
  POST: string;
  GET: string;
  PUT: string;
  DELETE: string;
};
