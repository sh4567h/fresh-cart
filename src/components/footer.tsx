import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
 import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Logo + Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
                    <div className="flex items-center gap-7 justify-center">
            <span className="text-primary-600 ">
<GiShoppingCart className="size-7" /></span>
          <Link href="/" className="text-white font-bold text-xl">FreshCart</Link>
       
         
        </div>
            </Link>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>

            <div className="space-y-3 mb-6">

              <Link href="tel:+18001234567" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 text-sm">
                 <span>+1 (800) 123-4567</span>
              </Link>

              <Link href="mailto:support@freshcart.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 text-sm">
                 <span>support@freshcart.com</span>
              </Link>

              <div className="flex items-start gap-3 text-gray-400 text-sm">
                    <span>123 Commerce Street, New York, NY 10001</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
             
<FaFacebook />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
               
<FaTwitter />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <FaInstagram />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/product" className="text-gray-400 hover:text-primary-400 text-sm">All Products</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-primary-400 text-sm">Categories</Link></li>
              <li><Link href="/brand" className="text-gray-400 hover:text-primary-400 text-sm">Brands</Link></li>
              <li><Link href="/electronics" className="text-gray-400 hover:text-primary-400 text-sm">Electronics</Link></li>
              <li><Link href="/men" className="text-gray-400 hover:text-primary-400 text-sm">Men's Fashion</Link></li>
              <li><Link href="/women" className="text-gray-400 hover:text-primary-400 text-sm">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li><Link href="/login" className="text-gray-400 hover:text-primary-400 text-sm">My Account</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-primary-400 text-sm">Order History</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-primary-400 text-sm">Wishlist</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-primary-400 text-sm">Shopping Cart</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-primary-400 text-sm">Sign In</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-primary-400 text-sm">Create Account</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Support</h3>
            <ul className="space-y-3">
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Contact Us</p></li>
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Help Center</p></li>
              <li><p className="text-gray-400 hover:text-primary-400 text-sm">Shipping Info</p></li>
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Returns & Refunds</p></li>
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Track Order</p></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Legal</h3>
            <ul className="space-y-3">
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Privacy Policy</p></li>
              <li><p className="text-gray-400 hover:text-primary-400 text-sm">Terms of Service</p></li>
              <li><p  className="text-gray-400 hover:text-primary-400 text-sm">Cookie Policy</p></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © 2026 FreshCart. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-gray-500 text-sm">

              <div className="flex items-center gap-2">
              
                <span>Visa</span>
              </div>

              <div className="flex items-center gap-2">
              
                <span>Mastercard</span>
              </div>

              <div className="flex items-center gap-2">
              
                <span>PayPal</span>
              </div>

            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}