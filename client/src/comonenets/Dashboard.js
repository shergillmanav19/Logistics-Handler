import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import LogisticEntries from "./LogisticEntries";
function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const request = () =>
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/orders`)
        .then((res) => setData(res.data))
        .catch((err) => setError(err));

    request();
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="100px"
      w="100%"
    >
      {error}
      <Text fontSize="5xl"> Logistics Data</Text>
      <LogisticEntries data={data} />
      <Link
        to="/form"
        style={{
          color: "blue",
          textDecoration: "underline",
          marginTop: "15px",
        }}
      >
        Add more entries
      </Link>
    </Flex>
  );
}

export default Dashboard;
