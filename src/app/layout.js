// components/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <html lang="ar">
    
      <body>
        {children}
      </body>
    </html>
  );
}