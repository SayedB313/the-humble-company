import React, { useEffect } from 'react';
import Script from 'next/script';
import { PhoneCall } from 'lucide-react';

const CalendlyWidget = () => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/sayedbw/30min?hide_gdpr_banner=1'
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
        onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/sayedbw/30min?hide_gdpr_banner=1'})}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Book a Consultation"
      >
        <PhoneCall size={28} />
      </button>
    </>
  );
};

export default CalendlyWidget;
