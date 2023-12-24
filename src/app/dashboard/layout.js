// RootLayout.js
'use client'
import { Inter } from 'next/font/google';
import '../globals.css';


import 'bootstrap/dist/css/bootstrap.min.css'; 
import Sidebar from '../Components/SideBar/Sidebar ';
import Navbar from '../Components/NavbarDashboard/Navbar ';
import { AppProvider, useAppContext } from '../context/AppContext';
import Footer from '../Components/FooterDashboard/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <RootContainer>
          
          {children}
          <Footer /> 
          </RootContainer>
          
        </AppProvider>
        
      </body>
    </html>
  );
}

function RootContainer({ children }) {
  const { sidebarOpen } = useAppContext();

  return (
    <div className={`containerr ${sidebarOpen ? 'sidebar-active' : ''}`}>
      <Sidebar />
      <div className={`main ${sidebarOpen ? 'active' : ''}`}>
        <Navbar />
        {/* Your existing main content */}
        {children}
      </div>
     
    </div>
  );
}
