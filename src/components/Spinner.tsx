interface SpinnerProps extends React.ComponentProps<'div'> {}

export const Spinner: React.FC<SpinnerProps> = ({ className = '', ...props }) => {
  return <span className={`spinner ${className}`} {...props}></span>
}
