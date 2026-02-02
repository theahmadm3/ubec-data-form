"use client";

import React from 'react';

const OnlineStatusHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground text-center py-1 text-sm fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-center">
         <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
         <span>Status: Online</span>
      </div>
    </header>
  );
};

export default OnlineStatusHeader;
