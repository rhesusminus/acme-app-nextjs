import { Spinner } from 'components'

interface ButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  loading = false,
  disabled = false,
  ...props
}) => (
  <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} {...props}>
    {loading ? <Spinner /> : children}
  </button>
)
