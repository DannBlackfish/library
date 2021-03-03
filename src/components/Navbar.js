import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

<div class="relative bg-white">
  <div class="relative z-20 shadow">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
      <div>
          <Link to="/">
        <p  class="flex">
         <img class="w-12" src="./logos-de-libros-1.png" alt=""/>
        </p>
          </Link>
      </div>
     
      <div class="md:flex-1 md:flex md:items-center md:justify-between">
        <nav class="flex space-x-10">
          
          <div class="relative">
           
            
          </div>
        </nav>
        <div class="flex items-center md:ml-12">
          <Link to="/login">
          <p class="text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </p>
          </Link>
          <Link to="/signup">
          <p  class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </p>
          </Link>
        </div>
      </div>
    </div>
  </div>


  
</div>

        </>
    )
}
