import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRouters from "./routes/Main.Routers";


function App() {
  return (
    <Router>
        <MainRouters/>
    </Router>
  );
}

export default App;
