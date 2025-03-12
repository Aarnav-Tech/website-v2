import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher'; // Adjust path if needed

function NavbarWrapper(props) {
  return (
    <>
    <OriginalNavbar {...props} />
    <div className="navbar__items navbar__items--right">
      <ThemeSwitcher />
    </div>
    </>
  );
}

export default NavbarWrapper;