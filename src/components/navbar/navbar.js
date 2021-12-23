import { useState } from "react"
import './navbar.css'
import {BsFillGiftFill} from 'react-icons/bs'
import {RiShoppingCartFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {MdLocalOffer} from 'react-icons/md'
import { Link } from "react-router-dom"

const Navbar = ({products_obj,set_category,display_option=true})=>{
    const [navmenu_toggle_btn_status,set_navmenu_toggle_btn_status] = useState('navbar-burger')
    const [navmenu_toggle_status,set_navmenu_toggle_status] = useState('navbar-menu')
    let repeated_categories = []

    function toggle_navbar_menu({products_obj}){
        if(navmenu_toggle_btn_status==='navbar-burger'){
            set_navmenu_toggle_btn_status('navbar-burger is-active')
            set_navmenu_toggle_status('navbar-menu is-active')

        }
        else{
            set_navmenu_toggle_btn_status('navbar-burger')
            set_navmenu_toggle_status('navbar-menu')
        }
    }
    return(
        <nav id='navbar'  className="is-black navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* cyber shop logo */}
                <Link to='/' href="#" className="navbar-item">
                    <img id='navbar_logo' alt="Cyber shop logo" src='resources/cyber_shop_logo.png'></img>
                    <h2 className='title has-text-white'>Cyber Shop</h2>
                </Link>
                <a onClick={()=>toggle_navbar_menu()} role="button" aria-label="nav menu" className={navmenu_toggle_btn_status} aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id='navbar_menu' className={navmenu_toggle_status}>
                <div className="navbar-start">
                    <div className='ml-5 mr-3' id="nav-logo-divider"></div>
                    {/* home and offerse menu */}
                    <Link to='/' className="navmenu_glow navbar-item has-text-weight-medium is-size-5">          
                        Home
                    </Link>
                    <a  className="navmenu_glow navbar-item has-text-weight-medium is-size-5">
                        Exclusive offers!
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item control has-icons-left">
                        {
                            display_option===true&& <div className="select">
                            <select id='category_list' onChange={()=>set_category(document.getElementById('category_list').value)}>
                                <option value='all'>All categories</option>
                                {
                                    products_obj.map(obj=>{
                                        let repeated_cat = false
                                        for(let i =0;i<repeated_categories.length;i++){
                                            if(obj.category===repeated_categories[i])
                                                repeated_cat=true
                                        }
                                        if(repeated_cat===false){
                                            repeated_categories.push(obj.category)
                                            return(
                                                <option key={obj.id} value={obj.cateogry}>{obj.category}</option>
                                            )
                                        }
                                    })
                                }
                            </select>
                        </div>
                        }
                       
                        <div className="icon is-small is-left">
                            <i className="fas fa-globe"></i>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <a href="" className="button is-success">
                            <span className='mr-3 mt-1'><BsFillGiftFill size='25px' /></span>   
                            Your Wishlist
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a href="" className="button is-warning">
                            <span className='mt-1 mr-3'><RiShoppingCartFill size='25px'/></span>
                            Your Cart
                        </a>
                    </div>
                       
                </div>
                    
            </div>
        </nav>
    )
    
}

export default Navbar

