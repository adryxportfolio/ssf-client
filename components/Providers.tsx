'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [clicks, setClicks] = useState<ClickEffect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let y = 0;
      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else if (e instanceof TouchEvent) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }
      
      const newClick = { id: Date.now(), x, y };
      setClicks((prev) => [...prev, newClick]);
      
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <AnimatePresence>
          {clicks.map((click) => (
            <motion.div
              key={click.id}
              initial={{ scale: 0, opacity: 0.8, x: '-50%', y: '-50%' }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-500/20"
              style={{ top: click.y, left: click.x }}
            />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </ThemeProvider>
  );
}
