"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Text, Divider, Heading, Box, Flex, Card, CardBody } from "@chakra-ui/react";
// Components.
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  //
  return (
    <Box>
      <Flex justify="center" mt={30} mx={30}>
        <Heading as="h3">To-Do List</Heading>
      </Flex>
      <Flex justify="center" mx={30} mb={20}>
        <Text fontSize="2xl" textAlign="center">
          Manage your tasks efficiently
        </Text>
      </Flex>
      <Flex justify="center">
        <Divider />
      </Flex>
      <Flex justify="center" mx={30} mt={10}>
        <AddToDo />
      </Flex>
      <Flex justify="center" mx={30} mt={10}>
        <Card>
          <CardBody>
            <ToDoList />
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

// export default function Home() {
//   return (
//     <SimpleGrid columns={2} spacing={20}>
//         <Card m={50}>
//           <CardHeader>
//             <Heading as="h2" size="xl">
//               Tasks
//             </Heading>
//           </CardHeader>
//           <Divider orientation="horizontal" />
//           <CardBody>
//             <TableContainer>
//               <Table variant="simple">
//                 <Thead>
//                   <Tr>
//                     <Th>Name</Th>
//                     <Th>Date</Th>
//                     <Th>Status</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                 </Tbody>
//               </Table>
//             </TableContainer>
//           </CardBody>
//         </Card>
//         <Card m={50}>
//           <CardHeader>
//             <Heading as="h2" size="xl">
//               Tasks
//             </Heading>
//           </CardHeader>
//           <Divider orientation="horizontal" />
//           <CardBody>
//             <TableContainer>
//               <Table variant="simple">
//                 <Thead>
//                   <Tr>
//                     <Th>Name</Th>
//                     <Th>Date</Th>
//                     <Th>Status</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                   <Tr>
//                     <Td>yards</Td>
//                     <Td>metres (m)</Td>
//                     <Td>
//                       <Tag
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="yellow"
//                       >
//                         <TagLabel>In Progress</TagLabel>
//                       </Tag>
//                     </Td>
//                   </Tr>
//                 </Tbody>
//               </Table>
//             </TableContainer>
//           </CardBody>
//         </Card>
//     </SimpleGrid>
//   );
// }
