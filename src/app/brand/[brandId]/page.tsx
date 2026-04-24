import ProducCardt from "@/components/commen/ProductCard";
import { productI } from "@/types/product.types";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
 import { HiXMark } from "react-icons/hi2";
 import { FaBoxOpen } from "react-icons/fa";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { brandId: string };
}) {
  const { brandId } =await params;

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`
  );

  const data = await res.json();
const product = await data.data
const prodctId = product._id
console.log(product)

const response = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
    method: 'Get'
  })

  const dataProducts = await response.json()
  const products: productI[] = dataProducts.data
  console.log(products)
  const filteredProducts = products.filter(
  (pro) => pro.brand?._id === prodctId
);
  return (
    <main>
        <div className="bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
  <div className="container mx-auto px-4 py-10 sm:py-14">

    {/* Breadcrumb */}
    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
      <Link className="hover:text-white transition-colors" href="/">
        Home
      </Link>

      <span className="text-white/40">/</span>

      <Link className="hover:text-white transition-colors" href="/brand">
        Brands
      </Link>

      <span className="text-white/40">/</span>

      <span className="text-white font-medium">Canon</span>
    </nav>

    {/* Header */}
    <div className="flex items-center gap-5">

      {/* Image */}
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
     <Image
          src={product.image}
          alt={product.name}
          className="w-10 h-10 object-contain"
          width={1000}
          height={1000}
        />
      </div>

      {/* Text */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {product.name}
        </h1>

        <p className="text-white/80 mt-1">
          Shop {product.name} products
        </p>
      </div>

    </div>
  </div>
 
</div>
 <div className="container m-auto">
    <div className="mb-6 flex items-center gap-3 flex-wrap">

  {/* Label */}
  <span className="flex items-center gap-2 text-sm text-gray-600">
    <span>
<FaFilter /></span>
    Active Filters:
  </span>

  {/* Active filter chip */}
  <Link
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
    href="/products"
  >
    <span><FaTags /></span>
   {product.name}
    <span>
       
<HiXMark />
</span>
  </Link>

  {/* Clear all */}
  <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/product">
    Clear all
  </Link>

</div>
  </div>
     <div>
    {filteredProducts.length > 0 ? (
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-3 py-3">
        {filteredProducts.map((pro) => (
          <div key={pro._id} className="col-span-1">
            <ProducCardt pro={pro} />
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-20">

      
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl text-gray-400"><FaBoxOpen /></span>
        </div>

       
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          No Products Found
        </h3>

       
        <p className="text-gray-500 mb-6">
          No products match your current filters.
        </p>

      
        <Link
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          href="/product"
        >
          View All Products
        </Link>

      </div>
    )}
  </div>

    </main>
  );
}