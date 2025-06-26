import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white py-8 mt-24">
      <div className="container mx-auto px-4 text-center">
        <div className="text-xl font-bold mb-2">The Humble Company</div>
        <div className="text-sm text-gray-300">
          Empowering government relations firms with bespoke growth solutions and unmatched deal flow.
        </div>
      </div>
    </footer>
  );
} 