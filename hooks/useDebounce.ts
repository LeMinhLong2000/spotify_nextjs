import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    // trì hoãn việc cập nhật giá trị (value) cho đến khi người dùng dừng nhập trong một khoảng thời gian (delay)
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;