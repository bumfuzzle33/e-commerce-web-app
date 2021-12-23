import './products.css'
import { Link } from 'react-router-dom'

const Products = ({products_obj,category})=>{
    return(
        <div id="product_container">
            <h1 className='mb-6 title has-text-centered'>Available Products</h1>
            <div className="columns is-multiline">
                {
                    products_obj.map(obj=>{
                        if(obj.category===category||category==='all'){
                            return(
                                
                                <Link key={obj.id} to={`product-id-${obj.id}`}>
                                <div  id='product' className="column">
                                    <img src={`/resources/product_images/${obj.id}.jpeg`}/>
                                    <div id="product_details_cont">
                                        <h2>{obj.name}</h2>
                                        <h2>Just ₹{obj.price}</h2>
                                        <h2>Vendor : {obj.vendor}</h2>
                                        <h2>Category : {obj.category}</h2>
                                    </div>
                                    
    
                                </div>
                                
                                </Link>
                                
                            )
                        }
                        
                    })
                }
            </div>
        </div>
    )
}

export default Products;