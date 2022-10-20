import Key from "../Key/Key";

interface KeyboardProps {
  action: (value: number | string) => void;
}

const Keyboard = ({ action }: KeyboardProps): JSX.Element => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  return (
    <ol className="keyboard">
      {values.map((value, key) => (
        <li key={key}>
          <Key action={action} text={value} />
        </li>
      ))}
    </ol>
  );
};

export default Keyboard;
