import "./All_products.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/action.js"
import { NavLink } from "react-router-dom";

const All_products_data = (props) =>
{

    
    // const All_data =              //Add user enter Quantity in object
    // {
    //     ...props.all_products_data,
    // }

    // console.log(All_products_data);
    
    const dispatch = useDispatch();
    const add_to_cart = (data) =>
    {
        dispatch(ADD(data));
    }

  
    
    return(
    <><br />
            <div className="container mt-2">
            <div className="row d-flex justify-content-center align-item-center">
                {
                    props.all_products_data.map((data,id) =>
                    {
                    return(
                        <>
                        <div className="card card-body-card p-4">
                            <div className="column">
                                <div className='images'>
                                <NavLink to={data.p_link}  className="nav-link  text-white">
                                    <img src={data.product_image} width='200' height='200'/> 
                                </NavLink>
                                </div>
                                <h5 className="card-title">{data.product_name}</h5>
                                <div className="p_price mb-3"><strong>₹ {data.product_price}</strong></div>
                                <button onClick={ ()=> add_to_cart(data) } className="card-btn">Add To Cart</button>
                            </div>
                        </div>
                        </>
                        );
                })
                }
            </div>
            </div>
            </>
            );
}

export default All_products_data;