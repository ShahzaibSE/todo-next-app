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
      <ListItem>
        {todos.map((item) => {
          return (
            <Card key={item.id} mt={5}>
              <CardBody>
                <HStack spacing={10} key={item.id}>
                  <Box maxWidth={200}>
                    <Text fontSize="md" as="p">
                      {item.name}
                    </Text>
                  </Box>
                  <Box maxWidth={150}>
                    {item.isDone ? (
                      <Tag size="md" colorScheme="green">
                        <TagLabel>Done</TagLabel>
                      </Tag>
                    ) : (
                      <Tag size="md" colorScheme="yellow">
                        <TagLabel>In Progress</TagLabel>
                      </Tag>
                    )}
                  </Box>
                  <Box maxWidth={70}>
                    <DeleteIcon />
                  </Box>
                  <Box maxWidth={70}>
                    <EditIcon />
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          );
        })}
      </ListItem>
    </List>
  );
}
