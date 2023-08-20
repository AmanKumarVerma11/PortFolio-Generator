import "../styles/Header.css";

const Header = ({ dark, children, to, Link }) => {
    dark = !!dark ? "dark" : "light";
    return (
      <nav className="navbar">
        {to ? (
          <Link to={to} className="navbar-brand">
            {children}
          </Link>
        ) : (
          <span className="navbar-brand">{children}</span>
        )}
      </nav>
    );
  };
  
  export default Header;
  