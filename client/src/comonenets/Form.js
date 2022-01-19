import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Form() {
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  //TODO: ADD A TOAST
  const nameRef = useRef("");
  const orderNumberRef = useRef();
  const descriptionRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/create-order`, {
        customerName: nameRef.current.value,
        orderNumber: orderNumberRef.current.value,
        orderDescription: descriptionRef.current.value,
      })
      .then((res) => {
        if (res.data == "Success") {
          setStatus("Complete");
        } else {
          setStatus("Incomplete");
        }
      })
      .catch((err) => setStatus("An error occured! Not successful entry"));

    let form = document.getElementById("logistics-form");
    form.reset();
    setLoading(false);
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="lg"
      flexDirection="column"
      marginTop="100px"
    >
      <form id="logistics-form" onSubmit={handleSubmit}>
        <FormControl w="md" bg="blue.200" borderRadius="10px" padding="25px">
          <FormLabel htmlFor="name"> Customer name</FormLabel>
          <Input id="name" type="name" marginBottom="4px" ref={nameRef} />
          <FormLabel htmlFor="ordernumber">Order number</FormLabel>
          <Input
            id="ordernumber"
            type="number"
            marginBottom="4px"
            ref={orderNumberRef}
          />
          <FormLabel htmlFor="description">Order description</FormLabel>
          <Textarea
            id="description"
            type="description"
            ref={descriptionRef}
            maxLength="200"
          />
          <FormHelperText>We'll never share your information.</FormHelperText>
          <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
            Submit
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
        View My Entries
      </Link>
    </Flex>
  );
}
