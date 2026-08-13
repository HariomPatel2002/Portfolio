import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: '#8B5CF6' },
          opacity: { value: 0.3 },
          size: { value: 2 },
          links: {
            enable: true,
            color: '#8B5CF6',
            opacity: 0.1,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'out' }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            onClick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        detectRetina: true
      }}
    />
  );
};