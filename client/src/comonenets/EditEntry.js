import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEntry() {
  const { id, customerName, orderNumber, orderDescription } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const nameRef = useRef("");
  const orderDescriptionRef = useRef();

  function handleDelete() {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
        }
      })
      .catch((e) => setError("An error occured"));
  }

  function handleUpdate() {
    //check for namerefs and stuff to see if they're equal or not
    const nameToUpdate =
      nameRef.current.value !== "" ? nameRef.current.value : customerName;
    const orderDescriptionToUpdate = orderDescriptionRef.current.value
      ? orderDescriptionRef.current.value
      : orderDescription;
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/update`, {
        id: id,
        customerName: nameToUpdate,
        orderNumber: orderNumber,
        orderDescription: orderDescriptionToUpdate,
      })
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
        } else {
          setError(res.data);
        }
      })
      .catch((e) => setError(JSON.stringify(e)));
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
              placeholder={customerName}
              _placeholder={{ color: "gray.600" }}
            />
            <FormLabel htmlFor="ordernumber">Order number</FormLabel>
            <Input
              id="ordernumber"
              type="number"
              marginBottom="4px"
              placeholder={orderNumber}
              isDisabled={true}
              _placeholder={{ color: "gray.600" }}
            />
            <FormLabel htmlFor="description">Order description</FormLabel>
            <Textarea
              id="description"
              type="description"
              ref={orderDescriptionRef}
              maxLength="200"
              placeholder={orderDescription}
              _placeholder={{ color: "gray.600" }}
            />
            <Button mt={4} colorScheme="teal" onClick={handleUpdate}>
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
