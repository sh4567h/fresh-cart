"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import reImage from '../../../../public/review-author.webp'
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  registerSchema,
  RegisterSchema,
} from "@/schemas/auth.schema";
import { ApiRegister } from "@/services/auth.services";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import Image from "next/image";
import { FaFacebookF, FaGoogle, FaShieldAlt, FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function Register() {
    const router = useRouter()
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
     rePassword: "",
    },
  });

 async function handleRegister(data: RegisterSchema) {
    console.log(data);
    const response = await ApiRegister(data)
    console.log(response)
    if(response.message==="success"){
  router.push('/login')
 toast.success('User Register Successfully')
    }else{
        toast.error('User Register failed')
    }
  }

  const inputClass =
    "h-11 w-full rounded-md px-4 text-sm border transition-all outline-none " +
    "focus:ring-2 focus:ring-primary-600 focus:border-primary-600";

  const errorClass =
    "border-red-500 focus:ring-red-500 focus:border-red-500";

  const defaultClass = "border-gray-200";
  return (
    <main className="py-10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">

        {/* LEFT SECTION */}
        <div>

          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-primary-600">FreshCart</span>
          </h1>

          <p className="text-xl mt-2 mb-4">
            Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
          </p>

          <ul className="space-y-6 my-8">

            <li className="flex items-start gap-4">
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <FaStar  className="text-primary-600"/>
           
              </div>
              <div>
                <h2 className="text-lg font-semibold">Premium Quality</h2>
                <p className="text-gray-600">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <FaTruckFast className="text-primary-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Fast Delivery</h2>
                <p className="text-gray-600">Same-day delivery available in most areas</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                <FaShieldAlt className="text-primary-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Secure Shopping</h2>
                <p className="text-gray-600">Your data and payments are completely secure</p>
              </div>
            </li>

          </ul>

          {/* REVIEW */}
          <div className="review bg-white shadow-sm p-4 rounded-md">

            <div className="author flex items-center gap-4 mb-4">

              <div className="size-12 rounded-full bg-gray-200" >
  <Image src={ reImage} alt=' reImage' className="w-full"/>
           </div>
              <div>
                <h3>Sarah Johnson</h3>
                <div className="rating flex gap-1 text-yellow-300">
                 <FaStar  className="text-yellow-300"/>
                  <FaStar  className="text-yellow-300"/>
           
            <FaStar  className="text-yellow-300"/>
           
            <FaStar  className="text-yellow-300"/>
            <FaStar  className="text-yellow-300"/>
           
                </div>
              </div>

            </div>

            <blockquote>
              <p className="italic text-gray-600">
                "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
              </p>
            </blockquote>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10">

          <h2 className="text-center text-3xl font-semibold mb-2">
            Create Your Account
          </h2>

          <p className="text-center">
            Start your fresh journey with us today
          </p>

          <div className="register-options flex gap-2 grow my-10">

            <div  className="btn border w-60 bor-15 p-3 border-gray-300 hover:bg-gray-100 flex justify-center items-center">
             <FaGoogle className="size-4 text-red-500 mx-2" />
              <span>Google</span>
            </div>

            <div  className="btn border  w-60 bor-15 p-3 border-gray-300 hover:bg-gray-100 flex justify-center items-center">
             <FaFacebookF className="size-4 text-blue-500 mx-2" />
              <span>Facebook</span>
            </div>

          </div>

          {/* divider */}
          <div className="my-4 text-center text-gray-400">OR</div>

         <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="space-y-5"
        >
          {/* Name */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1">
                <FieldLabel>Name*</FieldLabel>

                <Input
                  {...field}
                  placeholder="Ali"
                  className={`${inputClass} ${
                    fieldState.error ? errorClass : defaultClass
                  } h-11 border bor-15 border-gray-200 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600`}
                  
                />

                {fieldState.error && (
                     <p className="text-red-600"> {fieldState.error.message}
             </p>  
                )}
              </Field>
            )}
          />

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

          {/* Phone */}
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1">
                <FieldLabel>Phone*</FieldLabel>

                <Input
                  {...field}
                  type="tel"
                  placeholder="010xxxxxxxx"
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

          {/* Confirm Password */}
          <Controller
            name="rePassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1">
                <FieldLabel >Confirm Password*</FieldLabel>

                <Input
                  {...field}
                  type="password"
                  className={`${inputClass} ${
                    fieldState.error ? errorClass : defaultClass
                  } h-11 border border-gray-200 bor-15 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600`}
                />

                {fieldState.error && (
                <p className="text-red-600">   {fieldState.error.message}
             </p>   )}
              </Field>
            )}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full h-11 bg-primary-600 text-white rounded-md hover:opacity-90 transition font-medium"
          >
            Create Account
          </button>
        </form>

          <p className="text-center mt-6">
            Already have an account? <a href="/login" className="text-primary-600">Sign In</a>
          </p>

        </div>

      </div>
    </main>
  );
}

 