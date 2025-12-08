import React from "react";

export default function JSXExamples() {
  const user = {
    firstName: "Abhishek",
    city: "Mathura",
  };

  function greet(name) {
    return "Hello, " + name + "!";
  }

  return (
    <div>
      <h2>JSX Examples</h2>
      <p>{greet(user.firstName)}</p>
      <p>You are from {user.city}</p>
      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}
