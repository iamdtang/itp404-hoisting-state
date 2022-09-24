import Textarea from "./Textarea";
import TextInput from "./TextInput";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, email, message);
      }}
    >
      <TextInput
        label="Name"
        id="name"
        value={name}
        onChange={(updatedName) => {
          setName(updatedName);
        }}
      />
      <TextInput
        label="Email"
        id="email"
        value={email}
        onChange={(updatedEmail) => {
          setEmail(updatedEmail);
        }}
      />
      <Textarea
        value={message}
        onChange={(updatedMessage) => {
          setMessage(updatedMessage);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
