import React from 'react'

function Button({type,children, handleClick}) {
    const buttonStyles = (type) => {
        switch (type) {
            case 'primary':
                return 'bg-[#00FFF0] mt-6 font-semibold py-3 px-10 rounded-full max-w-[356px]'
            case 'secondary':
                return 'bg-[#CD53EC] py-2 px-8 rounded-full'
            case 'border-primary': 
                return 'border-2 border-[#00FFF0] mt-6 font-semibold py-2 px-4 rounded-full max-w-[356px]'
            case 'border-secondary':
                return 'border-2 border-[#CD53EC] py-2 px-4 rounded-full'
            default:
                return 'bg-[#00FFF0] mt-6 font-semibold py-2 px-4 rounded-full max-w-[356px]'
        }
    }
  return (
    <button className={buttonStyles(type)} onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button