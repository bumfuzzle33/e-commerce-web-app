import Navbar from '../navbar/navbar'
import Main_slider from '../main_slider/main_slider'
import Footer from '../footer/footer';
import Products from '../products/products';
import { useState } from 'react';
import './home.css'

const Home = ({category,set_category,json_data})=>{
    return(
<div id="home_container">
      <div id="display_area">
        <Navbar set_category={set_category} products_obj={json_data}/>
        <h1 style={{textDecoration:'underline'}} className='my-4 title has-text-white has-text-centered'>Happy Shopping!</h1>
        <Main_slider/>
        <Products category={category} products_obj={json_data}/>
        <Footer/>
      </div>
    </div>
    )
    
}

export default Home;