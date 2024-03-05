import React, { forwardRef, useEffect, useState } from "react";
import MainApis from "../api/main/Index";
const api = new MainApis();

const Aside = forwardRef(({getCategorySelected=()=>{}, deleteFilter=()=>{},}) => {

  const [categories, setCategories] = useState([]);
  const [centinel, setCentinel] =useState(false);


  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let { data } = await api.getAllCategories(
      "https://fakestoreapi.com/products/categories"
    );
    console.log({ response: data });
    setCategories(data);
  };

  const categorySelected = (category) =>{
    getCategorySelected(category)
    setCentinel(true)
  }


  const categoryDeleted = () =>{
    deleteFilter()
    setCentinel(false)
  }


  return (
    <div className="w-[14%] flex flex-col fontd">
      <h2 className="text-center w-full p-3 font-bold">Categories</h2>
      <ul className="flex flex-col items-center w-full p-3 justify-between min-h-[180px]">
        {categories.map((category) => (
          <li className="cursor-pointer p-2 hover:bg-gradient-to-t from-indigo-300 to-60% transition-all ease-in-out rounded-xl" onClick={() => categorySelected(category)}>
            {category}
          </li>
        ))}
        <li className={`cursor-pointer p-2 hover:bg-gradient-to-t from-indigo-300 to-60% transition-all ease-in-out rounded-xl ${centinel?null :"hidden"}`} onClick={() => categoryDeleted()}>
          clear
        </li>
      </ul>
    </div>
  
  );
}
)

export default Aside;
