import React from "react";
import Particles from "react-tsparticles";
import "./BackgroundParticles.css";

const BackgroundParticles = () => {
  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#4caf50",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        random: false,
      },
      size: {
        value: 3,
        random: { enable: true, minimumValue: 1 },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#4caf50",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.7,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles options={particlesOptions} />;
};

export default BackgroundParticles;
