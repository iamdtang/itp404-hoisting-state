export default function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      />
    </div>
  );
}
