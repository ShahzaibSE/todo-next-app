import axios from "axios";
import { ACTION_REFRESH } from "next/dist/client/components/reducer";
import listTodo, { Todo, todos } from "../pages/api/todo/list";

const baseUrl = "http://localhost:3001/api/todo";

export async function getToDos() {
  let todo: Array<Todo> = [];
  todo = await axios.get(`${baseUrl}/list`);
  return todos;
}

export async function add_to_do(name: string, refresh: any) {
  await axios.post(`${baseUrl}add`);
  refresh();
}

export async function update_to_do(id: string, isDone: boolean, refresh: any ){
    await axios.patch(`${baseUrl}pdate`);
    refresh();
}

export async function delete_to_do(id: string, refresh: any) {
    await axios.delete(`${baseUrl}?id=${id}`);
    refresh();
}
