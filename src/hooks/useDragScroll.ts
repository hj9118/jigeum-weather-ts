import { useRef, useEffect } from 'react';

const useDragScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollContainerRef.current) return;
      const startX = e.pageX - scrollContainerRef.current.offsetLeft;
      const scrollLeft = scrollContainerRef.current.scrollLeft;

      const handleMouseMoveInner = (moveEvent: MouseEvent) => {
        const x = moveEvent.pageX - scrollContainerRef.current!.offsetLeft;
        const walk = (x - startX) * 1;
        scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMoveInner);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMoveInner);
      window.addEventListener('mouseup', handleMouseUp);
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('mousedown', handleMouseMove);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('mousedown', handleMouseMove);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseMove);
    };
  }, []);

  return {
    scrollContainerRef,
  };
};

export default useDragScroll;
