import React, { useEffect, useState, useRef } from "react";

export default function useVisitCount() {
  const [count, setCount] = useState(0);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      const storedCount = parseInt(sessionStorage.getItem("pageVisits")) || 0;

      const initialCount = Number(storedCount) || 0;
      setCount(initialCount + 1);
      sessionStorage.setItem("pageVisits", initialCount + 1);

      fetch("/api/visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visitCount: initialCount + 1 }),
      });

      hasIncremented.current = true;
    }
  }, []);

  return count;
}
