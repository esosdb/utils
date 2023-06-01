import { Database } from "esosdb";

declare type Types = {
  string: string;
  number: number;
  "any[]": any[];
  object: object;
  "string[]": string[];
  "number[]": number[];
  boolean: boolean;
};

declare type SchemaProps<T extends keyof Types> = {
  [key: string]: { type: T; required?: boolean };
};

declare function connect(db: Database): void;

declare class Schema<T extends SchemaProps<keyof Types>> {
  constructor(name: string, props: T, timestamps?: boolean);
  create(
    value: {
      [key in keyof T]: T[key]["required"] extends true
        ? T[key]["type"] extends keyof Types
          ? Types[T[key]["type"]]
          : any
        : T[key]["type"] extends keyof Types
        ? Types[T[key]["type"]] | Any
        : any;
    },
    callback?: (data: any) => any
  ): any;
  findById(id: any, callback?: (data: any) => any): any;
  findByElement(element: any, callback?: (data: any) => any): any;
  updateById(id: any, value: any, callback?: (data: any) => any): any;
  deleteById(id: any, callback?: (data: any) => any): any;
}

export { Schema, connect };
