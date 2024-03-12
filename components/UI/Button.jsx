import React from 'react'

function Button({children}) {
  return (
    <button
    className=' px-2 py-4 bg-navbg rounded-sm text-white '
    >
        {children}
    </button>
  )
}

export default Button