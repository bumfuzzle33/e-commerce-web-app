import './product_page.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';

const Product_page = ({category,set_category,json_data,product_id,product_name,product_category,product_vendor,product_price,product_available})=>{
    return(
        <div id="product_page_container">
            <Navbar set_category={set_category} products_obj={json_data} display_option={false}/>
            <div id="product_all_container">
            <div id='product_page_container2'>
                <img src={`/resources/product_images/${product_id}.jpeg`}/>
            </div>
            <div id="product_info_container">
                <ul>
                <li className='is-size-3'>{product_name}</li>

<li className='is-size-4'>Just ₹{product_price}</li>
<li className='is-size-4'>Vendor : {product_vendor}</li>
<li className='is-size-4'>Category : {product_category}</li>
                </ul>

            </div>
            </div>
  

            <Footer/>

        </div>
    )

}

export default Product_page