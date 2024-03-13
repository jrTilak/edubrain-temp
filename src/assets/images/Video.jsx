import React from 'react';
import poster from '../../assets/images/poster.svg'

function App() {
  const videoSrc = 'https://www.youtube.com/watch?v=wnqkfpCpK1g&t=461s&pp=ygUMYWkgbWwgY291cnNl';
  const posterSrc = 'poster'; // Replace with your video URL
 
  return (
    <div className="flex justify-center p-10">
        <video style={{width:"1100px",borderRadius:"10px"}} 
        src={videoSrc}
        controls
        autoPlay
        poster={poster}
        />
      </div>
  );
}

export default App;
