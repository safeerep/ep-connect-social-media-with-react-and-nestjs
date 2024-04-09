import { 
  Entry, 
  Chat,
  Login
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Entry />} path="/" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
