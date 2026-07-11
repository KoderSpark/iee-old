import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, BookOpen, FileText, Download } from "lucide-react";
import picture1 from "@/assets/Picture1.png";

const PastConferences = () => {
  const conferences = [
    {
      year: "2019",
      title: "CISC 2019",
      fullTitle:
        "2nd International Conference on Cognitive Informatics & Soft Computing",
      description:
        "The 2nd International Conference on Cognitive Informatics & Soft Computing (CISC-2019) was held on April 9-10, 2019. The conference focused on cognitive informatics and soft computing technologies.",
      link: "https://www.aconf.org/conf_166017.2nd_International_Conference_on_Cognitive_Informatics_&_Soft_Computing.html",
      brochure: "/ICCISC-BROCHURE.pdf", // ✅ PDF version inside public folder
      indexedLink: "https://link.springer.com/book/10.1007/978-981-15-1451-7",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  // ✅ Safe binary download (works for PDF too)
  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error("File not found");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download the brochure. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <ContentBox>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Past Conferences</h2>

            </div>

            <div className="grid gap-8">
              {conferences.map((conf, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden border-0 shadow-lg"
                >
                  <div className={`h-2 bg-gradient-to-r ${conf.gradient}`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden shrink-0 border border-muted`}
                        >
                          <img src={picture1} alt={conf.year} className="w-full h-full object-contain p-1" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {conf.title}
                          </CardTitle>
                          <p className="text-xl text-muted-foreground mt-2">
                            {conf.fullTitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span>{conf.year}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8 mt-2">
                    <p className="text-foreground text-lg sm:text-xl leading-relaxed text-justify">
                      {conf.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Brochure Download */}
                      <div
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition"
                        onClick={() =>
                          handleDownload(conf.brochure, `${conf.title}-BROCHURE.pdf`)
                        }
                      >
                        <FileText className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Conference Brochure
                          </p>
                          <p className="text-base text-muted-foreground">
                            Click to download PDF
                          </p>
                        </div>
                      </div>

                      {/* Access Conference Details */}
                      <div
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition"
                        onClick={() => window.open(conf.link, "_blank")}
                      >
                        <BookOpen className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Access Conference Details
                          </p>
                          <p className="text-base text-muted-foreground">
                            View event details
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Indexed Publication */}
                    <div className="pt-6 border-t border-border">
                      <Button
                        size="lg"
                        className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg h-14"
                        onClick={() => handleDownload("/Springer Front Pages.pdf", "Springer Front Pages.pdf")}
                      >
                        <span>CISC Conference</span>
                        <Download className="w-5 h-5 ml-2 group-hover/btn:translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PastConferences;
