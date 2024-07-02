'use client'

const CustomImput = ({ value='', onChange, placeholder, className }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={ onChange }
            className={`rounded-3xl px-5 py-2 min-w-64 w-full text-primary-100 font-semibold text-lg placeholder:text-primary-300 placeholder:font-light placeholder:text-base ${className}`}
            placeholder={ placeholder }
        /> 
    )
}

export default CustomImput