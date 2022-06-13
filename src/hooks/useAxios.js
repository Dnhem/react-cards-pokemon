import axios from "axios";
import { useState } from "react";
import uuid from "uuid";

const useAxios = baseUrl => {
  const [ response, setResponse ] = useState([]);
  //TODO: fetchData pokemon ID (rest of url)
  console.log(baseUrl); 
  async function fetchData(restOfUrl = "") {
    const res = await axios.get(`${baseUrl}${restOfUrl}`);
    console.log(restOfUrl);
    setResponse(response => [ ...response, { ...res.data, id: uuid() } ]);
  }
  return [ response, fetchData ];
};

export default useAxios;
