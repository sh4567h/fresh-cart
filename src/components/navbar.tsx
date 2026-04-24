"use client";

import * as React from "react";
import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import { Menu, X } from "lucide-react";
import { CiHeadphones, CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";

const components: { title: string; href: string }[] = [
  { title: "All Categories", href: "/categories" },
  { title: "Men's fashion", href: "/men" },
  { title: "Women's fashion", href: "/women" },
  { title: "Electronic", href: "/electronics" },
  { title: "Beauty & Health", href: "/product" },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-gray-500">{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center gap-6">
          
             <div className="flex items-center gap-4 md:gap-7 flex-1 md:flex-initial">
            <span className="text-primary-600">
              <GiShoppingCart className="size-7" />
            </span>
            <Link href="/" className="text-black font-bold text-xl whitespace-nowrap">
              FreshCart
            </Link>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for product....."
                className="w-64 lg:w-80 px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
              />
            </div>
          </div>

             <div className="hidden lg:flex items-center gap-4">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="px-3 py-2 text-gray-700 hover:text-[#2B7F4B] font-medium"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Shop */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/shop"
                      className="px-3 py-2 text-gray-700 hover:text-[#2B7F4B] font-medium"
                    >
                      Shop
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Categories Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#2B7F4B] font-medium bg-transparent data-[state=open]:bg-transparent">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white text-black p-4 rounded-3xl">
                    <ul className="grid w-56 gap-2 p-4">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Brands */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/brand"
                      className="px-3 py-2 text-gray-700 hover:text-[#2B7F4B] font-medium"
                    >
                      Brands
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Support */}
            <Link
              href="/contact"
              className="flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <CiHeadphones className="text-primary-600 size-4" />
              </div>
              <div className="text-xs">
                <div className="text-gray-400">Support</div>
                <div className="font-semibold text-gray-700">24/7 Help</div>
              </div>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              title="Wishlist"
              className="relative p-2.5 rounded-full hover:bg-primary-50 transition-colors"
            >
              <CiHeart className="size-5" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              title="Cart"
              className="relative p-2.5 rounded-full hover:bg-primary-50 transition-colors"
            >
              <GiShoppingCart className="size-5" />
            </Link>

            {/* Sign In */}
            <Link
              href="/login"
              className="flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20"
            >
              <FaUser />
              Sign In
            </Link>
          </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
  <SheetTrigger asChild>
    <button title='button' className="lg:hidden w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors">
      <Menu className="size-5" />
    </button>
  </SheetTrigger>

   <SheetContent 
    side="right" 
    className="w-75 sm:w-80 p-0  bg-white!"  
    style={{ backgroundColor: 'white' }}  
  >
      <SheetHeader className="border-b border-b-gray-300 p-4 flex flex-row items-center justify-between bg-white">
      <SheetTitle className="flex items-center gap-2">
        <GiShoppingCart className="size-5 text-primary-600" />
        <span className="text-black font-bold">FreshCart</span>
      </SheetTitle>
      <SheetClose className="rounded-full p-2 hover:bg-gray-100 transition-colors">
          </SheetClose>
    </SheetHeader>

      <div className="flex flex-col h-full bg-white">

        <div className="flex-1 bg-white">
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#2B7F4B] font-medium rounded-lg transition-colors"
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#2B7F4B] font-medium rounded-lg transition-colors"
          >
            Shop
          </Link>

          <Link
            href="/brand"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#2B7F4B] font-medium rounded-lg transition-colors"
          >
            Brands
          </Link>

             <div className="mt-1">
            <div className="px-4 py-3 text-gray-700 font-medium">
              Categories
            </div>
            <div className="pl-3 space-y-1">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#2B7F4B] rounded-lg transition-colors"
                >
                  {component.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

        <div className="border-t border-t-gray-300 p-4 space-y-1 bg-white">
        <Link
          href="/wishlist"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CiHeart className="size-5" />
          <span>Wishlist</span>
        </Link>

        <Link
          href="/cart"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <GiShoppingCart className="size-5" />
          <span>Cart</span>
        </Link>

        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CiHeadphones className="size-5" />
          <span>Support</span>
        </Link>

      <div className=" flex  gap-1.5">
          <Link
          href="/login"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors"
        >
          <FaUser />
          Sign In
        </Link>
         <Link
          href="/register"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-center gap-2 mt-4 px-5 py-2.5 rounded-full text-primary-600 border border-primary-600  hover:bg-primary-700 bg-white text-sm font-semibold transition-colors"
        >
          <FaUser />
          Sign Up
        </Link>
      </div>

      </div>
    
    </div>
  </SheetContent>
</Sheet>
        </div>

         <div className="mt-4 md:hidden">
          <input
            type="text"
            placeholder="Search for product....."
            className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
          />
        </div>
      </div>
    </nav>
  );
}