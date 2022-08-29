import { type } from "@testing-library/user-event/dist/type"
import { act } from "react-dom/test-utils";
import React,{useState} from "react";

const INIIT_STATE = {
    carts: []
}

export const cart_reducer = (state = INIIT_STATE,action) =>
{
    switch(action.type)
    {
          case "ADD_TO_CART":

            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
        
            if(ItemIndex >= 0 )
            {
               state.carts[ItemIndex].quantity += 1;
                // = action.payload.quantity;
                    // return{
                    //     ...state,
                    //     carts:[...state.carts]
                    // }
            }
            else
            {
                const temp_data ={...action.payload,quantity:1 }
                return{
                    ...state,
                    carts: [...state.carts ,temp_data]
                }
            }

            break;

            
                
        case "ADD_QUANTITY":

            const ItemIndex_Inc = state.carts.findIndex((item) => item.id === action.payload.id);
    
            if(action.payload.quantity < 10)
            {
                const Inc_item =  state.carts[ItemIndex_Inc].quantity += 1
    
                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
            // else
            // {
            //     console.log("not increment");
            // }
            break;
    
      


            case "REMOVE_QTY":

            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if(action.payload.quantity > 1)
            {
                const dec_item =  state.carts[ItemIndex_dec].quantity -= 1

                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
            // else
            // {
            //     console.log("not decrement");
            // }
        break;

        case "REMOVE_CART":

            const data = state.carts.filter((item) => item.id !== action.payload);
            return{
                ...state,
                carts: data
            }
        break;

                
            default :
                return state
    }
}