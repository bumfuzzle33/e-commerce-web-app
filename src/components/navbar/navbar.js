import { useState } from "react"
import './navbar.css'
import {BsFillGiftFill} from 'react-icons/bs'
import {RiShoppingCartFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {MdLocalOffer} from 'react-icons/md'

const Navbar = ()=>{
    const [navmenu_toggle_btn_status,set_navmenu_toggle_btn_status] = useState('navbar-burger')
    const [navmenu_toggle_status,set_navmenu_toggle_status] = useState('navbar-menu')

    function toggle_navbar_menu(){
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
                <a href="#" className="navbar-item">
                    <img id='navbar_logo' alt="Cyber shop logo" src='resources/cyber_shop_logo.png'></img>
                    <h2 className='title has-text-white'>Cyber Shop</h2>
                </a>
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
                    <a className="navmenu_glow navbar-item has-text-weight-medium is-size-5">          
                        Home
                    </a>
                    <a  className="navmenu_glow navbar-item has-text-weight-medium is-size-5">
                        Exclusive offers!
                    </a>
                </div>
                {/* <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="navbar-end">
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

// {/* search bar */}
// <div className="navbar-item has-addons vanish_this">
// <div className="control">
//     <input placeholder="Search products" type="text" className="input" />
// </div>
// <div className="control">
//     <a href="" className="button is-info">Search</a>
// </div>
// </div>
// {/* categories area */}
// <div class="navbar-item vanish_this control has-icons-left">
// <div class="select">
//     <select defaultValue="Select from categories">
//         <option>Country</option>
//         <option>Select dropdown</option>
//         <option>With options</option>
//     </select>
// </div>
// <div class="icon is-small is-left">
//     <i class="fas fa-globe"></i>
// </div>
// </div>