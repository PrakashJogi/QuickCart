import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux/es/exports"; 
import { useDispatch } from "react-redux";
import {DELETE,ADD_QTY,RMV_QTY} from "../Redux/action.js"
import { NavLink } from "react-router-dom";



const Cart = () =>
{
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.cart_reducer.carts);
    // console.log(getData); 

    let sub_Total = 0;

    const add_Qty = (data) =>
    {
        dispatch(ADD_QTY(data));
    }

    const remove_Qty = (data) =>
    {
        dispatch(RMV_QTY(data));
    }

   
    const deleteProduct = (id) =>
    {
        // console.log("ss");
        dispatch(DELETE(id));
    }

    return(
        <>
              {  
                getData.length ?            //condition like if-else
                <>
                <div className="cart-title p-4"><h3 style={{color:"#f40076"}}>Shopping Cart</h3>
                <div className="card-body">
                <div className="cart-container card">
                    <table className="table table-striped text-center ">
                        <tbody>
                        <tr className="table-body">
                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                            <th></th>
                        </tr>
                        {
                        getData.map((data) =>
                        {
                           
                            sub_Total += data.product_price * data.quantity
                            return(
                                <>
                                <tr>
                                    <td className="">
                                        <img src={data.product_image} width="50" height="50" alt=""/>
                                    </td>
                                    <td className="p-2">{data.product_name}</td>
                                    <td className="p-2" width="110">₹ {data.product_price}</td>
                                    <td className="p-2" width="150">
                                    <i className="fa-solid fa-circle-minus Qty_btn" onClick={ ()=> remove_Qty(data) }></i>
                                            {data.quantity}
                                    <i className="fa-solid fa-circle-plus Qty_btn" onClick={ ()=> add_Qty(data) }></i>
                                    </td>
                                    <td className="p-2" width="160">₹ {data.product_price * data.quantity}</td>
                                    <td className="p-2"><i className="fa fa-trash cart-delete" title="Remove product" onClick={ () => {deleteProduct(data.id) } }></i></td>
                                </tr>
                                </>
                                );
                        })
                        }
                        </tbody>
                    </table>
                    </div>
                    <div className="card cart-container-small">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="p-2 sub-total">Sub Total :</td>
                                        <td>₹ {sub_Total}</td>
                                    </tr>
                                    <tr>
                                        <td  className="p-2">Delivery Charges :</td>
                                        <td style={{color:"green",fontWeight:"bold"}}>Free</td>
                                    </tr>
                                    <tr>
                                        <td  className="p-2 ">GST(18%) :</td>
                                        <td>₹ {(sub_Total*18/100).toFixed(2)}</td>
                                    </tr>                                   
                                    <tr className="border " width="">
                                        <td className="" width=""><h3>Total Amount :</h3></td>
                                        <td className="" width=""><h4>₹ {(sub_Total*18/100  +  sub_Total).toFixed(2)} </h4></td>
                                    </tr>
                                </tbody>
                            </table><br/>
                            <button className="checkout_btn">Proceed to Checkout</button>
                    </div>
                </div>
                </div>
                </> :           //condition like if-else

                <div className="card-body-empty">
                    <div className="col-lg-12 container text-center">
                    <div className="">
                        Your cart is empty <img src="./images/cart_GIF.gif" height="70" width="70"/>
                    </div>
                    <div className="empty-text">
                        Click <NavLink to="/all-products"  className="nav-link here">here</NavLink> to shopping now...
                    </div>
                    </div>
                </div>
                }
                
            </>
    );
}

export default Cart;