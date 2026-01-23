import React from 'react';
import './App.css';

const App = () => {
  const handleDownload = () => {
    window.location.href = 'http://23.21.2.75/AppBuild/jan23chottu.apk';
  };

  return (
    <div className="app">
      <h1>Welcome to Our App</h1>
      <p>Click the button below to download the APK file.</p>
      <button onClick={handleDownload}>Download APK</button>
    </div>
  );
};

export default App;