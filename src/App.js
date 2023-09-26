import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailsShow from "./View/DetailsShow";
import NavScrollExample from "./View/navbar";
import DetailsEdit from "./View/DetailsEdit";

function App() {
  return (
    <>
      <label className=" w-100 ">
        <NavScrollExample />
      </label>
      <div className="main">
        <div className="content">
          <Routes>
            <Route
              path="/show"
              element={<DetailsShow />}
            ></Route>
            <Route
              path="/edit/:id?"
              element={<DetailsEdit />}
            ></Route>{" "}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
