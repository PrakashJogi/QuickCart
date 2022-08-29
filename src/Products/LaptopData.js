import React,{useState} from "react";
import "./Products.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/action.js"

const LaptopData = (props) =>
{

    
    const [Qty, setQty] = useState(1);

    const changeQty = (event) =>
    {
        setQty(event.target.value);
    }
    // const laptop_data=              //Add user enter Quantity in object
    // {
    //     ...props.laptop_data,
    //     quantity: Qty           
    // }

    // console.log(laptop_data);
    
    const dispatch = useDispatch();
    const add_to_cart = (data) =>
    {
        dispatch(ADD(data));
    }

  
    
    return(
    <><br />
    <div className="product-card">
    <div className="col-lg-8 container product-card">    
            <table className="table bg-white" >  
            <tbody> 
                <tr className="">
                    <td width="100" height="220" align="center">
                        <div className='images'><img src={props.product_image} width='250' height='250'/> </div>
                    </td>
        
                    <td width="280" height="270" className="product-details pt-3" >
                        <div className="p_name mb-3">{props.product_name}</div>
                        <div className="p_price mb-3">₹ {props.product_price}</div>
                        {/* <label>Qty:&nbsp;</label> */}
                        {/* <input type='number' value={ Qty } min="1" max="10" onChange={changeQty} placeholder="Quantity"  className='product-quantity' /> */}
                        
                            <button className="add_to_cart" onClick={ ()=> add_to_cart(props.laptop_data) } >Add to Cart</button>
                        <div className="">Product Details:
                        <hr/>
                            <div className="p_dec">{props.description}</div>
                        </div>
                    </td> 
                </tr>
                </tbody>
            </table>
        </div>
        </div>

    </>
    );
}

export default LaptopData;