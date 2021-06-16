import logo from './logo.svg';
import './App.css';
import './productDetail';
import {productsDetail} from './productDetail';
import ProductList from './Components/ProductList/ProductList'

function App() {
  return (
    <div className="App">
    <h2>Product-List</h2>
    <ProductList productsDetail={productsDetail} />
    </div>
  );
}

export default App;
