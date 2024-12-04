

export const Switch = ({ value, onChange, disabled, ...props }) => {
  return (
    <div className="rounded-lg flex items-center py-2 px-2 border">
      <label className={`inline-flex relative items-center ${disabled ? 'cursor-default opacity-60' : 'cursor-pointer'}`}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
          className="sr-only peer"
        />
        <div
          className={`w-[2.8rem] h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[1.4rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-indigo-700 peer-checked:to-blue-700`}
        >
        </div>
      </label>
    </div>
  )
}
