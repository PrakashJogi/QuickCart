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

    {/* <div className="product-card">
    <div className="col-lg-8 container product-card">    
            <table className="table bg-white" >  
            <tbody> 
                <tr className="">
                    <td width="100" height="220" align="center">
                        <div className='images'><img src={props.product_image} width='250' height='250'/> </div>
                    </td>
        
                    <td width="280" height="270" className="product-details pt-3" >
                        <div className="p_name mb-3">{props.product_name}</div>
                        <div className="p_price mb-3">Rs.{props.product_price}</div> */}
                        {/* <label>Qty:&nbsp;</label> */}
                        {/* <input type='number' value={ Qty } min="1" max="10" onChange={changeQty} placeholder="Quantity"  className='product-quantity' /> */}
                        
                            {/* <button className="btn add_to_cart" onClick={ ()=> add_to_cart(All_data) } >Add to Cart</button>
                        <div className="">Product Details:
                        <hr/>
                            <div className="p_dec">{props.description}</div>
                        </div>
                    </td> 
                </tr>
                </tbody>
            </table>
        </div>
        </div> */}

    </>
    );
}

export default All_products_data;