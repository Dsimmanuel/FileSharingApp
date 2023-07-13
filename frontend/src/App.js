import image from './images.jpg'
import './App.css';
import { useRef, useState, useEffect } from 'react'
import { uploadFile } from './service/api';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('')

  const fileinputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append("name",file.name)
        data.append("file",file);

        let response = await uploadFile(data);
        setResult(response.path)
      }
    }
    getImage()
  },[file])

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

        <img src={result} alt="Image"></img>
        <a href={result} target="_blank">{result}</a>
        
      </div>
    </div>
  );
}

export default App;
