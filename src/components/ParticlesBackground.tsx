'use client';

import { useCallback, useEffect, useState } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isNarrow = window.matchMedia('(max-width: 768px)').matches;
    setEnabled(!reduceMotion && !isNarrow);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        fpsLimit: 30,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        particles: {
          color: { value: '#3B82F6' },
          links: {
            color: '#3B82F6',
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            outModes: { default: 'bounce' },
            speed: 0.5,
          },
          number: {
            density: { enable: true, area: 1000 },
            value: 28,
          },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
