import { useEffect } from "react";
import "./Animation.css";
const Animation = () => {
    useEffect(() => {
      const chars = ["0", "1", ";", "{ }", "( )", "$"];
      const container = document.createElement("div");
      container.className = "animation-container";
      document.body.appendChild(container);
  
      const add = () => {
        const fragment = document.createDocumentFragment();
        const element = document.createElement("span");
        fragment.appendChild(element);
        animate(element);
        container.appendChild(fragment);
      };
  
      const animate = (element) => {
        const character = chars[Math.floor(Math.random() * chars.length)];
        const duration = Math.floor(Math.random() * 15) + 1;
        const offset = Math.floor(Math.random() * (350 - duration * 2)) + 3;
        const size = 10 + (20 - duration);
        element.style.cssText = `transform: translateY(0); right:${offset}vw; font-size:${size}px; animation-duration:${duration}s`;
        element.innerHTML = character;
        element.style.opacity = '1';
  
        window.setTimeout(() => remove(element), duration * 1000);
      };
  
      const remove = (element) => {
        element.style.opacity = '0';
        window.setTimeout(() => {
          element.parentNode.removeChild(element);
        }, 1000); // Ensure enough time for the fade out before removing
      };
  
      const animationLoop = () => {
        add();
        requestAnimationFrame(animationLoop);
      };
  
      animationLoop();
  
      return () => {
        container.parentNode.removeChild(container);
      };
    }, []);
  
    return null;
  };
  
  export default Animation;