'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CalEmbed({ isOpen, onClose }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30minconsult"});
      cal("ui", {
        "theme": "light",
        "styles": {
          "branding": {
            "brandColor": "#2e3abc"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <Cal 
                namespace="30minconsult"
                calLink="sayedb/30minconsult"
                style={{width:"100%", height:"100%", overflow:"scroll"}}
                config={{
                  layout: "month_view",
                  theme: "light"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 