import React, { useEffect, useRef } from 'react';
import logo from './assets/logo.png';
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
        <h2><a href="https://holasoymalva.com/" target="_blank" rel="noopener noreferrer">Powered by Llama3</a></h2>
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
        <img src={logo} alt="Marvelin.Ai Logo" className="hero-logo" />
        <p>Bienvenido a</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>Nominal.ia</h2>
          <h2>¿Como puedo ayudarte hoy?</h2>
        </div>
      </div>
      <p className="heroP">The world's best financial assistance, <br />powered by llama3 + React.js + Messenger Platform</p>
      <div className="button-container">
      <button className="demo-btn" onClick={() => window.location.href = 'http://localhost:8501/'}>
          <span className="demo-btn-content">Chat</span>
      </button>
      <button className="demo-btn" onClick={() => window.location.href = 'http://localhost:8501/'}>
        <span className="demo-btn-content">Comenzar</span>
      </button>
          {/* <Link to="/questions/invertir">
            <button className="demo-btn">
              <span className="demo-btn-content">Invertir</span>
            </button>
          </Link>
          <Link to="/questions/ahorrar">
            <button className="demo-btn">
              <span className="demo-btn-content">Ahorrar</span>
            </button>
          </Link> */}
      </div>
      <div className="mountains">
      </div>
    </div>
  );
};

export default App;