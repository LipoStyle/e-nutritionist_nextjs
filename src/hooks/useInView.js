import { useEffect, useState } from 'react';

export const useInView = (ref, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log('Intersection entry:', entry)
      setIsInView(entry.isIntersecting)
    },
    { threshold }
  )

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, threshold]);

  return isInView;
};
