import Link from "next/link";
 import { CiHeart } from "react-icons/ci";
 import { FaArrowRight } from "react-icons/fa";
export default function WishlistEmpty() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-sm mx-auto text-center">
          
          <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
          
<CiHeart className="size-12" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Browse products and save your favorites here. Sign in to sync your wishlist across devices.
          </p>

          <div className="flex flex-col gap-3">
            
            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Products
             
<FaArrowRight />
            </Link>

           <Link
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          href="/"
       >
        Sign In
       </Link>

          </div>
        </div>
      </div>
    </div>
  );
}