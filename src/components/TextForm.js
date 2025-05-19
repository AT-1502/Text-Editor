import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
  };

  const handleClick = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  // Determine text color class based on mode
  const textColor = props.mode === 'dark' ? 'light' : 'dark';

  return (
    <div className={`text-${textColor}`}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleClick}
          id="exampleFormControlTextarea1"
          rows="3"
          style={{
            backgroundColor: props.mode === 'dark' ? '#333' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercse</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
      <div className="my-3">
        <h2>Text Summary</h2>
        <p>{wordCount} words and {charCount} characters</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
      </div>
    </div>
  );
};

export default TextForm;
  