import { NavLink } from "react-router-dom";

const Banner = ()=>
{
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <NavLink to="/mens-fashion" className="nav-link">
                        <img src="./images/banner9.jpg" class="d-block w-100 " alt="..."/>
                    </NavLink>
                    </div>
                    <div class="carousel-item">
                    <NavLink to="/mobile" className="nav-link">
                        <img src="./images/banner1.jpg" class="d-block w-100" alt="..."/>
                    </NavLink>
                    <img src="./images/banner2.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <NavLink to="/mens-fashion" className="nav-link">
                        <img src="./images/banner4.jpg" class="d-block w-100" alt="..."/>
                    </NavLink>
                    </div>
                    <div class="carousel-item">
                    <NavLink to="/laptop" className="nav-link">
                        <img src="./images/banner3.jpg" class="d-block w-100" alt="..."/>
                    </NavLink>            
                    <NavLink to="/mobile" className="nav-link">
                        <img src="./images/banner2.jpg" class="d-block w-100" alt="..."/>
                    </NavLink>        
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Banner;