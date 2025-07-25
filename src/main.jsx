// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter basename="/test">
      <Routes>
        <App />
      </Routes>
    </BrowserRouter>
  );
}
