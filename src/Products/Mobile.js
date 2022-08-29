import React from "react";
import MobileData from "./MobileData.js";


const Mobile = (props) => 
{
    let Mobile_Data = [                     //static data for display product Details
    {
        id:1,
        product_image:"./images/mobile4.jpg",
        product_name: "Samsung Galaxy M13",
        description:"(Midnight Blue, 4GB, 64GB Storage) | 5000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 12000,
    },
    {
        id:2,
        product_image:"./images/oneplus.jpg",
        product_name: "Oneplus Y13",
        description:"(Blue, 6GB, 126GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 21000,
    },  
    {
        id:3,
        product_image:"./images/mobile2.jpg",
        product_name: "RealMe Narzo 50i",
        description:"(Blue,Black, 6GB, 126GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 1799,
    }  
    ];
    return(
        <div>
            {
                // <MobileData mobile_data = {Mobile_Data}/>
                Mobile_Data.map((data,index) => 
                (
                      <MobileData 
                            key = {index}
                            product_image={data.product_image}
                            product_name={ data.product_name}
                            description={data.description}
                            product_price={data.product_price}
                            product_Qty={ data.product_Qty }
                            mobile_data= {data} />
                )
                )  
        }   
        </div>
    );

}

export default Mobile;