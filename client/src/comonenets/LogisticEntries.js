import { Table, Th, Thead, Td, Tbody, Tr, Button, Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function LogisticEntries({ data }) {
  const navigate = useNavigate();

  function handleClick(_id, customerName, orderNumber) {
    navigate(`/edit/${_id}/${customerName}/${orderNumber}`);
  }
  return (
    <Box w="100%" overflow="hidden">
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
          {data.map((entry, i) => {
            return (
              <Tr>
                <Tr>
                  <Button>
                    <EditIcon
                      onClick={() =>
                        handleClick(
                          entry._id,
                          entry.customerName,
                          entry.orderNumber
                        )
                      }
                    />
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
