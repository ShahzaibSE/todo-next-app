import axios from "axios";
import { ACTION_REFRESH } from "next/dist/client/components/reducer";
import listTodo, { Todo, todos } from "../pages/api/todo/list";

export const baseUrl = "http://localhost:3000/api/todo";

export const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todo/list");
  return todos.json();
};

export async function add_to_do(name: string, refresh: any) {
  await axios.post(`${baseUrl}add`);
  refresh();
}

// export async function update_to_do(id: string, isDone: boolean, refresh: any ){
//     await axios.patch(`${baseUrl}pdate`);
//     refresh();
// }

// export async function delete_to_do(id: string, refresh: any) {
//     await axios.delete(`${baseUrl}?id=${id}`);
//     refresh();
// }

export async function update_to_do(id: any, isDone: any, refresh: any) {
  await fetch(`${baseUrl}/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

export async function delete_to_do(id: any, refresh: any) {
  await fetch(`${baseUrl}/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}
