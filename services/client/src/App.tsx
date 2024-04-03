import { 
  Entry, 
  Chat
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Entry />} path="/" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </>
  );
}

export default App;
