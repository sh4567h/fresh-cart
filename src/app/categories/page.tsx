import { brandI } from '@/types/product.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Categories() {
  const categResponse = await fetch('https://ecommerce.routemisr.com/api/v1/categories', {
      method: 'Get'
    })
  
  
  const categData = await categResponse.json()
  const categories:brandI[] = categData.data
  
  return (
  <div className="container m-auto">

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 ">
 {categories.map((pro)=>{
    return < div key={pro._id } className=" border bor-25 border-gray-300 rounded-4xl shadow-sm  transition hover:shadow-md ">
    <div className="bg-white rounded-4xl p-4 text-center  cursor-pointer" >
  <Link  href={`/categories/${pro._id }`}>
  <div className=" w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
   < Image alt={pro.name} width={1000} height={1000} src={pro.image} />
    </div>
 
    <h3 className="font-medium">{pro.name}</h3>
    </Link>
    </div>
    </div>
    
    
 })} </div>
  </div>
  )
}
