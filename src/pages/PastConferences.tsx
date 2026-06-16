import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, BookOpen, FileText, Download } from "lucide-react";

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
              <h2 className="text-4xl font-bold mb-4">Past Conferences</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Explore related conferences and publication platforms. ICCETS
                2026 proceedings will be published in E3S Web of Conferences, an
                Open Access publication series dedicated to archiving conference
                proceedings in Environment, Energy and Earth Sciences.
              </p>
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
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${conf.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        >
                          {conf.year}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {conf.title}
                          </CardTitle>
                          <p className="text-lg text-muted-foreground mt-1">
                            {conf.fullTitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{conf.year}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
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
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">
                            Conference Brochure
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Click to download PDF
                          </p>
                        </div>
                      </div>

                      {/* Access Conference Details */}
                      <div
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition"
                        onClick={() => window.open(conf.link, "_blank")}
                      >
                        <BookOpen className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">
                            Access Conference Details
                          </p>
                          <p className="text-sm text-muted-foreground">
                            View event details
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Indexed Publication */}
                    <div className="pt-4 border-t border-border">
                      <Button
                        className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handleDownload("/Springer Front Pages.pdf", "Springer Front Pages.pdf")}
                      >
                        <span>CISC Conference</span>
                        <Download className="w-4 h-4 ml-2 group-hover/btn:translate-y-1 transition-transform" />
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
