import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/SharedLayout";
import Main from "./components/Main";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>  
          <Route index element={<Home />} />
          <Route path="users" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
