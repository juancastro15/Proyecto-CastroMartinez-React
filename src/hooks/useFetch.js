import { useEffect, useState } from "react";

export const useFetch = (endpoint, valorInicial) => {
  const [data, setData] = useState(valorInicial);

  useEffect(() => {
    let getData = fetch(endpoint);
    getData.then((res) => res.json()).then((res) => setData(res));
  }, [endpoint]);

  return data;
};
