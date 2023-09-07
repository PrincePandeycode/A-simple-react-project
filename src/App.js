import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title = "Textutils" Home = "Home"/>
      {/* <Navbar/>   */}
      
      <Textform heading = "enter your text here" nameOfBtn1 ="conert to uppercase" nameOfBtn2 ="conert to Lowecase" nameOfBtn3 = "copy Text" nameOfBtn4 = "Paste here" nameOfBtn5 = "clear"/>


    </>
  );
}

export default App;

