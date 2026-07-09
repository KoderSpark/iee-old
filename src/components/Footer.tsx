import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-6 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-primary">Important Dates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm w-full overflow-hidden">
              <p className="text-black font-medium text-base sm:text-lg mb-2 text-center">Last date of submission</p>
              <p className="text-[#0f2d5e] font-bold text-lg sm:text-xl tracking-tight text-center whitespace-nowrap">20th October 2026</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm w-full overflow-hidden">
              <p className="text-black font-medium text-base sm:text-lg mb-2 text-center">Author Notification:</p>
              <p className="text-[#0f2d5e] font-bold text-lg sm:text-xl tracking-tight text-center whitespace-nowrap">1st November 2026</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm w-full overflow-hidden">
              <p className="text-black font-medium text-base sm:text-lg mb-2 text-center">Camera ready paper:</p>
              <p className="text-[#0f2d5e] font-bold text-lg sm:text-xl tracking-tight text-center whitespace-nowrap">8th November 2026</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-[#eef2f5] border border-slate-300 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm w-full overflow-hidden">
              <p className="text-black font-medium text-base sm:text-lg mb-2 text-center">Conference Date:</p>
              <p className="text-[#0f2d5e] font-bold text-lg sm:text-xl tracking-tight text-center whitespace-nowrap">14th - 15th Nov 2026</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 text-sm sm:text-base font-medium">
          <Link to="/" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Home</Link>
          <Link to="/submission" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Submission</Link>
          <Link to="/contact" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Contact</Link>
          <a href="https://annamacharyauniversity.edu.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all duration-300 hover:scale-105 px-2 py-1">Annamacharya University</a>
        </div>

        <div className="text-center text-sm sm:text-base text-muted-foreground px-4">
          <p className="leading-relaxed">Copyright © ICCETSE 2026, EEE, Annamacharya University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
