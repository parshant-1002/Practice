
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Show from './components/show';
import SideBar from './components/sideBar';



function App() {
  return (

    <>
      <table className="table m-4">
        <tc  className=" m-2">
          <td>

            <div className=" justify-content-start ">

              <SideBar />
            </div>
          </td>

        </tc>
        <tc>
          <td>
            <div className="d-flex justify-content-end p-5 w-100">

              <Routes>
                <Route exact path="/" element={<Home />}> </Route>
                <Route path="/show" element={<Show />}> </Route>
              </Routes>
            </div>

          </td>

        </tc>




      </table>

    </>




  );
}

export default App;
