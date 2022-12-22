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
  const [data, setData] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dev-r33891stf69246x.api.raw-labs.com/${url}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFUaERPVGc1TXpkQ1FUbENRVGd6TVRsRU1URTFOVFl3TVRrM1JUTkdRall6TWtNME1qSkZPUSJ9.eyJodHRwczovL3Jhdy1sYWJzLmNvbS9wZXJtaXNzaW9ucyI6W3siZGV2LXIzMzg5MXN0ZjY5MjQ2eCI6eyJjb25zdW1lciI6WyIiXSwicHJvZHVjZXIiOlsiYWRtaW4iXX19XSwiaXNzIjoiaHR0cHM6Ly9yYXcuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYzYTJhYmIxYmI0NTk2ZGQ2ZGU3NzQxOCIsImF1ZCI6WyJodHRwczovL3Jhdy1sYWJzLmNvbS9yYXcvYWRtaW4iLCJodHRwczovL3Jhdy5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcxNjA1MTcxLCJleHAiOjE2NzE2OTE1NzEsImF6cCI6IkdPTFVIM05VM1dtY2R5T2tVekVCNHAwZ2FmN2N2NkhaIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbXX0.x0wv0dvw4tkIpwz5lW_xo1UDCGvNvhRLCXrvYqKYXF3aMvb43p4kHmFh4h5NolJRNo6g7J0VAuRKlGApaV2Rr_88AXF6cYmPFUaVyY7YTCHulRtrYxHFlaMqhL8H_ibbvySeJoN-vTHBMOUu8im8ZGG-jo6fWkPerAd7PbWDTFxbVZYPjwOb7agbdhxMmENbQaQ0e7kUg4BEaqfNEVFZbwy2SnukUgO8EdAHOUr3aspF-WvX9ynNhsi2rNlQ8rdTohJvmEE41AKZMlHWXhcPbJJefXVJm-FX0P0AlmAH87dukdAC68SAdu2Tl1O5_RivrHlJSEFdb1UCCMDG_hJOWw",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
