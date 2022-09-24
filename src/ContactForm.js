import Textarea from "./Textarea";
import TextInput from "./TextInput";

export default function ContactForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextInput label="Name" id="name" />
      <TextInput label="Email" id="email" />
      <Textarea />
      <button type="submit">Submit</button>
    </form>
  );
}
