import { v4 as uuidv4} from "uuid";
import type { NextApiRequest, NextApiResponse } from 'next'


export interface Todo {
    id: string;
    name: string;
    isDone: boolean;
    createdAt?: string;
    updatedAt?: string; 
}

export let todos: Array<Todo> = [
    {
        id: uuidv4(),
        name: 'Buy 1 KG potatoes',
        isDone: false,
        createdAt: new Date().toISOString()
    },
    {
        id: uuidv4(),
        name: 'Buy 1 KG tomatoes',
        isDone: false,
        createdAt: new Date().toISOString()
    },
    {
        id: uuidv4(),
        name: 'Buy 1 KG cocumber',
        isDone: false,
        createdAt: new Date().toISOString()
    },
]

export const addTodo = (name: any) => {
    let newTodo = {
      id: uuidv4(),
      name,
      isDone: false,
    };
    todos.push(newTodo);
  };
  
  export const deleteTodo = (id: any) => {
    todos = todos.filter((obj) => {
      return obj.id !== id;
    });
  };
  
  export const updateTodo = ({ id, isDone }: any) => {
    // only isDone can be updated atm
    let newTodos: Array<Todo | any> = [];
    todos.map((obj) => {
      let newTodo = { ...obj };
      if (obj.id == id) {
        newTodo = {
          id,
          name: obj.name,
          isDone,
        };
      }
      newTodos.push(newTodo);
    });
    todos = newTodos;
  };
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ todos });
  }