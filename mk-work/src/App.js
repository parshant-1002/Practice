import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbarr from './components/navbarr';
import NewProducts from './components/newProducts';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <NewProducts/>
    </div>
  );
}

export default App;
