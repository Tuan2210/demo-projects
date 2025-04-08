import { useEffect, useRef } from "react";

// page-scroll
const usePageScroll = () => {
  const stars1Ref = useRef(null);
  const stars2Ref = useRef(null);
  const moonRef = useRef(null);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);
  const bird3Ref = useRef(null);

  // christmas-noel
  const santaRef = useRef(null);

  // 30/4 - 1/5
  const eagle1Ref = useRef(null);
  const eagle2Ref = useRef(null);
  const fighterFalconRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const valueY = window.scrollY;
      const scrollAble = pageHeight - window.innerHeight;

      if (valueY < scrollAble) {
        // Update styles using refs
        if (stars1Ref.current)
          stars1Ref.current.style.left = `${-(-50 + valueY * 0.1)}%`;

        if (stars2Ref.current)
          stars2Ref.current.style.left = `${-(50 + valueY * 0.1)}%`;

        if (moonRef.current) moonRef.current.style.top = `${valueY + 2}px`;

        if (bird1Ref.current) {
          bird1Ref.current.style.top = `${45 - valueY * 0.3}%`;
          bird1Ref.current.style.left = `${20 - valueY * 0.2}%`;
        }
        if (bird2Ref.current) {
          bird2Ref.current.style.top = `${45 - valueY * 0.1}%`;
          bird2Ref.current.style.left = `${65 - valueY * -0.1}%`;
        }
        if (bird3Ref.current) {
          bird3Ref.current.style.top = `${50 - valueY * 0.1}%`;
          bird3Ref.current.style.left = `${62 - valueY * -0.1}%`;
        }

        if (santaRef.current) {
          santaRef.current.style.top = `${55 - valueY * 0.2}%`;
          santaRef.current.style.left = `${-20 - valueY * -0.3}%`;
        }

        if (eagle1Ref.current && eagle2Ref.current) {
          eagle1Ref.current.style.top = `${-5 - valueY * 0.3}%`;
          eagle1Ref.current.style.left = `${2 + valueY * 0.5}%`;

          eagle2Ref.current.style.top = `${-valueY * 0.3}%`;
          eagle2Ref.current.style.left = `${valueY * 0.5}%`;
        }

        if (fighterFalconRef.current) {
          fighterFalconRef.current.style.top = `${25 - valueY * 0.3}%`;
          fighterFalconRef.current.style.left = `${70 - valueY * 0.4}%`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    stars1Ref,
    stars2Ref,
    moonRef,
    bird1Ref,
    bird2Ref,
    bird3Ref,
    santaRef,
    eagle1Ref,
    eagle2Ref,
    fighterFalconRef,
  };
};

// click menu auto scroll
const useScrollClick = (item) => {
  switch (item) {
    case "Home":
      window.scrollTo(0, 0);
      break;
    default:
      break;
  }
  const sectionScroll = document.getElementById(item.toLowerCase());
  if (sectionScroll) {
    const rect = sectionScroll.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY,
      behavior: "smooth",
    });
  }
};

export { usePageScroll, useScrollClick };
