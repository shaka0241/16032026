import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
