import React, { useState } from "react";
import axios from 'axios';
import "./styles/front.scss";

const App = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [result, setResult] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!image) {
      alert('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data['Detected Disease']);
      setResult(response.data['Detected Disease'])
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="Header">
          <h1>LUNG DISEASE PREDICTION</h1>
        </div>
        <div className="Submit_Image">
          <form className="Submit-Btn" onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit">UPLOAD</button>
          </form>
          {imageUrl && (
            <img
              className="Uploaded_Image"
              src={imageUrl}
              alt="Uploaded"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
          )}
        </div>
        <div className="Result">{result && <h1>Diagnosis: {result}</h1>}</div>
      </div>
    </>
  );
};

export default App;
