import React, { useRef } from 'react';
import './PickFile.css';

const PickFile = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="pick-file"
        accept="image/*"
        onChange={onChange}
      />
      <button onClick={handleClick}>Pick the file</button>
    </>
  );
};

export default PickFile;
