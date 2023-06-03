
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './View/SideBar';
import DetailsInput from './View/DetailsInput';
import DetailsShow from './View/DetailsShow';



function App() {
  return (
    <>
      <label className="Heading">Crud App</label>
      <div className="main">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<DetailsInput />}> </Route>
            <Route path="/show" element={<DetailsShow />}> </Route>
          </Routes>
        </div>
      </div>
    </>




  );
}

export default App;
