import { useState } from "react";

function BaseForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("message:", message);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        value={fullName}
        onChange={handleName}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="textarea"
        name="message"
        value={message}
        onChange={handleMessage}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BaseForm;
