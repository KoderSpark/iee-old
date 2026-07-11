import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Download, ExternalLink } from "lucide-react";

const Submission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">


          <ContentBox className="mb-8 sm:mb-12 border-t border-border pt-8 mt-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Submission</h2>
            </div>

            <div className="space-y-8">
              {/* Instructions to Authors */}
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-primary">Instructions to Authors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  
                  {/* 1. Manuscript Structure */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">1. Manuscript Structure</h3>
                    <p className="mb-3 text-lg sm:text-xl text-foreground/90">Your paper should follow this standard order:</p>
                    <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-foreground/80 ml-2">
                      <li><strong>a) Title:</strong> Concise and informative.</li>
                      <li><strong>b) Authors:</strong> Full names, affiliations, and email addresses (clearly mark the corresponding author).</li>
                      <li><strong>c) Abstract:</strong> A mandatory summary of 150–250 words. It should not contain undefined abbreviations or citations.</li>
                      <li><strong>d) Keywords:</strong> 4–6 keywords, separated by middots (·) or commas.</li>
                      <li><strong>e) Main Content:</strong> Introduction, Methodology, Results, Discussion/Conclusion.</li>
                      <li><strong>f) References:</strong> Citations should be sufficient and current.</li>
                    </ul>
                  </div>

                  {/* 2. Formatting Guidelines */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">2. Formatting Guidelines</h3>
                    <div className="space-y-4 text-lg sm:text-xl text-foreground/80 ml-2">
                      <p><strong>Font:</strong> If not using the template, standard text is usually 10-point Times New Roman.</p>
                      
                      <div>
                        <strong>Figures:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Figures must be numbered (Fig. 1, Fig. 2) and have a caption below the image.</li>
                          <li>Resolution: At least 800 dpi for line drawings and 300 dpi for photographs.</li>
                          <li>Format: Vector graphics (EPS) are preferred over raster images (JPEG/TIFF) for diagrams.</li>
                        </ul>
                      </div>

                      <div>
                        <strong>Tables:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Tables must be numbered (Table 1) and have a caption above the table.</li>
                          <li>Do not submit tables as images.</li>
                        </ul>
                      </div>

                      <p><strong>Equations:</strong> Displayed equations should be centered and numbered consecutively in parentheses on the right margin. Use MathType or the built-in Equation Editor for Word.</p>
                    </div>
                  </div>

                  {/* 3. References & Citation */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">3. References & Citation</h3>
                    <p className="mb-3 text-lg sm:text-xl text-foreground/90">Follow a numbered citation style (e.g., [1], [2]).</p>
                    <div className="space-y-3 text-lg sm:text-xl text-foreground/80 ml-2">
                      <p><strong>In-text:</strong> Cite references using square brackets.</p>
                      <p><strong>Reference List:</strong> List references at the end of the paper.</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Journal:</strong> Author(s): Title. Journal Name Volume, Page range (Year).</li>
                        <li><strong>Book:</strong> Author(s): Title. Publisher, Location (Year).</li>
                        <li><strong>Conference:</strong> Author(s): Title. In: Editor(s) (eds.) Book Title. Page range. Publisher, Location (Year).</li>
                      </ul>
                      <p className="mt-2 text-primary font-medium"><strong>Note on DOI:</strong> Including the Digital Object Identifier (DOI) for references is highly encouraged to facilitate linking.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Template & Submission Links */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-foreground text-lg sm:text-xl lg:text-2xl text-center font-medium">
                    We recommend authors to use Atlantis Press template.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6">
                    <Button
                      size="lg"
                      className="w-full justify-between group bg-primary hover:bg-primary/90 text-base sm:text-lg h-14"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/Atlantis-Press-TEMPLATE.docx"; 
                        link.download = "Atlantis-Press-TEMPLATE.docx";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Template: Atlantis Press
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </Button>

                    <Button
                      size="lg"
                      className="w-full justify-between group bg-primary hover:bg-primary/90 text-base sm:text-lg h-14"
                      onClick={() => window.open("https://cmt3.research.microsoft.com/", "_blank")}
                    >
                      Submission Link: Microsoft CMT
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="mt-8 space-y-6">
                    <Card className="bg-white dark:bg-surface hover:shadow-sm transition-all duration-200">
                      <CardContent className="p-6">
                        <p className="text-foreground text-lg sm:text-xl leading-relaxed">
                          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-surface hover:shadow-sm transition-all duration-200">
                      <CardContent className="p-6">
                        <p className="text-foreground text-lg sm:text-xl leading-relaxed">
                          The authors will need to register their email with CMT to submit paper to ICCETSE-2026. Here is a link how to create a CMT account: <a href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" target="_blank" rel="noreferrer" className="text-primary hover:underline break-all">https://cmt3.research.microsoft.com/docs/help/general/account-creation.html</a>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Review Policy */}
              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-orange-600">Paper Submission & Review Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground text-xl sm:text-2xl leading-relaxed">
                    All submissions underwent a rigorous peer-review process evaluating originality, technical quality, scientific contribution, clarity, and relevance. Authors were required to clearly present the research problem, contributions, and related work. Acceptance decisions were based on reviewers' evaluations and Program Committee recommendations. All manuscripts were screened using plagiarism detection tools. Papers with plagiarism or other ethical violations were rejected.
                  </p>
                </CardContent>
              </Card>

            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Submission;
