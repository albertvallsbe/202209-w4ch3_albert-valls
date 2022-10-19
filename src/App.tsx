import "./App.css";
import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  return (
    <>
      <div className="container">
        <Info />
        <Keyboard />
        <div className="actions">
          <Actions />
          <Display />
          {/* <!-- El botón de llamar debe tener la clase "active" cuando -->
        <!-- el número de teléfono tiene 9 cifras -->
        <!-- Sólo se tiene que ver un botón u otro --> */}
        </div>
      </div>
    </>
  );
};

export default App;
