import { productI, subCateI } from '@/types/product.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
  import { FaFolderOpen } from "react-icons/fa";
export default async function page({
  params,
}: {
  params: Promise<{ subCategories: string }>
}) {
  const { subCategories} = await params;
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${subCategories}/subcategories`, {
        method: 'Get'
      })
      const data = await response.json()
      const product: subCateI[] = await data.data
      console.log(product)
  return (<main className='py-22'>
     <div className=' gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  container m-auto'>

    {product.map((pro)=>{return  <Link href={`/categories/subCategories /details/${pro._id}`} key={pro._id}>
    <div className="group  bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1" >
  <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">

<FaFolderOpen />
  </div>
  <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors mb-2">{pro.name}</h3>
  <div className="flex items-center gap-2 text-sm text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
    <span>{pro.name}</span>
   </div>
   </div>
   </Link>})}
  
 </div>
  </main>
  )
}
