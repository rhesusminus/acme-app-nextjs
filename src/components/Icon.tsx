import icons from 'lib/icons'

interface IconProps extends React.ComponentProps<'svg'> {
  icon: keyof typeof icons
  size: number
}

export const Icon = ({
  size = 16,
  color = '#000000',
  icon,
  className = '',
  style = {},
  viewBox = '0 0 20 20'
}: IconProps) => {
  const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' }
  const styles = { ...defaultStyles, ...style }

  return (
    <svg className={className} style={styles} viewBox={viewBox} width={`${size}px`} height={`${size}px`}>
      <path fill={color} d={icons[icon]} />
    </svg>
  )
}
