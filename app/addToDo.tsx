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
  FormControl,
  FormLabel,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function AddToDo() {
  return (
    <HStack>
      <Box maxWidth="100%">
        <FormControl maxWidth="100%" isRequired>
          <Input placeholder="Enter Your Task" />
        </FormControl>
      </Box>
      <Box>
        <IconButton
          aria-label="Add Task"
          icon={<AddIcon />}
          colorScheme="green"
        />
      </Box>
    </HStack>
  );
}
