'use client'
import Link from "next/link";


export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">


      {/* Content */}
      <div className="relative z-10 max-w-xl w-full">
        <div className="flex justify-center mb-10">
          <div className="relative">

            <div className="absolute inset-0 w-64 h-52 sm:w-72 sm:h-60 bg-primary-100/50 rounded-[32px] blur-2xl"></div>

            <div className="relative w-64 h-52 sm:w-72 sm:h-60">
              <div className="absolute inset-x-0 top-4 mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 bg-linear-to-br from-primary-50/80 via-transparent to-primary-100/40"></div>
                
              
              </div>

              {/* 404 badge */}
              <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <span className="text-xl sm:text-2xl font-black text-white">
                      404
                    </span>
                  </div>
                </div>
              </div>

        
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-primary-400"></div>
                <div className="w-8 h-4 border-b-[3px] border-primary-400 rounded-b-full"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-400"></div>
              </div>

            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Oops! Nothing Here
          </h1>

          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <Link
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
          >

            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg transition-all shadow-md border border-gray-200 hover:-translate-y-1"
          >
            Go Back
          </button>

        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase mb-4">
            Popular Destinations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">

            <Link href="/product" className="px-5 py-2.5 rounded-xl bg-primary-50 text-primary-700 font-semibold text-sm hover:bg-primary-100">
              All Products
            </Link>

            <Link href="/categories" className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200">
              Categories
            </Link>

            <p  className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200">
              Today's Deals
            </p>

            <p className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200">
              Contact Us
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}