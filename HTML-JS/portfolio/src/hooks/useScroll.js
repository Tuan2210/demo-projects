import { useEffect, useRef } from "react";

export default function useScroll() {
  const stars1Ref = useRef(null);
  const stars2Ref = useRef(null);
  const moonRef = useRef(null);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);
  const bird3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const valueY = window.scrollY;
      const scrollAble = pageHeight - window.innerHeight;

      if (valueY < scrollAble) {
        // Update styles using refs
        if (stars1Ref.current) {
          stars1Ref.current.style.left = `${-(-50 + valueY * 0.1)}%`;
        }
        if (stars2Ref.current) {
          stars2Ref.current.style.left = `${-(50 + valueY * 0.1)}%`;
        }
        if (moonRef.current) {
          moonRef.current.style.top = `${valueY + 2}px`;
        }
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
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { stars1Ref, stars2Ref, moonRef, bird1Ref, bird2Ref, bird3Ref };
}
