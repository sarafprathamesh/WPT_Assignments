import './App.css';
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  let [prodarr,setprodarr]=useState([
    {prodid:"100",prodname:"Parle-G",prodqty:"10",prodprice:"10"},
    {prodid:"101",prodname:"Sunfeast",prodqty:"15",prodprice:"5"},
    {prodid:"102",prodname:"Bourbon",prodqty:"5",prodprice:"15"},
    {prodid:"103",prodname:"Oreo",prodqty:"12",prodprice:"10"},
  ]);

 /* const insertProduct=()=>{
    setprodarr([...prodarr,{...ob}]);
  }*/
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-12 col-md-6'>
        <AddProduct /*addProduct={insertProduct}*/> </AddProduct>
        </div>
        <div className='col-sm-12 col-md-6'>
        <ProductList></ProductList>      
        </div>
        </div>
      </div>     
     
    </div>
  );
}

export default App;
