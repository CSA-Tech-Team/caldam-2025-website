'use client'
import Hotels from "./Hotels";
import AccomdationNotes from "./AccomdationNotes";
import AccomdationByPSG from "./AccomdationByPSG";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react"

export default function AccomdationPrice() {
  const [activeTab, setActiveTab] = useState('standard')

  const rooms = [
    {
      id: "standard",
      type: "Standard Room",
      single: 3304,
      singleTax: 396,
      singleTotal: 3700,
      double: 3973,
      doubleTax: 477,
      doubleTotal: 4450,
    },
    {
      id: "deluxe",
      type: "Deluxe Room",
      single: 4018,
      singleTax: 482,
      singleTotal: 4500,
      double: 4688,
      doubleTax: 563,
      doubleTotal: 5250,
    },
    {
      id: "suite",
      type: "Suite Room",
      single: 4911,
      singleTax: 589,
      singleTotal: 5500,
      double: 4911,
      doubleTax: 589,
      doubleTotal: 5500,
    },
  ]

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* PSG Tech Guesthouse Annexe */}
      <section className="space-y-6">
        {/* Desktop view */}
        <div className="hidden md:block text-center">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th colSpan={4} className="border border-gray-200 p-2 text-sm">PSG Tech Guesthouse Annexe Room Tariff</th>
                <th className="border border-gray-200 p-2 text-sm">Single Occupancy</th>
                <th className="border border-gray-200 p-2 text-sm">Double Occupancy Without tax</th>
                <th className="border border-gray-200 p-2 text-sm">Double Occupancy nett</th>
              </tr>
              <tr>
                <th className="border border-gray-200 p-2 text-sm">S.no</th>
                <th colSpan={2} className="border border-gray-200 p-2 text-sm">Tariff</th>
                <th className="border border-gray-200 p-2 text-sm">Tax (12%)</th>
                <th className="border border-gray-200 p-2 text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 text-center">1</td>
                <td className="border border-gray-200 p-2">Standard Rooms</td>
                <td className="border border-gray-200 p-2 ">892.85</td>
                <td className="border border-gray-200 p-2 text-center">12%</td>
                <td className="border border-gray-200 p-2 ">1000</td>
                <td className="border border-gray-200 p-2 ">1339.28</td>
                <td className="border border-gray-200 p-2 ">1500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 p-4">
            <h2 className="font-semibold">PSG Tech Guesthouse Annexe</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Standard Room</h3>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <dt className="text-gray-600">Single Occupancy:</dt>
                <dd className="font-medium">₹1000</dd>
                <dt className="text-gray-600">Double Occupancy:</dt>
                <dd className="font-medium">₹1500</dd>
                <dt className="text-gray-600">Tax:</dt>
                <dd className="font-medium">12%</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-lg">
          <h2 className="text-2xl font-bold">Note:</h2>
          <p>* The tariff is exclusive of Complimentary Breakfast</p>
          <p>* Our Check - in time 24 hrs</p>
          <p>* Breakfast will be charged Rs. 200 + tax Per Person</p>
        </div>
      </section>

      {/* JADE Residency */}
      <section className="space-y-6">
        <h2 className="text-center text-lg font-semibold text-bluecolor lg:text-2xl">
          <Link href="https://maps.app.goo.gl/nRZi3CusmuXNENSbA" target="_blank" className="hover:underline">
            PSG Tech Guesthouse (JADE Residency)
          </Link>
          <p className="mt-2">Peelamedu, Coimbatore – 641 004</p>
        </h2>

        {/* Desktop view */}
        <div className="hidden md:block text-center">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th colSpan={8} className="border border-gray-200 p-2 text-sm">Room Tariff</th>
              </tr>
              <tr>
                <th className="border border-gray-200 p-2 text-sm">S.no</th>
                <th className="border border-gray-200 p-2 text-sm">Room Type</th>
                <th className="border border-gray-200 p-2 text-sm">Single Occupancy</th>
                <th className="border border-gray-200 p-2 text-sm">Tax (12%)</th>
                <th className="border border-gray-200 p-2 text-sm">Total</th>
                <th className="border border-gray-200 p-2 text-sm">Double Occupancy Without Tax</th>
                <th className="border border-gray-200 p-2 text-sm">Tax (12%)</th>
                <th className="border border-gray-200 p-2 text-sm">Double Occupancy nett</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr className="text-center" key={room.type}>
                  <td className="border border-gray-200 p-2 text-center">{index + 1}</td>
                  <td className="border border-gray-200 p-2">{room.type}</td>
                  <td className="border border-gray-200 p-2 ">{room.single}</td>
                  <td className="border border-gray-200 p-2 ">{room.singleTax}</td>
                  <td className="border border-gray-200 p-2 ">{room.singleTotal}</td>
                  <td className="border  border-gray-200 p-2 ">{room.double}</td>
                  <td className="border border-gray-200 p-2 ">{room.doubleTax}</td>
                  <td className="border border-gray-200 p-2 ">{room.doubleTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden ">
          <div className="flex rounded-t-lg border border-b-0 border-gray-200 bg-gray-50">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveTab(room.id)}
                className={`flex-1 p-3 text-sm font-medium ${
                  activeTab === room.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {room.type.split(' ')[0]}
              </button>
            ))}
          </div>
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`rounded-b-lg border border-gray-200 ${
                activeTab === room.id ? 'block' : 'hidden'
              }`}
            >
              <div className="p-4 ">
                <h3 className=" mb-4 text-xl font-semibold ">{room.type}</h3>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <dt className="text-gray-600">Single Occupancy:</dt>
                  <dd className="font-medium">₹{room.singleTotal}</dd>
                  <dt className="text-gray-600">Double Occupancy:</dt>
                  <dd className="font-medium">₹{room.doubleTotal}</dd>
                  <dt className="text-gray-600">Tax:</dt>
                  <dd className="font-medium">12%</dd>
                </dl>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-lg">
          <h2 className="text-2xl font-bold">Note:</h2>
          <p>* The tariff is Inclusive of Complimentary Breakfast</p>
          <p>* Our Check - in time 24 hrs</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Image
            src="jade-entrance.jpg"
            alt="JADE Residency entrance"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="jade-room.jpg"
            alt="JADE Residency room interior"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="jade-room-1.jpg"
            alt="JADE Residency room interior"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full"
          />
        </div>

      </section>
    </div>
  )
}