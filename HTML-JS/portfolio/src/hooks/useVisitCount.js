import React, { useEffect, useState } from "react";
import { getPageVisit } from "@services/apiRequests";
import { addPageVisit } from "@services/apiRequests";

export default function useVisitCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisit = async () => {
      const visit = await getPageVisit();

      if (!visit || visit === 0) return;
      else await addPageVisit({ pageVisit: visit + 1 });

      setCount(await getPageVisit());
    };

    fetchVisit();
  }, []);

  return count;
}
