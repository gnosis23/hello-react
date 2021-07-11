import React from 'react';
import './index.css';

export default function MainPage(props) {
  return (
    <div>
      <div className="py-8 px-8 rounded-xl max-w-sm mx-auto shadow-md flex items-center space-x-4">
        <div className="block mx-auto h-24 rounded-full sm:flex-shrink-0" />
        <div className="text-center space-y-2 sm:text-left">
          <p className="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p className="text-gray-500 font-medium">
            Product Engineer
          </p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
      <button className="btn btn-green">Button</button>
    </div>
  )
}
