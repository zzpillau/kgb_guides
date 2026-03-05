const Button = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon = null,
}) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children && <span className="button__text">{children}</span>}
    </button>
  )
}

export default Button
