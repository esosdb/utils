import { DataBase } from "esosdb";

declare class Schema {
  constructor(name: string, props: any = {}, db: DataBase);
  create(value: props, callback?: (data: any) => any): any;
  findById(id: any, callback?: (data: any) => any): any;
  updateById(id: any, value: any, callback?: (data: any) => any): any;
  deleteById(id: any, callback?: (data: any) => any): any;
}

export { Schema };
