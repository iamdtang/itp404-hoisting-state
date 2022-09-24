import { useState } from "react";

export default function Textarea(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        rows="10"
        cols="30"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
