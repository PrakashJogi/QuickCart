
import React from "react";
import All_products_data from "./All_products_data.js";


const All_products = (props) => 
{
    let All_Products_Data = [                     //static data for display product Details
    {
        id:1,
        product_image:"./images/mobile4.jpg",
        product_name: "Samsung Galaxy M13",
        description:"(Midnight Blue, 4GB, 64GB Storage) | 5000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 12000,
        p_link: "/mobile",
    },
    {
        id:2,
        product_image:"./images/oneplus.jpg",
        product_name: "Oneplus Y13",
        description:"(Blue, 6GB, 126GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 21000,
        p_link: "/mobile",
    },  
    {
        id:3,
        product_image:"./images/mobile2.jpg",
        product_name: "RealMe Narzo 50i",
        description:"(Blue,Black, 6GB, 126GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        product_price: 1799,
        p_link: "/mobile",
    },
    {
        id:4,
        product_image:"./images/Hp.jpg",
        product_name: "Hp Thin & Light Laptop",
        description:"1212121212",
        product_price: 50000,
        p_link: "/laptop",
    },
    {
        id:5,
        product_image:"./images/laptop2.jpg",
        product_name: "Dell G15 Gaming Laptop",
        description:" AMD Ryzen5-5600H, Windows 11+Mso'21, 16Gb Gddr4, 512Gb Ssd, Nvidia RTX 3050 (4Gb Gddr6), 15.6 Inches Fhd Ag 250 Nits 120Hz Backlit Kb Orange (D560805Win9W, 2.57Kgs)",
        product_price: 72000,
        p_link: "/laptop",
    },  
    {
        id:6,
        product_image:"./images/laptop1.jpg",
        product_name: "HP Pavilion 15 AMD Ryzen",
        description:"HP Pavilion 15 AMD Ryzen 5-5625U, 16GB RAM/512GB SSD 15.6inch(39.6 cm) FHD IPS Micro-Edge Display/Radeon Graphics/Backlit Kb/Windows 11 Home/Alexa/B&O Audio/Office 2021,15-Eh2024au, color:Natural Silver",
        product_price: 61000,
        p_link: "/laptop",
    },
    {
        id:7,
        product_image:"./images/men3.jpg",
        product_name: "FINIVO Men Cotton Shirt",
        description:"Material Composition: Hand Wash Only,Style: Casual,Neck-Style: Collared Neck,Pattern: Solid",
        product_price: 549,
        p_link: "/mens-fashion",
    },
    {
        id:8,
        product_image:"./images/pent1.jpg",
        product_name: "Levi's Men 512 Slim Fit Jeans",
        description:"Material Composition: 98% Cotton, 2% Elastane,Care Instructions:Machine Wash,Item Type Name: Jeans,Fit Type: Slim",
        product_price: 2100,
        p_link: "/mens-fashion",
    },  
    {
        id:9,
        product_image:"./images/watch3.jpg",
        product_name: "Timex Dial Men's TI000U",
        description:"Dial Color: Multi-Color, Case Shape: Round,Band Color: Black, Band Material: Leather,Watch Movement Type: Quartz, Watch Display Type: Analog,Water Resistance Depth: 30 meters,Warranty type:Manufacturer; 1 Year Manufacturer Warranty",
        product_price: 2400,
        p_link: "/mens-fashion",
    },  
    {
        id:10,
        product_image:"./images/shoes1.jpg",
        product_name: "Sparx Adult Casual shoes",
        description:"Material Type: Faux Leather- Suede- Rubber,Closure Type: Lace-Up,Heel Type: Flat,Water Resistance Level:Not Water Resistant",
        product_price: 2400,
        p_link: "/mens-fashion",
    }  
    ];
    return(
        <div>
            {
            
                      <All_products_data all_products_data= {All_Products_Data} /> 
        }   
        </div>
    );

}

export default All_products;