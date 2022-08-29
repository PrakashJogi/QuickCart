
import React from "react";
import MenFashionData from "./MenFashionData.js";


const MenFashion = (props) => 
{
    let MenFashion_Data = [                     //static data for display product Details
    {
        id:7,
        product_image:"./images/men3.jpg",
        product_name: "FINIVO FASHION Men Cotton Casual Shirt",
        description:"Material Composition: Hand Wash Only,Style: Casual,Neck-Style: Collared Neck,Pattern: Solid",
        product_price: 549,
    },
    {
        id:8,
        product_image:"./images/pent1.jpg",
        product_name: "Levi's Men's 512 Slim Tapered Fit Jeans",
        description:"Material Composition: 98% Cotton, 2% Elastane,Care Instructions:Machine Wash,Item Type Name: Jeans,Fit Type: Slim",
        product_price: 2100,
    },  
    {
        id:9,
        product_image:"./images/watch3.jpg",
        product_name: "Timex Fashion Dial Men's Watch-TI000U",
        description:"Dial Color: Multi-Color, Case Shape: Round,Band Color: Black, Band Material: Leather,Watch Movement Type: Quartz, Watch Display Type: Analog,Water Resistance Depth: 30 meters,Warranty type:Manufacturer; 1 Year Manufacturer Warranty",
        product_price: 2400,
    },  
    {
        id:10,
        product_image:"./images/shoes1.jpg",
        product_name: "Sparx Unisex-Adult X-ray 2 Casual shoes",
        description:"Material Type: Faux Leather- Suede- Rubber,Closure Type: Lace-Up,Heel Type: Flat,Water Resistance Level:Not Water Resistant",
        product_price: 2400,
    }  
    ];
    return(
        <div>
            {
                MenFashion_Data.map((data,index) => 
                (
                      <MenFashionData 
                            key = {index}
                            product_image={data.product_image}
                            product_name={ data.product_name}
                            description={data.description}
                            product_price={data.product_price}
                            product_Qty={ data.product_Qty }
                            menFashion_data= {data} />
                )
                )  
        }   
        </div>
    );

}

export default MenFashion;