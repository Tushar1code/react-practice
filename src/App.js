import "./App.css";
import About from './componants/About';
import Navbar from "./componants/navbar";
import Textform from "./componants/text";

function App() {
  return (
    <>
      <Navbar logo="text" title="hello" />
      <div className="container my-3">
        <Textform heading="Enter a text to analyze below" />
        <About/>
      </div>
    </>
  );
}

export default App;
