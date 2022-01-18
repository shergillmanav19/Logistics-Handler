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
  
  console.log("NOT IN UPDATE",nameRef,orderNumberRef);


  function handleDelete() {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
        }
      })
      .catch((e) => setError("An error occured"));
  }

  function handleUpdate(){
    //check for namerefs and stuff to see if they're equal or not
    const nameToUpdate = nameRef.current.value !== "" ? nameRef.current.value : name;
    const orderNumberToUpdate = orderNumberRef.current.value ? orderNumberRef.current.value : order;
    axios
    .put("http://localhost:3000/update",{
      id:id,
      customerName:nameToUpdate,
      orderNumber:orderNumberToUpdate
    })
    .then((res) => {
      if (res.data === "Success") {
        navigate("/");
      }else{
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
