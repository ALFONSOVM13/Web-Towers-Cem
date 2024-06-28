import "./header.scss";

const Header = ({ active, setActive }) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">3DNav</div>
        <div className="hamburger-menu" onClick={() => setActive(!active)}> 
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
