import Sidebar from '@components/SideNav';
import TopNav from '@components/TopNav'; // Import the TopNav component
import React from 'react';
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Add any head elements here */}
      </head>
      <body className="flex h-screen bg-gray-100 dark:bg-gray-800 overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen">
          <TopNav />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;