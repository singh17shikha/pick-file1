import React, { useState, useEffect, useRef } from 'react';
import './ChangeImage.css';

const ChangeImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.click();
  }, []);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="change-image">
      <img src={imageUrl} alt="" />
      <button onClick={handleButtonClick}>Change Image</button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ChangeImage;
