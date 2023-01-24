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
import { getToDos } from "./todo";
import { Todo } from "../pages/api/todo/list";

export default async function toDoList() {
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
        <Card>
          <CardBody>
            {todos.map((item) => {
              return (
                <HStack spacing={10} key={item.id}>
                  <Box>
                    <Text fontSize="md" as="p">
                      {item.name}
                    </Text>
                  </Box>
                  <Box>
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
                  <Box>
                    <DeleteIcon />
                  </Box>
                  <Box>
                    <EditIcon />
                  </Box>
                </HStack>
              );
            })}
          </CardBody>
        </Card>
      </ListItem>
    </List>
  );
}
