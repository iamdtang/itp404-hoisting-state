export default function Textarea(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        rows="10"
        cols="30"
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      />
    </div>
  );
}
