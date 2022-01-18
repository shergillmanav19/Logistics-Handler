import Dashboard from "./comonenets/Dashboard";
import Form from "./comonenets/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditEntry from "./comonenets/EditEntry";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/edit/:id/:name/:order" element={<EditEntry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
