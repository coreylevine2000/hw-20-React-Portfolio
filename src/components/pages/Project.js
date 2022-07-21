import React from 'react';

const styles = {
  mainStyle: {
    background: 'white',
  },
  bodyStyle: {
    fontSize: '20px',
  },
};

export default function Project() {
  return (
    <div>
      <h1 style={styles.mainStyle}>Current and Previous projects</h1>
      <p style={styles.bodyStyle}>
        The following images are usable links to current and completed projects and challenges. Each link will direct you to its respected repository on Github with additional instructions on how to launch the application and/or a link to the application's live website. 
      </p>
    </div>
  );
}
