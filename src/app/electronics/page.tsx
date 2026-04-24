import ProducCardt from '@/components/commen/ProductCard'
import { productI } from '@/types/product.types'
import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'

export default async function Electronics() {
   const response = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
      method: 'Get'
    })
  
    const data = await response.json()
    const products: productI[] = data.data
    const electronic =  products.filter((pro)=>{
      return pro.category._id ==='6439d2d167d9aa4ca970649f'
    })
    
  return (
   <>
     <div className="bg-linear-to-br from-primary-800 to-primary-500 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-medium">Electronic</span>
        </nav>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
          <FaBoxOpen className='size-5' />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Electronic Products
            </h1>
            <p className="text-white/80 mt-1">
              Explore our complete product collection
            </p>

   




          </div>
        </div>
      </div>
    </div>
    <div className='container m-auto'> <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-3 py-3">
              {electronic.map((pro) => {
                return (
                  <div key={pro.id} className="col-span-1">
                   <ProducCardt pro={pro}/>
                  </div>
                )
              })}
            </div></div></>
  )
}
