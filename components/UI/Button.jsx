import React from 'react'

function Button({children}) {
  return (
    <button
    className=' max-lg:py-2 lg:py-3 max-lg:px-4 lg:px-6 bg-yellow-400 rounded-md text-black font-bold '
    >
        {children}
    </button>
  )
}

export default Button