import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Mustafa Kemal Atatürk</h1>
        <div className="relative">
          {/* Timeline line */}
          <div className="border-r-4 border-gray-400 absolute h-full top-0" style={{ left: '50%' }}></div>

          {/* Timeline item */}
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="mb-1 font-bold text-lg">1881</h3>
                <p className="text-sm leading-snug text-gray-600">
                  He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now in Greece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafa was still a boy. His mother Zubeyde, a devout and strong-willed woman, raised him and his sister.
                </p>
              </div>
            </div>
          </div>

          {/* Add more timeline items here */}
        </div>
      </div>
    </div>
  )
}

export default page