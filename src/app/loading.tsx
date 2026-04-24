import React from 'react'
import { Spinner } from "@/components/ui/spinner"
export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
  <Spinner className='size-8  text-primary-600' />
  <p className='text-xl text-black  font-bold'>Products is loading</p>

    </div>
  )
}
