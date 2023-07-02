import image from './images.jpg'
import './App.css';
import { useRef, useState } from 'react'

function App() {

  const [file, setFile] = useState('');

  const fileinputRef = useRef();

  const onUploadClick = () =>{
    fileinputRef.current.click();
  }

  console.log(file)
  
  return (
    <div className="container">
      <img src={image} alt="logo" />
      <div className="wrapper">
        <h1>File Sharing</h1>
        <p>Upload and share link</p>
        <button class="btn btn-outline-secondary" onClick={() => onUploadClick()}>Upload</button>
        <input type = "file" 
        ref={fileinputRef}
        style={{display : 'none'}}
        onChange={(e) => setFile(e.target.files[0]) } />
      </div>
    </div>
  );
}

export default App;
