"use client";

import { useEffect, useRef } from "react";

export function MotionCanvas({ inverse = false }: { inverse?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    let raf = 0;
    const render = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      const width = innerWidth;
      const height = innerHeight;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.scale(dpr, dpr);
      }
      context.fillStyle = inverse ? "#f4f4f2" : "#050505";
      context.fillRect(0, 0, width, height);
      const travel = width + 180;
      const x = ((performance.now() * 0.42) % travel) - 90;
      const y = height / 2;
      context.fillStyle = inverse ? "#080808" : "#ffffff";
      context.fillRect(x - 42, y - 42, 84, 84);
      context.fillStyle = inverse ? "#666" : "#8a8a8a";
      context.fillRect(width - x - 30, y - 120, 60, 60);
      context.strokeStyle = inverse ? "#222" : "#ddd";
      context.lineWidth = 2;
      for (let i = 0; i < 9; i++) {
        const px = ((x + i * 160) % travel) - 80;
        context.beginPath();
        context.arc(px, y + 120, 12, 0, Math.PI * 2);
        context.stroke();
      }
      raf = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(raf);
  }, [inverse]);

  return <canvas ref={ref} className="motion-canvas" aria-label="Анімований тест руху" />;
}
