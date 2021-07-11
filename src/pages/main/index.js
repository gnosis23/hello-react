import React from 'react';
import logo from '../../assets/img/logo.svg';
import women from '../../assets/img/beach-work.jpeg';
import './index.css';

import popularDestinations  from '../../data/popularDestinations';
import DestinationCard from "../../components/DestinationCard";

export default function MainPage(props) {
  return (
    <div className="bg-gray-100">
      <div className="bg-grid-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0">
          <img className="h-10" src={logo} alt="workcation" />
          <h1 className="mt-6 text-2xl font-bold">You can work from anywhere.
            <span className="text-indigo-500">Take advantage of it.</span></h1>
          <p className="mt-6 text-gray-600">Workdfkj helps you find work-friendly rentals dhwen erje </p>
          <div className="mt-4 sm:mt-6">
            <a
              className="btn"
              href="#">Book your escape</a>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img className="absolute inset-0 w-full h-full object-over object-center" src={women} alt="beach" />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great cities</p>

        <div  className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map(destination => (
            <DestinationCard key={destination.city} destination={destination} />
          ))}
        </div>


      </div>
    </div>
  )
}
