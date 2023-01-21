"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
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
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Flex justify="center" mt={30} mx={30}>
        <Heading as="h3">To-Do List</Heading>
      </Flex>
      <Flex justify="center" mx={30} mb={20}>
        <Text fontSize="2xl">In love with React & Next</Text>
      </Flex>
      <Flex justify="center">
        <Divider />
      </Flex>
      <Flex justify="center" mx={30} mt={10}>
        
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
