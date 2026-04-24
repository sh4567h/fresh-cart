import React from 'react'
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import ButtonHome from './ButtonHome';
import { productI } from '@/types/product.types';

export default function ProducCardt({pro} : {pro : productI}) {


  return (
    <>
        <Card className="w-full h-120 ring-0 border bor-25 rounded-2xl border-gray-300 hover:shadow-xl overflow-hidden transition-all hover:-translate-y-2">
                  <CardHeader className="h-60.5 relative">
                    <Image 
                      src={pro.imageCover} 
                      alt={pro.title} 
                      width={1000}
                      height={1000}
                      className="w-full h-60 object-contain bg-white"
                    />
                     {true&&pro.priceAfterDiscount&& <div className="bg-red-700 text-white rounded-3xl flex-nowrap w-12 p-2 text-center absolute left-20 md:left-10 top-5">
                     { Math.ceil(((pro.priceAfterDiscount / pro.price) * 100 -100)) }%
                    </div> }
                   
                    <CardAction className="flex flex-col gap-2 absolute top-2 right-2">
                      <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600">
                        <Link href='/wishList' className="group-hover:text-red-500"> 
                          <CiHeart className="text-xl font-extrabold text-black hover:text-red-500" /> 
                        </Link>
                      </div>
                      <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-primary-500">
                        <Link href=""> 
                          <BsArrowRepeat className="text-xl hover:text-primary-600 font-bold text-black" />
                        </Link>
                      </div>
                      <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-primary-500">
                        <Link href={`/product/${pro._id}`} className="group-hover:text-primary-600">
                          <FaEye className="text-xl hover:text-primary-600 font-bold text-black" />
                        </Link>
                      </div>
                    </CardAction>
                  </CardHeader>

                  <CardContent className="border-0">
                    <div className="text-sm text-gray-500 mb-1">
                      <p>{pro.category.name}</p>
                    </div>
                    <CardTitle>
                      <Link className="line-clamp-2 text-base sm:text-lg md:text-xl font-bold" href="/products/6428ebc6dc1175abc65ca0b9">
                        {pro.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center mb-2">
                        <div className="flex text-amber-400 mr-2">
                          {[0, 1, 2, 3, 4].map(function(index) {
                            const rate = index < pro.ratingsAverage ? 
                              <span key={index}> <FaStar className='my-1 text-sm sm:text-xl md:text-2xl text-yellow-500' /> </span> :
                              <span key={index}> <CiStar className='text-base sm:text-2xl md:text-3xl text-yellow-500' /> </span>
                            return rate
                          })}
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                          <p>({pro.ratingsAverage})</p>
                        </div>
                      </div>
                      <div className="flex  justify-between items-center gap-2">
                          <div className="flex flex-col">
                              {true&&pro.priceAfterDiscount&& <div className=" text-primary-600 text-xl font-extrabold p-2 text-center">
                     {pro.priceAfterDiscount  } EGP
                    </div> }

                        <div className={`text-base sm:text-lg ${true&&pro.priceAfterDiscount&& 'line-through decoration-2'} md:text-xl font-bold text-gray-800 py-2`}>
                          {pro.price} EGP
                        </div>
                          </div>
                        <div>
                          <ButtonHome/>
                        </div>
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card> 
    </>
  )
}
