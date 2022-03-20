import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Titlebar/Title';
import FilterItem from './Components/filteritems/FilterItem';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Title/>
   <FilterItem/>
    </div>
  );
}

export default App;
