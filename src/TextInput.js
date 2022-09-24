import { useState } from "react";

export default function TextInput(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
