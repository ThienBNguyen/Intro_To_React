import React from "react"
import productsData from "./products.js"
import Product from "./ProductMain.js"

function App(){
    const productComponents = productsData.map(item => <Product product = {item} />)
    return (
        <div> 
            {productComponents}
        </div>
    )
}
export default App