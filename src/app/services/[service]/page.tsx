import Footer from '../../../components/ui/Footer';

// ... rest of the imports and component code ...

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