import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const Committee = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#organising') {
      const element = document.getElementById('organising');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#advisory') {
      const element = document.getElementById('advisory');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Organising Committee Section */}
          <div id="organising" className="mb-16">
            <div className="relative bg-gradient-to-r from-amber-600 via-green-600 to-amber-700 text-white py-8 mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide">ORGANISING COMMITTEE</h1>
              </div>
            </div>

            <ContentBox>
              <div className="space-y-12">
                {/* Patron */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-amber-600 mb-4">Patron</h2>
                  <p className="text-lg text-gray-700">Dr. O. R. Jaiswal</p>
                  <p className="text-gray-600">Director, NIT Goa</p>
                </div>

                {/* Four columns layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Honorary Chairs */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-4">Honorary Chairs</h3>
                    <div className="space-y-2 text-sm">
                      <p>Dr. Andy Knight, Canada</p>
                      <p>Dr. Avoki Omekanda, USA</p>
                      <p>Dr. Milos Manic, USA</p>
                      <p>Dr. Yang Shi, Canada</p>
                      <p>Dr. Brad Lehman, USA</p>
                      <p>Dr. Frede Blaabjerg, Denmark</p>
                    </div>
                  </div>

                  {/* IEEE IAS Representative */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-4">IEEE IAS Representative</h3>
                    <div className="space-y-2 text-sm">
                      <p>Dr. Akshay Rathore, Singapore</p>
                    </div>
                  </div>

                  {/* General Chairs */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-4">General Chairs</h3>
                    <div className="space-y-2 text-sm">
                      <p>Dr. Huang-Jen Chiu, NTUST, Taiwan</p>
                      <p>Dr. Pradyumn Chaturvedi, VNIT Nagpur</p>
                    </div>
                  </div>

                  {/* General Co-Chair */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-4">General Co-Chair</h3>
                    <div className="space-y-2 text-sm">
                      <p>Dr. Suresh Mikkili, NIT Goa</p>
                    </div>
                  </div>
                </div>
              </div>
            </ContentBox>
          </div>

          {/* Advisory Committee Section */}
          <div id="advisory">
            <div className="relative bg-gradient-to-r from-amber-600 via-green-600 to-amber-700 text-white py-8 mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide">ADVISORY COMMITTEE</h1>
              </div>
            </div>

            <ContentBox>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* International Advisory Committee */}
                <div>
                  <h2 className="text-2xl font-bold text-amber-600 mb-6">International Advisory Committee</h2>
                  <div className="space-y-2 text-sm">
                    <p>Dr. Frede Blaabjerg, Denmark</p>
                    <p>Dr. J W Kolar, Switzerland</p>
                    <p>Dr. Drajen Dujic, Switzerland</p>
                    <p>Dr. Sun Jian, USA</p>
                    <p>Dr. Huai Wang, Denmark</p>
                    <p>Dr. Dmitri Vinnikov, Estonia</p>
                    <p>Dr. Patrick Wheeler, UK</p>
                    <p>Dr. Alan Mantooth, Arkansas</p>
                    <p>Dr. Hadi Kanaan, Beirut</p>
                    <p>Dr. Prasad Enjeti, USA</p>
                    <p>Dr. Subhashish Bhattacharya, USA</p>
                  </div>
                </div>

                {/* National Advisory Committee */}
                <div>
                  <h2 className="text-2xl font-bold text-amber-600 mb-6">National Advisory Committee</h2>
                  <div className="space-y-2 text-sm">
                    <p>Dr. Vikram M. Gadre, IIT Bombay</p>
                    <p>Dr. Kishore Chatterjee, IIT Bombay</p>
                    <p>Dr. Sukumar Mishra, IIT Dhanbad</p>
                    <p>Dr. B. D. Subudhi, NIT Warangal</p>
                    <p>Dr. M. K. Verma, IIT BHU</p>
                    <p>Dr. C. Nagamani, NIT Trichy</p>
                    <p>Dr. Mainak Sengupta, IIEST Shibpur</p>
                    <p>Dr. G. Narayanan, IISc Bangalore</p>
                    <p>Dr. K. Sivakumar, IIT Hyderabad</p>
                    <p>Dr. Ravikumar, IIT Hyderabad</p>
                    <p>Dr. Rijil Ramchand, NIT Calicut</p>
                    <p>Dr. Puneet Goel, IAS - Secretary GoI</p>
                    <p>Dr. Gurunath Guralia, IISc Bangalore</p>
                  </div>
                </div>
              </div>
            </ContentBox>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;
