import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const Registration = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Registration Section */}
          <ContentBox>
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
              {/* <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-primary" /> */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Registration</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-primary">Registration Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm text-center">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="border border-border p-3 sm:p-4 lg:p-6 font-semibold text-lg sm:text-xl">Sl. No.</th>
                        <th className="border border-border p-3 sm:p-4 lg:p-6 text-left font-semibold text-lg sm:text-xl">Authors category</th>
                        <th className="border border-border p-3 sm:p-4 lg:p-6 font-semibold text-lg sm:text-xl">Authors from India</th>
                        <th className="border border-border p-3 sm:p-4 lg:p-6 font-semibold text-lg sm:text-xl">Authors from outside India</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-3 sm:p-4 lg:p-6 font-medium text-lg sm:text-xl">1</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-left font-medium text-lg sm:text-xl">Students / Research Scholars</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-lg sm:text-xl">*9000 INR + 18% GST</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-lg sm:text-xl">115 USD</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-3 sm:p-4 lg:p-6 font-medium text-lg sm:text-xl">2</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-left font-medium text-lg sm:text-xl">Academic Faculty Member / Industry Experts</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-lg sm:text-xl">*9500 INR + 18% GST</td>
                        <td className="border border-border p-3 sm:p-4 lg:p-6 text-lg sm:text-xl">120 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-lg sm:text-xl text-foreground/80 italic text-center mb-6">
                  *Registration fee includes Conference Registration and Publication*
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-foreground text-lg sm:text-xl leading-relaxed text-justify">
                    <strong>Important Note:</strong> All accepted and presented papers are planned to be published in the Atlantis Press proceedings, subject to approval. Payment link will be provided to the corresponding Author once the paper is accepted.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
