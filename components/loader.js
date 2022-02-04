import React from 'react'

const Loader = () => {
    return (
        <div className="w-full flex justify-center text-center bg-transparent text-cyan-600 xl:text-lg text-sm font-bold z-20">
            <div className="border-4 border-gray-100 border-t-4 border-t-sky-400 rounded-full animate-spin w-6 h-6"></div>
        </div>
    )
}

export default Loader
