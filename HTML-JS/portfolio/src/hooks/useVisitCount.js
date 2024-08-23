import React, { useEffect, useState } from "react";
import { getPageVisit } from "@services/apiRequests";
import { addPageVisit } from "@services/apiRequests";

export default function useVisitCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchAndUpdateVisit = async () => {
      try {
        const visit = await getPageVisit();

        if (!visit || visit === 0) return;

        const updatedVisit = visit + 1;
        await addPageVisit({ pageVisit: updatedVisit });

        setCount(updatedVisit);
      } catch (error) {
        console.error("Failed to fetch or update page-visit", error);
      }
    };

    fetchAndUpdateVisit();
  }, []);

  return count;
}
