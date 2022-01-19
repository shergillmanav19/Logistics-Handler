import {
  Table,
  Th,
  Thead,
  Td,
  Tbody,
  Tr,
  Button,
  Box,
  Select,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function LogisticEntries({ data }) {
  const navigate = useNavigate();
  const [filterName, setFilterName] = useState("");
  const [filterOrderNum, setFilterOrderNum] = useState("");

  function handleClick(_id, customerName, orderNumber, orderDescription) {
    navigate(`/edit/${_id}/${customerName}/${orderNumber}/${orderDescription}`);
  }
  function handleFilterNameChange(e) {
    e.preventDefault();
    setFilterName(e.target.value);
  }
  function handleFilterOrderNumChange(e) {
    e.preventDefault();
    setFilterOrderNum(e.target.value);
  }
  return (
    <Box w="100%" overflow="hidden">
      <Box
        bg="lightblue"
        padding="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text margin="5px">Filter by name</Text>
        <Input margin="5px" onChange={handleFilterNameChange} w="10%" />
        <Text margin="5px">Filter by order number</Text>
        <Input margin="5px" onChange={handleFilterOrderNumChange} w="10%" />
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Tr></Tr>
            <Th>Customer Name</Th>
            <Th>Order Number</Th>
            <Th>Order Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data
            .filter((entry) => entry.customerName.includes(filterName))
            .filter((entry) =>
              entry.orderNumber.toString().includes(filterOrderNum)
            )
            .map((entry, i) => {
              return (
                <Tr>
                  <Tr>
                    <Button
                      onClick={() =>
                        handleClick(
                          entry._id,
                          entry.customerName,
                          entry.orderNumber,
                          entry.orderDescription
                        )
                      }
                      leftIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  </Tr>
                  <Td>{entry.customerName}</Td>
                  <Td>{entry.orderNumber}</Td>
                  <Td>{entry.orderDescription}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default LogisticEntries;
