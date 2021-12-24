import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocumnet } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel('Todo') private readonly todoModel: Model<TodoDocumnet>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todoModel.create(createTodoDto);
    return createdTodo;
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.todoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Todo> {
    return await this.todoModel.findByIdAndRemove(id);
  }
}
