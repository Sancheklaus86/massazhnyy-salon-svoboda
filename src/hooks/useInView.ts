import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(options?: UseInViewOptions) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const { once = false, threshold = 0.1, rootMargin = '0px', ...rest } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin, ...rest }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold, rootMargin, rest]);

  return { ref, isInView };
}
