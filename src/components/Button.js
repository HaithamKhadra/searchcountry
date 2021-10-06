
const Button = ({label, onClick, value, iconClassName, btnClassName}) => {
  return (
    <button className={btnClassName} onClick={onClick} value={value}>
      <i className={iconClassName}></i>
      {label}
    </button>
  )
}

export default Button;
