interface InputProps extends React.ComponentProps<'input'> {
  id?: string
  label?: string
  onChange?: any
}

export const Input: React.FC<InputProps> = ({ onChange, className = '', label, ...props }) => (
  <>
    {label && (
      <label className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}>
        {label}
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      </label>
    )}
  </>
)
