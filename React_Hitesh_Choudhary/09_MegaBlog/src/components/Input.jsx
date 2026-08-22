import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}
            >{label}</label>
            }
            <input 
                type={type}
                className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700 focus:bg-gray-50 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input;