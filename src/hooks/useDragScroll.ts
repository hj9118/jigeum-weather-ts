import { useRef, useEffect } from 'react';

const useDragScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!scrollContainerRef.current) return;
      
      // Check if it's a touch event or mouse event
      const clientX = e instanceof TouchEvent ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const startX = clientX - scrollContainerRef.current.offsetLeft;
      const scrollLeft = scrollContainerRef.current.scrollLeft;

      const handleMoveInner = (moveEvent: MouseEvent | TouchEvent) => {
        if (!scrollContainerRef.current) return;
        const x = moveEvent instanceof TouchEvent ? moveEvent.touches[0].clientX : (moveEvent as MouseEvent).clientX;
        const walk = (x - startX) * 1;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      };

      const handleUp = () => {
        window.removeEventListener('mousemove', handleMoveInner);
        window.removeEventListener('mouseup', handleUp);
        window.removeEventListener('touchmove', handleMoveInner);
        window.removeEventListener('touchend', handleUp);
      };

      window.addEventListener('mousemove', handleMoveInner);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleMoveInner);
      window.addEventListener('touchend', handleUp);
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('mousedown', handleMove);
      scrollContainerRef.current.addEventListener('touchstart', handleMove);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('mousedown', handleMove);
        scrollContainerRef.current.removeEventListener('touchstart', handleMove);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMove);
    };
  }, []);

  return {
    scrollContainerRef,
  };
};

export default useDragScroll;
