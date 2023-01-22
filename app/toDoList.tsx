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
import { AddIcon, DeleteIcon } from "@chakra-ui/icons"; 
// API Handlers.
import { getToDos } from "./todo";

export default async function toDoList() {
  let todos = await getToDos();
  return (
    <List spacing={3}>
      <ListItem>
        <Card>
            <CardBody>
                <HStack spacing={10}>
                    <Box>
                        <Text fontSize="md" as="p">Get grocery from market</Text>
                    </Box>
                    <Box>
                    </Box>
                </HStack>
            </CardBody>
        </Card>
      </ListItem>
    </List>
  );
}
