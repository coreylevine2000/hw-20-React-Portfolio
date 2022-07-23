import React from 'react';
import Face from '../components/images/Face.png';

const styles = {
  headerStyle: {
    background: 'Olive',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Corey Levine's React Portfolio</h1>
      <img
            src={Face}
            alt="face"
            className="face"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}
        />
    </header>
  );
}

export default Header;
