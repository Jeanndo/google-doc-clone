import TextEditor from "./components/TexEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/documents/:id " element={<TextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
