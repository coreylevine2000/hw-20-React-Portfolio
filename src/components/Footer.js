import React from 'react';


const styles = {
  footerStyle: {
    background: 'White',
  },
  footingStyle: {
    fontSize: '10px',
    left: '25%',
    position: 'Absolute',
    bottom: '10px',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>This profile was created React and a special thanks to YOU for taking the time to look at my profile.</h1>
    </footer>
  );
}

export default Footer;
