import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Output from "./pages/output";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
