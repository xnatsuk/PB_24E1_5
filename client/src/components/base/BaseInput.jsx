export function BaseInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  disabled,
}) {
  return (
    <div className="relative z-0 w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`peer block py-2.5 px-1 w-full text-md text-gray-300 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 ${disabled ? 'border-gray-300' : 'border-gray-400'
          }`}
        placeholder=" "
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-md text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
      >
        {label}
      </label>
    </div>
  )
}
