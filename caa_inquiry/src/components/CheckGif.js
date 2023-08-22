import React, { useState, useEffect } from 'react';
import { PushSpinner } from 'react-spinners-kit';

function CheckGif() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Align content vertically in a column
    height: '100vh', // Set the container height to fill the viewport vertically
  };

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Set a timer to hide the spinner after 3 seconds
    const timer = setTimeout(() => {
      setShowSpinner(false);
      
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      {showSpinner && (
        <div className="spinner">
          <PushSpinner size={30} color="#00ff89" loading={true} />
        </div>
      )}
      {showSpinner ? (
        <p>Applying ...</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default CheckGif;
