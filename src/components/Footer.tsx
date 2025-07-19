import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-center sm:justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-2">Priyanshu Soni</h2>
          <span className="mx-3 text-gray-400">/</span>
          <p className="text-gray-400">Copyright © {currentYear} Priyanshu Soni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 