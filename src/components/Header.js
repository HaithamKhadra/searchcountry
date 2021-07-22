import Button from "./Button";

const Header = ({heading, toggleDarkMode}) => {
  return (
    <header className='header flex'>
      <h1>{heading}</h1>
      <Button 
        iconClassName="bi bi-moon-fill" 
        onClick={toggleDarkMode} label='Dark Mode'/>
    </header>
  )
}

export default Header;
