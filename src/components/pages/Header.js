import React from 'react';

const styles = {
  headerStyle: {
    background: 'Olive',
    justifyContent: 'Center',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
}

export default Header;
