
const Button = ({label, onClick, value, iconClassName}) => {
  return (
    <button className='button' onClick={onClick} value={value}>
      <i className={iconClassName}></i>
      {label}
    </button>
  )
}

export default Button;
