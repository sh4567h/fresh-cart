
import ProducCardt from "@/components/commen/ProductCard";
import { brandI, productI } from "@/types/product.types";
import Link from "next/link";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 import ImageCar from '../../public/grocery-banner.png'
export default async function Home() {

  const response = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
    method: 'Get'
  })

  const data = await response.json()
  const products: productI[] = data.data
  console.log(products)

 const categResponse = await fetch('https://ecommerce.routemisr.com/api/v1/categories', {
    method: 'Get'
  })


const categData = await categResponse.json()
const categories:brandI[] = categData.data




  
  return (
    <main>
   <div className="relative max-w-full mx-auto">
  <Carousel>
    <CarouselContent>
      <CarouselItem>
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <Image src={ImageCar} alt="Delivery service 1" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50" />
        
         <div className="absolute w-70 m-auto bottom-6 left-6  z-10 text-white text-left">
    <h2 className="text-3xl md:text-5xl font-bold leading-tight">Fast & Free<br />Delivery</h2>
    <p className="text-md md:text-lg mt-2 opacity-90">Same day delivery available</p>
    <div className="flex gap-4 mt-4">
      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-gray-100 transition">
        Order Now
      </button>
      <button className="border border-white text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/20 transition">
        Delivery Info
      </button>
    </div>
  </div>
        
        </div>
      </CarouselItem>




      <CarouselItem>
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <Image src={ImageCar} alt="Delivery service 2" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50" />
        
   <div className="absolute w-70 m-auto bottom-6 left-6  z-10 text-white text-left">
    <h2 className="text-3xl  font-bold leading-tight">Fresh Products Delivered <br/> to your Door</h2>
    <p className="text-md md:text-lg mt-2 opacity-90">Get 20% off your first order</p>
    <div className="flex gap-4 mt-4">
      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-gray-100 transition">
       Shop now
      </button>
      <button className="border border-white text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/20 transition">
       view Details
      </button>
    </div>
  </div>

        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <Image src={ImageCar} alt="Delivery service 3" className="w-full h-auto object-cover" />
           <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/50" />
        
   <div className="absolute w-70 m-auto bottom-6 left-6  z-10 text-white text-left">
    <h2 className="text-3xl  font-bold leading-tight">Premium Quality <br/> Guaranteed</h2>
    <p className="text-md md:text-lg mt-2 opacity-90">Fresh from farm to your table</p>
    <div className="flex gap-4 mt-4">
      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-gray-100 transition">
       Shop now
      </button>
      <button className="border border-white text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/20 transition">
      Learn more
      </button>
    </div>
  </div>
       
       
       
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg border-0" />
    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg border-0" />
  </Carousel>

  
</div>
      <div className="container mx-auto px-2 sm:px-4">
 <div className="flex items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full " > </div>
        <h2 className="text-3xl font-bold text-gray-800">
         Shop by <span className="text-emerald-600">Categries</span></h2>
            </div>



<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 ">
 {categories.map((pro)=>{
    return < div key={pro._id } className=" border bor-25 border-gray-300 rounded-4xl shadow-sm  transition hover:shadow-md ">
    <div className="bg-white rounded-4xl p-4 text-center  cursor-pointer" >
  <Link className=" w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3" href={`/categories/${pro._id}`}>
   < Image alt={pro.name} width={1000} height={1000} src={pro.image} />
     </Link>
    <h3 className="font-medium">{pro.name}</h3>
    </div>
    </div>
    
    
 })} 
  
      </div>
      
<div className="py-10">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-6">

      {/* Card 1 */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
            <span>🔥</span>
            <span>Deal of the Day</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Fresh Organic Fruits
          </h3>

          <p className="text-white/80 mb-4">
            Get up to 40% off on selected organic fruits
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl font-bold">40% OFF</div>
            <div className="text-sm text-white/70">
              Use code: <span className="font-bold text-white">ORGANIC40</span>
            </div>
          </div>

          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
            <span>✨</span>
            <span>New Arrivals</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Exotic Vegetables
          </h3>

          <p className="text-white/80 mb-4">
            Discover our latest collection of premium vegetables
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl font-bold">25% OFF</div>
            <div className="text-sm text-white/70">
              Use code: <span className="font-bold text-white">FRESH25</span>
            </div>
          </div>

          <a
            href="/products?sort=newest"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
      <div className="flex items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full " > </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Featured <span className="text-emerald-600">Products</span></h2>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-3 py-3">
          {products.map((pro) => {
            return (
              <div key={pro.id} className="col-span-1">
               <ProducCardt pro={pro}/>
              </div>
            )
          })}
        </div>







        <section>
       <div className="relative grid lg:grid-cols-5 gap-8 p-8  bor-25 lg:p-14  bg-linear-to-br from-primary-50/80 to-transparent">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bor-25 shadow-lg bg-primary-500 shadow-primary-500/30">
              <FaEnvelope className="text-white text-2xl" />
               </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Newsletter</h3>
                <p className="text-xs text-gray-500">50,000+ subscribers</p>
                </div>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                    Get the Freshest Updates  <span className="text-emerald-600"> Delivered Free</span>
                    </h2>
                    <p className="text-gray-500 mt-3 text-lg">Weekly recipes, seasonal offers exclusive member perks.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                      <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                         </div>
                        <span className="text-sm font-medium text-gray-700 flex gap-1 relative"> <FaFeatherPointed className="text-primary-500 absolute right-33 top-1" />Fresh Picks Weekly</span>
                        </div>
                        <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                        <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                           </div>
                            <span className="text-sm font-medium text-gray-700 relative"><FaVanShuttle className="text-primary-500 absolute right-34 top-1" /> Free Delivery Codes</span>
                            </div>
                            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                            <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                                </div>
                                <span className="text-sm font-medium text-gray-700 relative"> <FaBookmark className="text-primary-500 absolute right-35 top-1" />Members-Only Deals</span>
                                </div>
                                </div>
                                <form className="pt-2">
                                  <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1">
                                      <input placeholder="you@example.com" className="w-full pl-5 pr-5 py-4 bg-white bor-25  border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-base shadow-sm" required type="email"  />
                                      </div>
                                      <button type="submit" className="group flex items-center bor-25 justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]">
                                      <span>Subscribe</span>
                                       </button>
                                      </div>
                                      <p className="text-xs text-gray-400 mt-3 pl-1">✨ Unsubscribe anytime. No spam, ever.</p>
                                      </form>
                                      </div>
                                      <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
                                        <div className="h-full flex flex-col justify-center">
                                          <div className=" bor-25 bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" ></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" ></div>
                                            <div className="relative space-y-5 bor-25">
                                              <div className=" bg-emerald-500/20 text-emerald-400 text-xs flex  gap-1 font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                                             <MdOutlinePhoneAndroid className="text-black" /> MOBILE APP
                                              </div>
                                              <h3 className="text-2xl font-bold leading-tight">Shop Faster on Our App</h3>
                                              <p className="text-gray-400 text-sm leading-relaxed">Get app-exclusive deals 15% off your first order.</p>
                                              <div className="flex flex-col gap-3 pt-2">
                                                <Link href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                                                  <div className="text-left">
                                                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on</div>
                                                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                                                  </div>
                                                  </Link>
                                                  <Link href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                                                   <div className="text-left">
                                                    <div className="text-[10px] text-gray-400 uppercase tracking-wide">Get it on</div>
                                                    <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                                                    </div>
                                                    </Link>
                                                    </div>
                                                    <div className="flex items-center gap-2 pt-2 text-sm">
                                                      <span className="text-yellow-400 flex gap-1"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                      <span className="text-gray-400">4.9 • 100K+ downloads</span>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
    </section>
      </div>
    </main>
  );
}