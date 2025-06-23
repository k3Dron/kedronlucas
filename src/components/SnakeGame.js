// src/components/SnakeGame.js
"use client";

import React, { useEffect, useRef, useState } from "react";

const CELL_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState("ArrowRight");
  const [coin, setCoin] = useState(null);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const gameRef = useRef(null);

  function generateRandomCoin() {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    const cols = Math.floor(window.innerWidth / CELL_SIZE);
    const rows = Math.floor(window.innerHeight / CELL_SIZE);
    return {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    };
  }

  useEffect(() => {
    setCoin(generateRandomCoin());
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (DIRECTIONS[e.key]) {
        setDirection(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(() => {
      if (!isRunning) return;

      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = {
          x: (head.x + DIRECTIONS[direction].x + Math.floor(window.innerWidth / CELL_SIZE)) % Math.floor(window.innerWidth / CELL_SIZE),
          y: (head.y + DIRECTIONS[direction].y + Math.floor(window.innerHeight / CELL_SIZE)) % Math.floor(window.innerHeight / CELL_SIZE),
        };

        // Check self-collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          resetGame();
          return INITIAL_SNAKE;
        }

        let newSnake = [newHead, ...prevSnake];
        if (newHead.x === coin.x && newHead.y === coin.y) {
          setScore((s) => s + 1);
          setCoin(generateRandomCoin());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [direction, coin, isRunning]);

  function resetGame() {
    setScore(0);
    setSnake(INITIAL_SNAKE);
    setCoin(generateRandomCoin());
    setDirection("ArrowRight");
    setIsRunning(false);
  }

  function toggleGame() {
    setIsRunning(!isRunning);
  }

  return (
    <>
      <div
        ref={gameRef}
        className="fixed top-0 left-0 w-full h-full z-40 pointer-events-none"
      >
        {snake.map((segment, index) => {
          const isHead = index === 0;
          const triangleStyle = {
            width: 0,
            height: 0,
            borderLeft: `${CELL_SIZE / 2}px solid transparent`,
            borderRight: `${CELL_SIZE / 2}px solid transparent`,
            position: 'absolute',
            top: segment.y * CELL_SIZE,
            left: segment.x * CELL_SIZE,
            zIndex: 10,
          };

          const rotation = {
            ArrowUp: "rotate(0deg)",
            ArrowRight: "rotate(90deg)",
            ArrowDown: "rotate(180deg)",
            ArrowLeft: "rotate(270deg)",
          }[direction];

          return isHead ? (
            <div
              key={index}
              className="absolute"
              style={{
                ...triangleStyle,
                borderBottom: `${CELL_SIZE}px solid #16a34a`,
                transform: rotation,
              }}
            />
          ) : (
            <div
              key={index}
              className={
                index % 2 === 0 ? "absolute bg-green-600" : "absolute bg-green-500"
              }
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
              }}
            />
          );
        })}
        {coin && (
          <div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: coin.x * CELL_SIZE,
              top: coin.y * CELL_SIZE,
            }}
          />
        )}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur text-white font-bold px-6 py-3 rounded-full shadow flex gap-4 items-center">
        <span>Score: {score}</span>
        <button
          onClick={toggleGame}
          className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </>
  );
}
