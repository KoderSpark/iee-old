import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Mail } from "lucide-react";

// Import speaker images
import speaker1 from "@/assets/speaker1.png";
import speaker2 from "@/assets/speaker2.png";
import speaker3 from "@/assets/speaker3.jpeg";
import speaker4 from "@/assets/speaker4.jpeg";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Tor-Morten Grønli",
      title: "Professor, Department of Technology",
      affiliation: "Kristiania University College, Norway",
      image: speaker1,
    },
    {
      name: "Dr. Ton Duc Do",
      title: "Professor",
      affiliation: "Nazarbayev University, Astana, Kazakhstan",
      image: speaker2,
    },
    {
      name: "Dr. Nalin Behari Dev Choudhury",
      title: "Professor",
      affiliation: "NIT, Silchar",
      image: speaker3,
    },
    {
      name: "Dr. B. K. Panigrahi",
      title: "Professor",
      affiliation: "IIT Delhi",
      image: speaker4,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ContentBox>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Keynote Speakers
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-center text-sm sm:text-base lg:text-lg">
              We are honored to have distinguished speakers from academia and
              industry sharing their expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-card"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          speaker.name
                        )}&background=random&size=160`;
                      }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-center mb-2 text-primary">
                    {speaker.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-center mb-2 font-medium">
                    {speaker.title}
                  </p>
                  <p className="text-xs sm:text-sm text-center text-foreground leading-relaxed">
                    {speaker.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;
