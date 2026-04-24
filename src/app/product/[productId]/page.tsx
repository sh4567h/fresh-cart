
import React from 'react'
import { IoMdHome } from "react-icons/io";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoAddOutline } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
 import { FaShieldAlt } from "react-icons/fa";
 import { FaBox } from "react-icons/fa6";
 import { FaTruckMoving } from "react-icons/fa";
 import { FaCheck } from "react-icons/fa";
 import { BsArrowCounterclockwise } from "react-icons/bs";

import {
  Card,

} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { productI } from '@/types/product.types';
import SliderDetails from '@/components/commen/SliderDetails';
import RatingProduct from '@/components/commen/RatingProduct';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params;
  //   async function getSingleProduct() {
  //     try{
  // const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`, {
  //     method: 'Get'
  //   })
  //    const data = await response.json()
  //   return data.data
  //     } catch{
  //       return undefined
  //     }
  //   } 
  // const product: productI = await getSingleProduct()
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`, {
    method: 'Get'
  })
  const data = await response.json()
  const product: productI = await data.data
  console.log(product)

  return (
    <main className='min-h-screen'>
      <div className='w-[80%] m-auto'>
        <div className='my-4'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='text-gray-500 hover:text-primary-600 font-semibold transition flex items-center justify-center '>
                  <IoMdHome /> Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/categories/${product.category.name}`} className='text-gray-500 hover:text-primary-600 text-lg transition flex items-center justify-center '>
                  {product.category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='text-lg text-black'>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full mx-auto ring-0 bg-white overflow-hidden">
          <div className="flex flex-col md:flex-row gap-7 relative items-start">

            {/* sticky part*/}
            <div className="w-full md:w-2/5 lg:w-1/3 sticky top-6 self-start">
              <div className="border border-gray-300 rounded-xl shadow-lg bg-white p-4">
                <SliderDetails slidesPerView={product.images.length} images={product.images} />
              </div>
            </div>
            {/* right part*/}
            <div className="w-full md:w-3/5 lg:w-2/3 p-8 flex flex-col gap-5 border border-gray-300 shadow-xl">
              <div className='flex flex-wrap gap-2 mb-4'>
                <Link href={'/women'} className='bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition'>{product.category.name}</Link>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{product.brand.name}</span></div>


              <h2 className="text-xl sm:text-3xl font-bold line-clamp-2">
                {product.title}
              </h2>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">

                  {[...Array(5)].map((ele, i) => (
                    i < Math.floor(product.ratingsAverage) ? (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ) : (
                      <CiStar key={i} className="text-gray-300 text-xl" />
                    )
                  ))}
                </div>
                <span className="text-gray-600 text-sm  font-semibold">
                  {product.ratingsAverage} ({product.ratingsQuantity || 5} reviews)
                </span>
              </div>

              {/* price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary-600">
                  {product.price} EGP
                </span>
                {product.priceAfterDiscount && (
                  <span className="text-gray-400 line-through text-lg">
                    {product.priceAfterDiscount} EGP
                  </span>
                )}
              </div>

              <div className='border-b border-gray-200'>

                <p className="text-green-600 bg-green-50 text-sm font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full inline-block"></span>
                  In Stock
                </p>

                <p className='text-gray-500 leading-relaxed my-3 text-lg font-semibold'>{product.description}</p>
              </div>


              <div className="mt-4 space-y-4">

                <div className="flex  flex-col j gap-4">
                  <p className="text-gray-700 font-medium">Quantity</p>
                  <div className="flex">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg w-50 p-3 bor-25 overflow-hidden">
                      <button id="decrease-qty" type='button' title='decreament' className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50">
                        <FaRegWindowMinimize />
                      </button>
                      <input placeholder='.' min="1" max="300" className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium" id="quantity" type="number" value="1" />
                      <button type='button' title='increament' id="increase-qty" className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50">
                        <IoAddOutline />
                      </button></div>
                    <span className='text-gray-500 font-bold m-6 '> {product.quantity} available</span>
                  </div>

                </div>


                <div className="flex justify-between items-baseline border-t border-gray-200 pt-3">
                  <span className="text-gray-700 font-medium">Total Price:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price} EGP
                  </span>
                </div>

                {/* buttons*/}
                <div className="flex sm:flex-col md:flex-row  gap-3 pt-2">
                  <button className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] bor-25 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-primary-600">

                    <TiShoppingCart /> Add to Cart
                  </button>
                  <button className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-900 active:scale-[0.98] bor-25 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-gray-700">
                    <FaBoltLightning />   Buy Now
                  </button>
                </div>
                <div className='flex gap-3' >
                  <button className="w-160 bor-25 grow border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 ">

                    <CiHeart /> Add to WishList
                  </button>
                  <div className='hover:border-primary-300 bor-25 hover:text-primary-600 cursor-pointer w-15 flex justify-center items-center border border-gray-300 p-1  '>
                    <FaShareAlt />
                  </div>

                 
                </div>
                 <div>

                    <div className="border-t border-gray-100 pt-6">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
    <FaTruckFast />   </div>
      <div>
        <h4 className="font-medium text-gray-900 text-sm">
  Free Delivery</h4>
        <p className="text-xs text-gray-500">Orders over $50</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
     <FaArrowRotateLeft /> </div>
      <div>
        <h4 className="font-medium text-gray-900 text-sm">  30 Days Return</h4>
        <p className="text-xs text-gray-500">Money back</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
     <FaShieldAlt />
      </div>
      <div>
        <h4 className="font-medium text-gray-900 text-sm">
         
Secure Payment</h4>
        <p className="text-xs text-gray-500">100% Protected</p>
      </div>
    </div>
  </div>
</div>

                  </div>
              </div>
            </div>
          </div>
        </Card>
<div className='mt-15 border border-gray-300 py-10'>
  
    <Tabs defaultValue="overview">
      <TabsList variant="line" className=' w-full justify-start  '>
       <div className='border-b border-b-gray-300 flex w-full justify-start items-center'>
     <div className='w-1/2 flex '>
          <TabsTrigger value=" Details" className=' flex items-center gap-2 px-2 md:px-6 py-4 text-sm md:text-lg font-semibold  whitespace-nowrap transition-all duration-200 text-gray-600 bg-primary-500 hover:text-primary-600 hover:bg-gray-50'> 
           <FaBox />Product Details
           </TabsTrigger>
        <TabsTrigger value="analytics" className=' flex items-center gap-2 px-2 md:px-6 py-4 text-sm md:text-lg font-semibold whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-primary-600 hover:bg-gray-50'>< CiStar/> Analytics</TabsTrigger>
        <TabsTrigger value="reports" className='  flex items-center gap-2 px-2 md:px-6 py-4  text-sm md:text-lg font-semibold whitespace-nowrap transition-all duration-200 text-gray-500 hover:text-primary-600 hover:bg-gray-50'>
          <FaTruckMoving />Reports</TabsTrigger>
     </div>
       </div>

      </TabsList>
   <TabsContent value=" Details"> 
    <div className='p-6'>
   <div>
    <h2 className='text-lg font-semibold text-gray-900 mb-3'>About Product</h2>
    <p className='text-gray-600 leading-relaxed'> {product.description}</p>
   </div>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
 <div className='bg-gray-50 rounded-lg my-4 p-4 space-y-2'>
 <h4 className='font-medium text-lg text-gray-900 mb-3'>Product Information </h4>
 <div className='flex justify-between text-sm'>
<span className='text-gray-500'> Categories</span>
<span className='text-gray-900 font-medium'>{product.category.name}</span>
 </div>
  <div className='flex justify-between text-sm'>
<span className='text-gray-500'> Brand </span>
<span className='text-gray-900 font-medium'>{product.brand.name}</span>
 </div>
 
  <div className='flex justify-between text-sm'>
<span className='text-gray-500'>Items Sold </span>
<span className='text-gray-900 font-medium'>{product.sold} + sold</span>
 </div>
 </div>
   </div>
   <div className='bg-gray-50 rounded-lg p-4 space-y-2'>
<h4 className='font-medium text-gray-900 mb-3 text-lg'>
  Key Features
</h4>
<p className='flex items-center text-sm text-gray-600'>
  
<FaCheck className='text-primary-600 mx-2'  /> Premium Quality Product
</p>
<p className='flex items-center text-sm text-gray-600'>
  
<FaCheck className='text-primary-600 mx-2' /> 100% Authentic Guarantee
</p>
<p className='flex items-center text-sm text-gray-600'>
  
<FaCheck className='text-primary-600 mx-2' /> Fast & Secure Packaging
</p>
<p className='flex items-center text-sm text-gray-600'>
  
<FaCheck className='text-primary-600 mx-2' /> Quality Tested
</p>
   </div>
    </div>
   </TabsContent>

 <TabsContent value="analytics"> 

<div className='p-10'>
 <div>
   <p className='text-5xl font-bold text-black'>
  {product.ratingsAverage}
</p>

  <div className='flex'>
     {[...Array(5)].map((ele, i) => (
                    i < Math.floor(product.ratingsAverage) ? (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ) : (
                      <CiStar key={i} className="text-gray-300 text-xl" />
                    )
                  ))}
               
  </div>
     <p className='text-sm text-gray-500 mt-2'>Based on 5 reviews</p>
   
  </div> 
   <div>
    {/* <RatingProduct ratings={product.review.map((pro)=>{return pro.rating})}/> */}

    </div></div>
 </TabsContent>
<TabsContent value="reports"> 


   <div className="p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Shipping */}
          <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                <FaTruckMoving className='text-2xl'/>
              </div>
              <h4 className="font-semibold text-gray-900">
                Shipping Information
              </h4>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-600"><FaCheck/></span>
                <span>Free shipping on orders over $50</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-600"><FaCheck/></span>
                <span>Standard delivery: 3-5 business days</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-600"><FaCheck/></span>
                <span>Express delivery available (1-2 business days)</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-600"><FaCheck/></span>
                <span>Track your order in real-time</span>
              </li>
            </ul>
          </div>

          {/* Returns */}
          <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
               <BsArrowCounterclockwise className='text-2xl' />
              </div>
              <h4 className="font-semibold text-gray-900">
                Returns & Refunds
              </h4>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600"><FaCheck/></span>
                <span>30-day hassle-free returns</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600"><FaCheck/></span>
                <span>Full refund or exchange available</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600"><FaCheck/></span>
                <span>Free return shipping on defective items</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600"><FaCheck/></span>
                <span>Easy online return process</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Protection */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
          <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
           <FaShieldAlt className='text-3xl'/>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Buyer Protection Guarantee
            </h4>
            <p className="text-sm text-gray-600">
              Get a full refund if your order doesn't arrive or isn't as described.
              We ensure your shopping experience is safe and secure.
            </p>
          </div>
        </div>

      </div>
    </div>
</TabsContent>
 </Tabs>
</div>

      </div>
    </main>
  )
}