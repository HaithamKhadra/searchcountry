const Button = ({ label, onClick, iconClassName, btnClassName }) => {
  return (
    <button className={btnClassName} onClick={onClick} data-testid="btn-1">
      <i className={iconClassName}></i>
      {label}
    </button>
  );
};

export default Button;
