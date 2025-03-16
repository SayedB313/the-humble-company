'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CalEmbed({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi({"namespace":"vsa"});
        cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#6878df"}},"hideEventTypeDetails":false,"layout":"month_view"});
      })();

      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl mx-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        <div style={{height: "85vh"}}>
          <Cal 
            namespace="vsa"
            calLink="vector-summit/vsa"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","theme":"auto"}}
          />
        </div>
      </motion.div>
    </div>
  );
} 