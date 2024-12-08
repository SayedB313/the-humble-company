'use client'

import React from 'react';
import Footer from '../../../components/ui/Footer';
import CalEmbed from '../../../components/CalEmbed';

export default function ServicePage() {
  // Add any necessary state or logic here
  const [isCalOpen, setIsCalOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ... existing code ... */}
      
      <Footer />

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 