"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Text,
  Card,
  CardBody,
  Tag,
  TagLabel,
  Flex,
  IconButton,
  HStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Todo } from "../pages/api/todo/list";
// import { update_to_do, delete_to_do } from "./todo.controller";
import { baseUrl } from "./todo.controller";

export async function update_to_do(id:any, isDone: any, refresh: any) {
  await fetch(`${baseUrl}/api/todo/update`, {
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

export default function ToDoContainer({ todo }: Todo | any) {
  const router = useRouter();
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
                delete_to_do(todo.id, router.refresh);
              }}
            />
          </Flex>
          <Flex maxWidth={70} justify="center" alignItems="center">
            <IconButton
              aria-label="edit"
              colorScheme="yellow"
              icon={<EditIcon />}
              onClick={(e: any) => {
                update_to_do(todo.id, e.target.value, router.refresh);
              }}
            />
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
}
