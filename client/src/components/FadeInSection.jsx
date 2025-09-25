import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children, delayClass }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return; 

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element); 
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? `animate-${delayClass}` : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
