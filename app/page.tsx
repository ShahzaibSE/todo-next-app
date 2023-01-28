"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import {
  Text,
  Divider,
  Heading,
  Box,
  Flex,
  Card,
  CardBody,
  FormControl,
  Input,
  IconButton,
  HStack,
  List,
  ListItem,
  Checkbox,
  Tag,
  TagLabel,
  Progress,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
// Components.
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";
import { Todo } from "../pages/api/todo/list";

const inter = Inter({ subsets: ["latin"] });

function ToDoContainer({ todo }: Todo | any) {
  return (
    <Card key={todo.id} mt={5}>
      <CardBody>
        <HStack spacing={10} key={todo.id}>
          <Flex maxWidth={300} justify="center" alignItems="center">
            <Checkbox colorScheme="green">
              <Text fontSize="md" as="b">
                {todo.name}
              </Text>
            </Checkbox>
          </Flex>
          <Flex maxWidth={150} justify="center" alignItems="center">
            {todo.isDone ? (
              <Tag size="md" colorScheme="green">
                <TagLabel>Done</TagLabel>
              </Tag>
            ) : (
              <Tag size="md" colorScheme="yellow">
                <TagLabel>In Progress</TagLabel>
              </Tag>
            )}
          </Flex>
          <Flex maxWidth={70} justify="center" alignItems="center">
            <IconButton
              aria-label="delete"
              colorScheme="red"
              icon={<DeleteIcon />}
              onClick={(e: any) => {
                console.log("Deleting todo");
              }}
            />
          </Flex>
          <Flex maxWidth={70} justify="center" alignItems="center">
            <IconButton
              aria-label="edit"
              colorScheme="yellow"
              icon={<EditIcon />}
              onClick={(e: any) => {
                console.log("Update todo");
              }}
            />
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
}

function createToDo() {}

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: uuidv4(),
      name: "Buy 1 KG potatoes",
      isDone: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Buy 1 KG tomatoes",
      isDone: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Buy 1 KG cocumber",
      isDone: false,
      createdAt: new Date().toISOString(),
    },
  ]);
  //
  return (
    <Box>
      <Flex justify="center" mt={30} mx={30}>
        <Heading as="h3">To-Do List</Heading>
      </Flex>
      <Flex justify="center" mx={30} mb={20}>
        <Text fontSize="xl" textColor="grey" textAlign="center">
          Manage your tasks efficiently
        </Text>
      </Flex>
      <Flex justify="center">
        <Divider />
      </Flex>
      <Flex justify="center" mx={30} mt={10}>
        {/* <AddToDo /> */}
      </Flex>
      <Flex justify="center" mx={30} mt={10}>
        <Card>
          {/* <CardBody><ToDoList /></CardBody> */}
          <CardBody>
            <List spacing={3}>
              {todos.length > 0
                ? todos.map((todo: Todo, index: number) => {
                    return (
                      <ListItem key={index}>
                        <ToDoContainer todo={todo} index={index} key={index} />
                      </ListItem>
                    );
                  })
                : null}
            </List>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
