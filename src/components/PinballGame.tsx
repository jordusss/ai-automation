import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, World, Bodies, Body, Events, Runner } from 'matter-js';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const PinballGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const ballRef = useRef<Matter.Body | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    if (runnerRef.current && engineRef.current) {
      Runner.run(runnerRef.current, engineRef.current);
    }
  };

  const pauseGame = () => {
    setIsPlaying(false);
    if (runnerRef.current) {
      Runner.stop(runnerRef.current);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup engine
    const engine = Engine.create();
    engineRef.current = engine;
    runnerRef.current = Runner.create();

    // Setup renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 400,
        height: 600,
        wireframes: false,
        background: '#1A1F2C',
      },
    });

    // Create boundaries
    const walls = [
      Bodies.rectangle(200, 0, 400, 20, { isStatic: true }), // top
      Bodies.rectangle(200, 600, 400, 20, { isStatic: true }), // bottom
      Bodies.rectangle(0, 300, 20, 600, { isStatic: true }), // left
      Bodies.rectangle(400, 300, 20, 600, { isStatic: true }), // right
    ];

    walls.forEach(wall => {
      Body.setRender(wall, {
        fillStyle: '#8B5CF6',
        strokeStyle: '#D946EF',
        lineWidth: 2,
      });
    });

    // Create ball
    const ball = Bodies.circle(200, 100, 10, {
      restitution: 0.9,
      render: {
        fillStyle: '#0EA5E9',
        strokeStyle: '#1EAEDB',
        lineWidth: 2,
      },
    });
    ballRef.current = ball;

    // Create bumpers
    const bumpers = [
      Bodies.circle(100, 300, 25, { isStatic: true }),
      Bodies.circle(300, 300, 25, { isStatic: true }),
      Bodies.circle(200, 200, 25, { isStatic: true }),
    ];

    bumpers.forEach(bumper => {
      Body.setRender(bumper, {
        fillStyle: '#F97316',
        strokeStyle: '#D946EF',
        lineWidth: 2,
      });
    });

    // Add all bodies to the world
    World.add(engine.world, [...walls, ball, ...bumpers]);

    // Handle collisions for scoring
    Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;
        
        // Check if ball hits a bumper
        if (bumpers.includes(bodyA) || bumpers.includes(bodyB)) {
          setScore(prevScore => prevScore + 100);
        }
      });
    });

    // Start render
    Render.run(render);

    return () => {
      // Cleanup
      Render.stop(render);
      Runner.stop(runnerRef.current!);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-4 p-4"
    >
      <div className="flex gap-4 mb-4">
        <Button
          onClick={isPlaying ? pauseGame : startGame}
          variant="outline"
          className="neon-border"
        >
          {isPlaying ? 'Pause' : 'Start'}
        </Button>
        <div className="glass-card px-4 py-2 rounded-md">
          Score: {score}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="border border-primary/20 rounded-lg"
        width="400"
        height="600"
      />
    </motion.div>
  );
};

export default PinballGame;