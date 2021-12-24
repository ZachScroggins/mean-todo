import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocumnet = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
