'use client'

import Image from "next/image"
import bg from '../imagesUsed/bg.jpg'

import Navbar from "@/components/Navbar/Navbar"
import Perks from "@/components/PerksCard/Perks"
import FetchProducts from "@/components/AllProducts/FetchProducts"
import { useState } from "react"

export default function Home() {

  const [search, setSearch] = useState("")
  console.log(search)

  return (
    <div className="relative">
      <background className="background">
        <Image src={bg} fill style={ {objectFit: "cover"} }/>
      </background>
      <main className="h-screen mx-4 lg:mx-0">
        <section className="relative min-h-fit lg:h-full">
          <Navbar />
          <p className="quote text-4xl lg:text-5xl tracking-wider">See. Like. Buy</p>
          <Perks />
        </section>
        <section className="flex flex-col items-center">
          <div className="flex flex-col gap-4 lg:flex lg:flex-row items-center justify-between w-full">
            <div>
              <h1 className="lg:text-7xl mt-4 text-6xl font-bold text-black text-center lg:text-left lg:mt-12 lg:ml-12">Our <br/>Catalogue.</h1>
              <p className="lg:ml-12 lg:mt-4 text-center lg:text-left font-semibold lg:text-3xl text-2xl">A product for <span className="blue">every need.</span></p>
            </div>
            <div className="lg:mr-8 mr:0 flex flex-col gap-8">
              <input type="text" placeholder="Search by name." className="bg-gray-100 p-8 text-center rounded-2xl lg:w-96 w-72 " value={search} onChange={(e) => setSearch(e.target.value)}></input>
              <div className="flex justify-center items-center gap-4">
                <p>Sort by:</p>
                <select className="bg-gray-100 p-2 rounded-lg text-center">
                  <option>None</option>
                  <option>Price</option>
                  <option>Name</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
          </div>
          <FetchProducts searchName = {search}/>
        </section>
        
      </main>
    </div>
  )
}
