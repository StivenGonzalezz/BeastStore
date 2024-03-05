import React, { useState } from 'react'
import { LiaCartPlusSolid } from "react-icons/lia";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const Card = ({product}) => {

  const [stars,setStars] = useState([])


  return (
    <div className='w-full h-full flex flex-col items-center text-center rounded-lg group/card hover:bg-gradient-to-t from-indigo-300 to-60% transition duration-500 ease-in-out'>
      <div className='w-[90%] h-[65%] py-3 '>
        <img className='w-[100%] h-full object-fill brightness-100 mix-blend-multiply group-hover/card:scale-110 ease-in-out duration-300 transition' src={product.image} alt="" />
      </div>
      <section className='flex flex-col h-[35%]' >
        <h3 className='font-dosis font-bold w-full h-[30%] leading-none text-center overflow-hidden'>{product.title}</h3>
        <section className='w-full h-full flex items-center justify-center'>
          <span className=' text-end'>{product.rating.rate}</span>
          {
            function star (){
              let a = []
              for (let index = 0; index < 5; index++) {
                if(index<Math.floor(product.rating.rate) && product.rating.rate !==  3.5 ){
                  a.push(<BiSolidStar className='text-yellow-500'/>)
                }else if(index < product.rating.rate && (index<product.rating.rate+1)){
                  a.push(<BiSolidStarHalf className='text-yellow-500'/>)
                }
                else{a.push(<BiStar className='text-yellow-500'/>)}
              }
              return a
            }()
          }
          <span className='text-gray-600 text-center'>({product.rating.count})</span>
        </section>
        <h2 className='font-bold'>${product.price}</h2>
        <section className='w-full h-full flex items-center text-end'>
          <h2 className='w-full'>Añadir al carrito</h2>
          <LiaCartPlusSolid className='w-[30%] text-4xl hover:text-yellow-500 hover:scale-110 ease-in-out duration-300 cursor-pointer' />
        </section>    
      </section>
    </div>
  )
}
export default Card
 