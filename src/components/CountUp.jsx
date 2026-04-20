import { useState, useEffect, useRef } from 'react';

export default function CountUp({ to, duration = 1800, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(rafRef.current);

        if (entry.isIntersecting) {
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) rafRef.current = requestAnimationFrame(animate);
          };

          rafRef.current = requestAnimationFrame(animate);
        } else {
          // Reset so next scroll-in starts from 0
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration]);

  return (
    <span ref={elRef}>
      {count}{suffix}
    </span>
  );
}
