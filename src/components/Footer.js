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

const target = "_blank";
// set up list array: 
const footerList = [

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/corey-levine-09063727/",
      className: "social linkedin"
    },
    {
      name: "Github",
      url: "https://github.com/coreylevine2000",
      className: "social github"
    }
  ];
  // Iterate list items: 
  const FooterItem = ({list}) => (
    <ul>
      {list.map(item =>
        <li>
        <a target={target} href={item.url} className={item.className}>{item.name}</a>
        </li>
      )}
    </ul>  
  );
  
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>This profile was created React and a special thanks to YOU for taking the time to look at my profile.
      <FooterItem list={footerList}/></h1>
    </footer>
  );
}

export default Footer;
