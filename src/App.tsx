import "./App.css";
import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  const keyboardAction = () => {};

  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboard action={keyboardAction} />
          <div className="actions">
            <Display />
            <Actions />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
