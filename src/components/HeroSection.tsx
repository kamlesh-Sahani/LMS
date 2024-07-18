import React from "react";

export default function HeroSection() {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-2xl text-gray-600 font-inter">DON BOSCO INSTITUTE OF TECHNOLOGY</h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                   Welcome To Leave Management System
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        
                    </span>
                </p>

                <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-700 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                        role="button"
                    >
                       Apply for Leave
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-700 focus:bg-blue-700 hover:text-white focus:text-white hover:border-blue-700 focus:border-blue-700"
                        role="button"
                    >
                       Login Your Account
                    </a>
                </div>

                <p className="mt-8 text-base text-gray-500 font-inter">Effortlessly manage and track your leave request with our comprehensive Leave Management System</p>
            </div>
        </div>

        <div className="pb-12 bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div className="relative mx-auto">
                    <div className="lg:max-w-6xl lg:mx-auto flex justify-center items-center mt-10">
                        <img className="transform scale-110" src="home.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
