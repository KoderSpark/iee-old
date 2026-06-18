import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-6 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Important Dates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="p-4 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
              <p className="text-black font-medium text-sm sm:text-base mb-1">Last date of submission</p>
              <p className="text-[#0f2d5e] font-bold text-base sm:text-lg">20th October 2026</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
              <p className="text-black font-medium text-sm sm:text-base mb-1">Author Notification:</p>
              <p className="text-[#0f2d5e] font-bold text-base sm:text-lg">1st November 2026</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
              <p className="text-black font-medium text-sm sm:text-base mb-1">Camera ready paper:</p>
              <p className="text-[#0f2d5e] font-bold text-base sm:text-lg">8th November 2026</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
              <p className="text-black font-medium text-sm sm:text-base mb-1">Conference Date:</p>
              <p className="text-[#0f2d5e] font-bold text-base sm:text-lg">14th - 15th November 2026</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Link to="/" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Home</Link>
          <Link to="/submission" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Submission</Link>
          <Link to="/contact" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Contact</Link>
          <a href="https://annamacharyauniversity.edu.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Annamacharya University</a>
        </div>

        <div className="text-center text-xs sm:text-sm text-muted-foreground px-4">
          <p className="leading-relaxed">Copyright © ICCETS 2026, EEE, Annamacharya University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
