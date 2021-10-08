import Button from "./Button";

const Header = ({ heading, toggleDarkMode, btnClassName }) => {
  return (
    <header className="header flex">
      <h1 className="header__title">{heading}</h1>
      <Button
        btnClassName={btnClassName}
        iconClassName="bi bi-moon-fill"
        onClick={toggleDarkMode}
        label="Dark Mode"
      />
    </header>
  );
};

export default Header;
