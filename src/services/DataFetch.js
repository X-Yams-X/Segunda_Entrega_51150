import { useState, useEffect } from "react";

export const DataFetch = (resource) => {
  const [data, setData] = useState();
  const URL_API = "https://fakestoreapi.com/" + resource;
  const getApiData = async () => {
    const response = await fetch(URL_API).then((response) => response.json());
    setData(response);
  };

  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {response: data};
}
