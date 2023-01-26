"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, FormControl, Input, IconButton, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
// import { add_to_do } from "./todo.controller";

export async function add_to_do(name: string, refresh: any) {
  await axios.post(`http://localhost:3001/api/todo/add`);
  refresh();
}

export default function AddToDo() {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <HStack>
      <Box maxWidth="100%">
        <FormControl w="md" maxWidth="100%" isRequired>
          <Input placeholder="Enter Your Task" />
        </FormControl>
      </Box>
      <Box>
        <IconButton
          aria-label="Add Task"
          icon={<AddIcon />}
          colorScheme="green"
          onClick={async () => {
            await add_to_do(name, router.refresh);
            console.log("Adding to do")
            setName("");
          }}
        />
      </Box>
    </HStack>
  );
}
