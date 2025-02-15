/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import QrReader from 'modern-react-qr-reader'

function StudentQRReader() {

  const handleScan = (data) => {
    console.log(data);
  }

  const handleError = (error) => {
    console.log(error);
  }

	return (
		<>
      <QrReader
          delay={300}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '500px', height: '500px' }}
      />
		</>
	);
};

export default StudentQRReader;
