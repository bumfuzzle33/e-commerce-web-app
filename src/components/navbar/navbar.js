import { useState } from "react"
import './navbar.css'

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
                    <img className='mr-6' alt="Cyber shop logo" src='resources/cyber_shop_logo.png'></img>
                </a>
                <a onClick={()=>toggle_navbar_menu()} role="button" aria-label="nav menu" className={navmenu_toggle_btn_status} aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                
            </div>
            <div className={navmenu_toggle_status}>
                <div className="navbar-start">
                    {/* home and offerse menu */}
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="" className="is-firy-orange button">Home</a>
                            <a href="" className="is-firy-red button">Exclusive offers!</a>
                        </div>
                    </div>
                    {/* search bar */}
                    <div className="navbar-item has-addons vanish_this">
                        <div className="control">
                            <input placeholder="Search products" type="text" className="input" />
                        </div>
                        <div className="control">
                            <a href="" className="button is-info">Search</a>
                        </div>
                    </div>
                    {/* categories area */}
                    <div class="navbar-item vanish_this control has-icons-left">
                        <div class="select">
                            <select defaultValue="Select from categories">
                                <option>Country</option>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                        <div class="icon is-small is-left">
                            <i class="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div id="nav-start-end-divider"></div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {/* wishlist menu */}
                            <a href="" className="button is-success">Your Wishlist</a>
                            {/* cart menu */}
                            <a href="" className="button is-warning">Your Cart</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
        </nav>
    )
    
}

export default Navbar