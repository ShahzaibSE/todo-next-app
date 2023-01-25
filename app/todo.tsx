"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
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
import { Todo } from "../pages/api/todo/list";

export default function ToDoContainer({todo}: Todo | any) {
  const router = useRouter();
  return (
    <Card key={todo.id} mt={5}>
      <CardBody>
        <HStack spacing={10} key={todo.id}>
          <Flex maxWidth={200} justify="center" alignItems="center">
            <Text fontSize="md" as="b">
              {todo.name}
            </Text>
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
            />
          </Flex>
          <Flex maxWidth={70} justify="center" alignItems="center">
            <IconButton
              aria-label="edit"
              colorScheme="yellow"
              icon={<EditIcon />}
            />
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
}
