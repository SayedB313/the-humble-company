import React, { useEffect } from 'react';
import Script from 'next/script';

const CalendlyWidget = () => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/emailprotocol/30min',
        text: 'Book a Consultation',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined
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
        onLoad={() => {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/emailprotocol/30min',
            text: 'Book a Consultation',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: undefined
          });
        }}
      />
    </>
  );
};

export default CalendlyWidget;