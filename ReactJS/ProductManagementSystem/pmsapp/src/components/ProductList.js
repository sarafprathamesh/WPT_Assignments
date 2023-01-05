import ProductEdit from "./ProductEdit";
const ProductList=()=>{

    const renderList=()=>{}
    return(
        <div>
        <div className="myproductlistdiv">
            <h1>In Product List Component</h1>
            {renderList()};
        </div>
        <div><ProductEdit></ProductEdit></div>
        </div>
    )
}
export default ProductList;