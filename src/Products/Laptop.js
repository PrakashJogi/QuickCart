
import React from "react";
import LaptopData from "./LaptopData.js";
import All_products from "./All_products.js";


const Laptop = (props) => 
{
    let Laptop_Data = [                     //static data for display product Details
    {
        id:4,
        product_image:"./images/Hp.jpg",
        product_name: "Hp Thin & Light Laptop",
        description:"1212121212",
        product_price: 50000,
    },
    {
        id:5,
        product_image:"./images/laptop2.jpg",
        product_name: "Dell New G15-5515 Gaming Laptop",
        description:" AMD Ryzen5-5600H, Windows 11+Mso'21, 16Gb Gddr4, 512Gb Ssd, Nvidia RTX 3050 (4Gb Gddr6), 15.6 Inches Fhd Ag 250 Nits 120Hz Backlit Kb Orange (D560805Win9W, 2.57Kgs)",
        product_price: 72000,
    },  
    {
        id:6,
        product_image:"./images/laptop1.jpg",
        product_name: "HP Pavilion 15 AMD Ryzen 5-5625U",
        description:"HP Pavilion 15 AMD Ryzen 5-5625U, 16GB RAM/512GB SSD 15.6inch(39.6 cm) FHD IPS Micro-Edge Display/Radeon Graphics/Backlit Kb/Windows 11 Home/Alexa/B&O Audio/Office 2021,15-Eh2024au, color:Natural Silver",
        product_price: 61000,
    }  
    ];
    return(
        <>
        <div>
            {
                Laptop_Data.map((data,index) => 
                (
                        <LaptopData 
                            key = {index}
                            product_image={data.product_image}
                            product_name={ data.product_name}
                            description={data.description}
                            product_price={data.product_price}
                            product_Qty={ data.product_Qty }
                            laptop_data= {data} />
                        // <All_products 
                        //     key = {index}
                        //     product_image={data.product_image}
                        //     product_name={ data.product_name}
                        //     description={data.description}
                        //     product_price={data.product_price}
                        //     product_Qty={ data.product_Qty }
                        //     all_data= {data} />
                )
                )  
            }
            </div>
            {/* <div>
            {
                Laptop_Data.map((data,index) => 
                (
                      <All_products 
                            key = {index}
                            product_image={data.product_image}
                            product_name={ data.product_name}
                            description={data.description}
                            product_price={data.product_price}
                            product_Qty={ data.product_Qty }
                            all_data= {data} />
                )
                )  
        }   
        </div> */}
        </>
    );

}

export default Laptop;