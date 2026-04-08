import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Welcome to My Website</h1>
      <p>This is a simple one-page React website.</p>
      <button onClick={() => alert('Button Clicked!')}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;