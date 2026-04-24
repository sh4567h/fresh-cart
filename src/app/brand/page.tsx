import { authOptions } from '@/lib/authOptions'
import { brandI } from '@/types/product.types';
import { getServerSession } from 'next-auth'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaTags } from "react-icons/fa";


export default async function Brands() {
  // const data =await getServerSession(authOptions)
  // console.log(data)
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
        method: 'Get'
      })
      const data = await response.json()
      const products: brandI[] = data.data
     console.log( products)
  return (
    <div>
      <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
  <div className="container mx-auto px-4 py-12 sm:py-16">
    
    {/* Breadcrumb */}
    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
      <a className="hover:text-white transition-colors" href="/">Home</a>
      <span className="text-white/40">/</span>
      <span className="text-white font-medium">Brands</span>
    </nav>

    {/* Header */}
    <div className="flex items-center gap-5">
      
    
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
        <span className="text-3xl"><FaTags /></span>
      </div>

      {/* Text */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Top Brands
        </h1>
        <p className="text-white/80 mt-1">
          Shop from your favorite brands
        </p>
      </div>

    </div>
  </div>
</div>
 <div className='container m-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-10'>
  {products.map((pro)=>{
    return <div key={pro._id}
  className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
  
>
  
  <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
    <span>
      <Image src={pro.image} alt={pro.slug} width={1000} height={1000}/>
    </span>
  </div>

 
  <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
    {pro.name}
  </h3>

   <Link href={`/brand/${pro._id}`} className="text-xs text-violet-600 cursor-pointer  flex items-center gap-1">
  
  <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
      View Products
      <span className="text-[10px]">FaArrowRight</span>
   
  </div>
   </Link>
</div>
  })}

</div>
    </div>
  )
}
