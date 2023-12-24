// components/Layout.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Layout({ children }) {
  return (
    <html lang="ar">
    
      <body>
        {children}
      </body>
    </html>
  );
}