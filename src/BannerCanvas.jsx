import React, { useEffect, useRef } from "react";

const BannerCanvas = ({ darkMode }) => {
  const bannerRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const banner = bannerRef.current;
    const canvas = canvasRef.current;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];
    const dots = [];

    const createDots = () => {
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)],
        });
      }
    };

    createDots();

    // Draw dots on the canvas
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawDots();

    // Mouse move event listener
    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top,
      };

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    // Mouse out event listener
    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    // Resize event listener
    const handleResize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      dots.length = 0;
      createDots();
      drawDots();
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="absolute top-0 left-0  w-screen h-screen  hidden md:block z-10 opacity-50"
      >
        <canvas
          ref={canvasRef}
          className={`w-full h-full absolute top-0 left-0 z-10`}
        />
      </div>
    </>
  );
};

export default BannerCanvas;
