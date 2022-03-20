import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Titlebar/Title';
import FilterItem from './Components/filteritems/FilterItem';
import Product from './Components/product/Product'
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Title/>
   <FilterItem/>
   <Product/>
    </div>
  );
}

export default App;
