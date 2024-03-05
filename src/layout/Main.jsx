"use client"
import React, { useEffect, useState } from "react";
import MainApis from "../api/main/Index";
import Aside from "../components/Aside";
import Card from "../components/Card";
import { MagicMotion } from "react-magic-motion";
const api = new MainApis();

const Main = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    apiProducts();
  }, []);

  const apiProducts = async () => {
    let { data } = await api.getAllProducts(
      "https://fakestoreapi.com/products"
    );
    // console.log({ response: data });
    setProducts(data);  
  };


  const getCategorySelected = async (props) => {
    let { data } = await api.getCategorySelected(
      `https://fakestoreapi.com/products/category/${props}`
    );
    console.log({ response: data });
    setProducts(data);
  };

  

  return (
    
    <div className="flex w-full h-full">
      <Aside getCategorySelected={(item)=>getCategorySelected(item)}  deleteFilter={()=>apiProducts()}/>
      
      <section className="w-full h-[860px] flex flex-wrap justify-evenly space-y-4 overflow-scroll ">
        {products.map((product, index) => (
          <div className={`${index==0 ? "mt-4": null} w-[18%] h-[400px]`} key={product.id}>
            <Card product={product}/>
          </div>
        ))}
      </section>
    </div>
  );
  
};
export default Main;
