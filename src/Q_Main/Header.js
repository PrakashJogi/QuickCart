import './Header.css';
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";  


const Header = () =>
{
    const getData = useSelector((state) => state.cart_reducer.carts);
    
    return (
        <>
        <header className="">
        <nav className="navbar fixed-top  header-middle navbar-expand-lg navbar_css">
            <div className="container-fluid ">
            <NavLink to="/" className="navbar-brand logoMy"><img src="./images/logoMy.png" className='logo1' height="70" width="70"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-sm-3 col-xs-0 " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar_right ">
                    <li className="nav-item nav-item-1 "> 
                        <NavLink to="/" className="nav-link  nav1">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                    <NavLink to="/cart" className="nav-link nav1 cart-text right-side">Cart
                            <Badge badgeContent={getData.length} color="success">
                            <i className='fa-solid fa-cart-shopping'></i>
                            </Badge>
                        </NavLink>
                    </li>    
                    <li className="nav-item nav-item-1 p-1">
                        <NavLink to="my-account" className="nav-link nav1 ">Login&nbsp;
                        <i className='fa-solid fa-user'></i>
                        </NavLink>
                        
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

        <nav className="navbar header-middle navbar-expand-lg navbar_css-2">
            <div className="container-fluid ">
                <div className="collapse navbar-collapse col-sm-3 col-xs-0 " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar_rightss ">
                    <li className="nav-item h_text  "> 
                        <NavLink to="/all-products" className="nav-link nav-item-2">All Products</NavLink>
                    </li>
                    <li className="nav-item h_text  ">
                        <NavLink to="/laptop" className="nav-link  nav-item-2">Laptop</NavLink>
                    </li>
                    <li className="nav-item h_text  ">
                        <NavLink to="/mobile" className="nav-link  nav-item-2" >Mobile</NavLink>
                    </li>
                    <li className="nav-item h_text  ">
                        <NavLink to="/mens-fashion" className="nav-link  nav-item-2">Men's Fashion</NavLink>
                    </li>
                                   
                </ul>
                </div>
            </div>
        </nav>

      
        </header>
        </>
    );
}

export default Header;