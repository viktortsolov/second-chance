import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => { return res.json() })
      .then(res => {
        setValue(Object.values(res));
        setIsLoading(false);
      })
      .catch(err => {
        throw new Error('Books not fetched!');
      })
  }, [url]);

  return [
    value,
    setValue,
    isLoading
  ];
};

export default useFetch;