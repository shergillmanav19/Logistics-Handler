import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export default function EditEntry() {
  const { id, name, order } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const nameRef = useRef("");
  const orderNumberRef = useRef();

  function handleDelete() {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        if (res.data == "Success") {
          navigate("/");
        }
      })
      .catch((e) => setError("An error occured"));
  }
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="lg"
        flexDirection="column"
        marginTop="50px"
      >
        {error}
        <form id="logistics-form-update">
          <FormControl w="md" bg="blue.200" borderRadius="10px" padding="25px">
            <FormLabel htmlFor="name"> Customer name</FormLabel>
            <Input
              id="name"
              type="name"
              marginBottom="4px"
              ref={nameRef}
              placeholder={name}
            />
            <FormLabel htmlFor="ordernumber">Order number</FormLabel>
            <Input
              id="ordernumber"
              type="number"
              marginBottom="4px"
              ref={orderNumberRef}
              placeholder={order}
            />
            <Button mt={4} colorScheme="teal" type="submit">
              Update
            </Button>
            <Button mt={4} colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </FormControl>
        </form>
        <Link
          to="/"
          style={{
            color: "blue",
            textDecoration: "underline",
            marginTop: "15px",
          }}
        >
          Back
        </Link>
      </Flex>
    </div>
  );
}
