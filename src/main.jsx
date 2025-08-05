import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
 <GoogleOAuthProvider clientId="410168685474-i7131i7a3qf0kjc693ffnmnca3iia1oj.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
