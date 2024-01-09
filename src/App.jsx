import { BrowserRouter } from "react-router-dom";
import Mainbg from "./components/Mainbg";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {


  return (
    <BrowserRouter>
      <Mainbg/>
      <Navbar/>
      <Content/>
    </BrowserRouter>
  )
}

export default App
