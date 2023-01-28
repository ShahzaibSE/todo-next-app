"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import { List, ListItem } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// API Handlers.
// import { getTodos } from "./todo.controller";
import { Todo } from "../pages/api/todo/list";
import ToDoContainer from "./todo";
import axios from "axios";
import { baseUrl } from "./todo.controller";

export const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todo/list");
  return todos.json();
};

export default function ToDoList() {
  const router = useRouter();
  const [todos, setToDos] = useState<Array<Todo>>([]);
  const [isLoading, setLoading] = useState(false);
  // let todoList: Array<Todo> = [
  //   {
  //     id: "1",
  //     name: "Get grocery from market",
  //     isDone: false,
  //   },
  //   {
  //     id: "2",
  //     name: "Get grocery from imtiaz",
  //     isDone: false,
  //   },
  // ];
  //
  useEffect(() => {
    try {
      setLoading(true);
      axios.get(`${baseUrl}/list`).then((response) => {
        // console.log(response.data);
        setToDos(response.data);
        console.log("Fetching todos from API");
        console.log(todos);
      });
    } catch (err) {
      console.error(err);
    }
    router.refresh();
  }, []);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (todos.length === 0) {
    return <p>No todos found</p>;
  }

  return (
    <List spacing={3}>
      {todos.map((item: any) => {
        return (
          <ListItem key={item.id}>
            <ToDoContainer todo={item} key={item.id} />
          </ListItem>
        );
      })}
    </List>
  );
  //   return     <div>
  //   <ul style={{ listStyleType: "none", padding: 0 }}>
  //     {todos.map((t:any) => {
  //       return (
  //         <li key={t.id} style={{ padding: "5px 0" }}>
  //           <ToDoContainer todo={t} />
  //         </li>
  //       );
  //     })}
  //   </ul>
  // </div>
}
