import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setIsError(true);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetching, isLoading, isError };
};

export default useFetching;
