import { useState, useEffect } from 'react';

type useDebounceT = {
  value: any;
  delay?: number;
};

export const useDebounce = ({ value, delay = 750 }: useDebounceT) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return { debouncedValue, isDebouncing };
};
