import React from "react";
import "../styles/main.scss";

export function Default({ children }) {
  return (
    <section className="hero">
      <div className="hero-body">{children}</div>
    </section>
  );
}
