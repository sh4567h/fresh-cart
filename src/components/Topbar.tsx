import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUserPlus } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden lg:block text-sm border-b border-gray-100 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">

          {/* left info */}
          <div className="flex items-center gap-6 text-gray-500">

            <span className="flex text-sm  items-center gap-2">
              {/* [Truck Icon] */}
              <span>Free Shipping on Orders 500 EGP</span>
            </span>

            <span className="flex items-center gap-2">
              {/* [Gift Icon] */}
              <span>New Arrivals Daily</span>
            </span>

          </div>

          {/* right section */}
          <div className="flex items-center gap-6">

            <div className="flex items-center gap-4 text-gray-500">

              <Link
                href="tel:+18001234567"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
               <FaPhoneAlt className="size-4" />
                <span>+1 (800) 123-4567</span>
              </Link>

              <Link
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <FaEnvelope className="size-4" />
                <span>support@freshcart.com</span>
              </Link>

            </div>

            <span className="w-px h-4 bg-gray-200"></span>

            <div className="flex items-center gap-4">

              <Link
                href="/login"
                className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
              >
               <FaUserPlus className="size-4" />
                <span>Sign In</span>
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
              >
               <FaUserPlus className="size-4" />
                <span>Sign Up</span>
              </Link>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}