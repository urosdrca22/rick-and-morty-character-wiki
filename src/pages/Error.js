import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div>
        <h2>Oops! It's a dead end</h2>
        <Link to="/">Go back home</Link>
      </div>
    </section>
  );
};

export default Error;
