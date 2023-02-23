
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Show from './components/show';
import SideBar from './components/sideBar';



function App() {
  return (
    <>
      <h1 className="bg-dark p-3 text-center m-1 rounded-2  text-white">Crud App</h1>
      <div className="d-flex">
        <div className=" justify-content-start ">

          <SideBar />
        </div>
        <div className="d-flex justify-content-end p-1 w-75">

          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/show" element={<Show />}> </Route>
          </Routes>
        </div>

      </div>
    </>




  );
}

export default App;
