'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTitleProps {
  text: string;
  className?: string;
}

export default function TypedTitle({ text, className = '' }: TypedTitleProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [`${text}`],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      onComplete: (self: Typed) => {
        if (self.cursor) {
          self.cursor.style.display = 'none';
        }
      },
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [text]);

  return <span ref={el} className={className}></span>;
} 