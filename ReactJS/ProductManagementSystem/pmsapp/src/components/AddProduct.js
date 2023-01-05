import { useState } from "react";

const AddProduct=()=>{
    let[prod,setprodid]=useState({prodid:"",prodname:"",prodqty:"",prodprice:""});
    let [prodob,setprodob]=useState({prodid:"",prodname:"",prodqty:"",prodprice:""});
    
    const addprod=(event)=>{
        
        
        const [name,value]=event.target;
        setprodob({...prodob,[name]:value});
    }
    return(
        <div>
            <h1>In Add Product</h1>
        <form>
            <div>
                <label >Product ID</label>
                <input type="text" name="prodid" id="prodid" placeholder="Enter Product ID" className="form-control" value={prod.prodid}></input>
            </div>
            <div>
                <label >Product Name</label>
                <input type="text" name="prodname" id="prodname" placeholder="Enter Product Name" className="form-control" value={prod.prodname}></input>
            </div>
            <div>
                <label >Product Quantity</label>
                <input type="text" name="prodqty" id="prodqty" placeholder="Enter Product Quantity" className="form-control" value={prod.prodqty}></input>
            </div>
            <div>
                <label >Product Price</label>
                <input type="text" name="prodprice" id="prodprice" placeholder="Enter Product Price" className="form-control" value={prod.prodprice}></input>
            </div>
            <button type="button" name="btn" class="btn btn-primary" id="btn" onClick={addprod}>Add Product</button>
        </form>
        </div>
    )
}
export default AddProduct;