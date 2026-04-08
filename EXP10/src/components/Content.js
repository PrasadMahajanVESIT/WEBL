import React from 'react';

function Content() {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design"
  ];

  return (
    <section className="content" id="services">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Content;