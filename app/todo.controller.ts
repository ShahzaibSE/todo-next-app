import axios from "axios";
import listTodo, {Todo, todos} from "../pages/api/todo/list";

export async function getToDos() {
    let todo: Array<Todo> = [];
    todo = await axios.get("http://localhost:3001/api/todo/list");
    return todos;
}

export async function add_to_do(name: string, refresh:any){
    await axios.post(`http://localhost:3001/api/todo/add`);
    refresh();
  }