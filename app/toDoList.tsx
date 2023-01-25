"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import {
  Text,
  Divider,
  Heading,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Tag,
  TagLabel,
  Stack,
  Box,
  Flex,
  IconButton,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// API Handlers.
import { getToDos } from "./todo.controller";
import { Todo } from "../pages/api/todo/list";
import ToDoContainer from "./todo";

export default function ToDoList() {
  // let todos: Array<Todo> = await getToDos();
  let todos: Array<Todo> = [
    {
      id: "1",
      name: "Get grocery from market",
      isDone: false,
    },
    {
      id: "2",
      name: "Get grocery from imtiaz",
      isDone: false,
    },
  ];
  return (
    <List spacing={3}>
      {todos.map((item) => {
        return (
          <ListItem key={item.id}>
            <ToDoContainer todo={item} key={item.id}/>
          </ListItem>
        );
      })}
    </List>
  );
}
