'use client'

import React from 'react';
import Footer from '../../../components/ui/Footer';
import CalEmbed from '../../../components/CalEmbed';

// Add this function to generate static paths
export function generateStaticParams() {
  return [
    { service: 'strategic-advisory' },
    { service: 'growth-equity' },
    { service: 'capital-formation' },
    { service: 'mergers-acquisitions' }
  ];
}

export default function ServicePage({ params }: { params: { service: string } }) {
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