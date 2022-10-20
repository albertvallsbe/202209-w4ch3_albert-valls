interface KeyProps {
  text: number | string;
  action: (value: number | string) => void;
}

const Key = ({ text, action }: KeyProps): JSX.Element => {
  return (
    <button
      className={`key${typeof text === "string" ? " big" : ""}`}
      onClick={(event) => {
        event.preventDefault();
        action(text);
      }}
    >
      {text}
    </button>
  );
};

export default Key;
