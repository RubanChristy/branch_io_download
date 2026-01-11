import React from 'react';
import './App.css';

const App = () => {
  const handleDownload = () => {
    window.location.href = 'http://35.154.10.237/AeseraJewels/AppBuild/AeseraJewel_020925.apk';
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