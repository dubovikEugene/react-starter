import React, { useEffect, useState } from "react";
import axios from "axios";

interface IError {
  code: string;
  config: any;
  message: string;
  name: string;
  request: any;
  response: any;
  stack: any;
}

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<IError>();

  useEffect(() => {
    axios
      .get<T>(`https://api.workstmt.com/!yauheni/${url}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
