import React, { useEffect, useState, useRef } from "react";

export default function useVisitCount() {
  const [count, setCount] = useState(0);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      const storedCount = sessionStorage.getItem("pageVisits");

      const initialCount = Number(storedCount) || 0;
      setCount(initialCount + 1);
      sessionStorage.setItem("pageVisits", initialCount + 1);

      hasIncremented.current = true;
    }
  }, []);

  return count;
}
