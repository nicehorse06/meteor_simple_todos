// 與 db 連線的後端 api
import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');