"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {signIn} from 'next-auth/react'
import loginImge from '../../../../public/registerImage.png'
import {
    LoginSchema,
    loginSchema,
 
} from "@/schemas/auth.schema";
import { ApiLogin } from "@/services/auth.services";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import  Image from 'next/image';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
    const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
     
      email: "",
     
      password: "",
    },
  });

 async function handleRegister(data: LoginSchema) {
//     console.log(data);
//     const response = await ApiLogin(data)
//     console.log(response)
//     if(response.message==="success"){
// 
//     }else{
//        
//     }
const response =await signIn('credentials',{
    email:data.email,
    password:data.password,
    redirect:false,
    // callbackUrl:"/"
})
console.log(response)
if(response?.ok){
  router.push('/')
 toast.success('User login Successfully')
} else{
 toast.error(response?.error ||'User login failed')
}
// const dataRegister = await response.json()
  }

  const inputClass =
    "h-11 w-full rounded-md px-4 text-sm border transition-all outline-none " +
    "focus:ring-2 focus:ring-primary-600 focus:border-primary-600";

  const errorClass =
    "border-red-500 focus:ring-red-500 focus:border-red-500";

  const defaultClass = "border-gray-200";

  return (
    <div id="login-section" className="container py-16 mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Left Side */}
        <div className="hidden lg:block ">
          <div className="text-center space-y-20">

            <div className="w-full h-96  bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
              <Image alt='loginImge' src={loginImge}/>
            </div>

            <div className="space-y-4 my-20 ">
              <h2 className="text-3xl font-bold text-gray-800">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>

              <p className="text-lg text-gray-600">
                Join thousands of happy customers who trust FreshCart for their daily grocery needs
              </p>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">

                <div className="flex items-center">
                  🚚 <span className="ml-2">Free Delivery</span>
                </div>

                <div className="flex items-center">
                  🔒 <span className="ml-2">Secure Payment</span>
                </div>

                <div className="flex items-center">
                  ⏰ <span className="ml-2">24/7 Support</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">

            <div className="text-center mb-8">
              <span className="text-3xl font-bold text-primary-600">Fresh<span className="text-gray-800">Cart</span></span>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back!
              </h2>
              <p className="text-gray-600">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3 mb-6">

              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl">
                <FaGoogle className="text-red-600 size-4" /> <span>Continue with Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl">
               <FaFacebookF className="text-blue-600 size-4" /><span>Continue with Facebook</span>
              </button>

            </div>
   <div className="relative my-6"><div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-200" /></div><div className="relative flex justify-center text-sm">
    <span className="px-4 bg-white text-gray-500 font-medium">OR CONTINUE WITH EMAIL</span></div></div>
   
   <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="space-y-5"
        >

          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1">
                <FieldLabel>Email*</FieldLabel>

                <Input
                  {...field}
                  type="email"
                  placeholder="ali@example.com"
                  className={`${inputClass} ${
                    fieldState.error ? errorClass : defaultClass
                  } h-11 border border-gray-200 bor-15 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600`}
                />

                {fieldState.error && (
                     <p className="text-red-600">{fieldState.error.message}
             </p>  
                )}
              </Field>
            )}
          />

         

          {/* Password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1">
                <FieldLabel>Password*</FieldLabel>

                <Input
                  {...field}
                  type="password"
                  className={`${inputClass} ${
                    fieldState.error ? errorClass : defaultClass
                  } h-11 border border-gray-200 bor-15 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600`}
                />

                {fieldState.error && (
                      <p className="text-red-600">  {fieldState.error.message}
             </p>  
                )}
              </Field>
            )}
          />

        

          {/* Button */}
          <button
            type="submit"
            className="w-full h-11 bg-primary-600 text-white rounded-md hover:opacity-90 transition font-medium"
          >
          login
          </button>

          <p className="text-gray-600">New to FreshCart?
            <Link className="text-primary-600 hover:text-primary-700 ms-2 font-semibold cursor-pointer" href="/register">Create an account</Link>
            </p>
        </form>
          </div>
        </div>

      </div>
    </div>
  );
}

//  <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm border">
//         <h1 className="text-xl font-semibold mb-6">Create Account</h1>

//         
//       
//       </div>
//     </main>