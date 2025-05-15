import React, { useRef, useEffect } from "react";

const BackgroundParticles = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Update canvas size on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      Debug: console.log(
        `Mouse Position: (${mouse.current.x}, ${mouse.current.y})`
      );
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
    }

    const particlesArray = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      particlesArray.push(new Particle());
    }

    const maxDistance = 120;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw lines between particles if close
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          let dx = particlesArray[i].x - particlesArray[j].x;
          let dy = particlesArray[i].y - particlesArray[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw lines between mouse and particles if close
      if (mouse.current.x !== null && mouse.current.y !== null) {
        Debug: console.log(
          `Drawing lines from mouse to particles at (${mouse.current.x}, ${mouse.current.y})`
        );
        particlesArray.forEach((particle) => {
          let dx = particle.x - mouse.current.x;
          let dy = particle.y - mouse.current.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        });
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#000",
      }}
    />
  );
};

export default BackgroundParticles;
