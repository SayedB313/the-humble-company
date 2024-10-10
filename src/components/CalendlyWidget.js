import React, { useEffect } from 'react';
import Script from 'next/script';
import { PhoneCall } from 'lucide-react';

const CalendlyWidget = () => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/emailprotocol/30min'
      });
    }
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button
        onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/emailprotocol/30min'})}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Book a Consultation"
      >
        <PhoneCall size={24} />
      </button>
    </>
  );
};

export default CalendlyWidget;