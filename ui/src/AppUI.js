import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particleCount = calculateParticleCount();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${255 - Math.random() * 255 / 2}, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    function calculateParticleCount() {
      return Math.floor((canvas.width * canvas.height) / 6000);
    }

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    }

    window.addEventListener('resize', onResize);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h2><a href="https://holasoymalva.com/" target="_blank" rel="noopener noreferrer">YAM-YAM</a></h2>
        <div className="mid-spot"></div>
        <button className="contact-btn">
          <span className="glow"></span>
          <span className="contact-btn-content">Contact Us</span>
        </button>

        <div className="spotlight">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <canvas id="particleCanvas" ref={canvasRef}></canvas>

      <div className="accent-lines">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>Simple Pay</h2>
          <h2>Eclipx</h2>
        </div>
      </div>
      <p className="heroP">The world's best platform, <br />powered by EclipxOS + React.</p>
      <div className="mountains">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hero-spacer"></div>

      <div className="content-section">
        <div className="content-acc">
          <div></div>
          <div></div>
        </div>
        <p className="subt">Revolutionary by design</p>
        <h3 className="title">Harness. Empower.<br />Unmatched Versatility.</h3>
        <p className="subp">At the core lies our revolutionary framework, <br />ensuring adaptability across all application architectures.</p>

        <button className="demo-btn" onClick={() => window.location.href = 'http://localhost:8501/'}>
          <span className="demo-btn-content">See demo</span>
        </button>
      </div>
    </div>
  );
};

export default App;