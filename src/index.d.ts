import { DataBase } from "esosdb";

declare type SchemaProps = {
  [key: string]: { type: string; required?: boolean };
};

declare function connect(db: DataBase): void;

declare class Schema {
  constructor(
    name: string,
    props: SchemaProps = {},
    timestamps: boolean = false
  );
  create(value: props, callback?: (data: any) => any): any;
  findById(id: any, callback?: (data: any) => any): any;
  updateById(id: any, value: any, callback?: (data: any) => any): any;
  deleteById(id: any, callback?: (data: any) => any): any;
}

export { Schema, connect };
