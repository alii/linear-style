import React from "react";

const About = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Usage</h1>

      <div style={{ textAlign: "left", marginTop: "2rem", margin: "auto" }}>
        <p style={{ marginBottom: "0.75rem" }}>
          In order to add a theme to your Linear app, you must follow this process:
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          <strong>1. Copy the color string</strong>
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          Click on the theme&#39;s respective card; it should automatically copy the theme to your clipboard.
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          <img width="300" src="https://i.ibb.co/PwP5fwN/Screen-Shot-2020-12-08-at-12-24-50.png" />
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          <strong>2. Insert in Linear</strong>
        </p>
        <p>
          On Linear, go to Settings -&gt; Preferences -&gt; Theme and select <em>Custom</em> from the interface options
          swatch.
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          <img width="800" src="https://i.ibb.co/ZV7TFQS/Screen-Shot-2020-12-08-at-12-27-47.png" />
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          Then, paste the theme copied from linear-style into the custom text box input, as such:
        </p>
        <p style={{ marginBottom: "0.75rem" }}>
          <img width="800" src="https://i.ibb.co/mDwC0pX/Screen-Shot-2020-12-08-at-12-29-14.png" />
        </p>
      </div>
    </div>
  );
};

export default About;
