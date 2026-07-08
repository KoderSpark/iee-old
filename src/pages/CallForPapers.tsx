import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const CallForPapers = () => {
  const themes = [
    {
      title: "Track 1: Smart Grids, Microgrids and Energy Management",
      topics: [
        "Smart Grid Technologies",
        "Distributed Energy Resources",
        "Demand Response",
        "Energy Trading",
        "Grid Resilience",
        "Multi-Agent Systems"
      ]
    },
    {
      title: "Track 2: Renewable Energy and Sustainable Power Systems",
      topics: [
        "Solar Energy",
        "Wind Energy",
        "Hybrid Renewable Systems",
        "Energy Storage",
        "Green Hydrogen",
        "Sustainable Power Planning"
      ]
    },
    {
      title: "Track 3: Power Electronics, Electrical Drives and Transportation Electrification",
      topics: [
        "Power Electronic Converters",
        "Wide-Bandgap Devices",
        "Electrical Drives",
        "FACTS and HVDC",
        "EV Charging Infrastructure",
        "Vehicle-to-Grid Technologies",
        "Battery Management Systems"
      ]
    },
    {
      title: "Track 4: Artificial Intelligence, Machine Learning and Data Analytics",
      topics: [
        "Deep Learning",
        "Reinforcement Learning",
        "Explainable AI",
        "Generative AI",
        "Predictive Analytics",
        "AI for Sustainable Energy"
      ]
    },
    {
      title: "Track 5: IoT, Cyber-Physical Systems and Digital Twins",
      topics: [
        "Industrial IoT",
        "Smart Cities",
        "Edge Computing",
        "Digital Twins",
        "Intelligent Monitoring",
        "Cyber-Physical Energy Systems"
      ]
    },
    {
      title: "Track 6: Cybersecurity, Blockchain and Privacy",
      topics: [
        "Smart Grid Security",
        "Blockchain Applications",
        "Secure IoT",
        "Intrusion Detection",
        "Privacy-Preserving AI",
        "Critical Infrastructure Protection"
      ]
    },
    {
      title: "Track 7: Computational Intelligence and Optimization",
      topics: [
        "Evolutionary Computing",
        "Swarm Intelligence",
        "Metaheuristics",
        "Multi-Objective Optimization",
        "Hybrid Intelligent Systems",
        "Engineering Applications"
      ]
    },
    {
      title: "Track 8: Quantum Computing and Emerging Technologies",
      topics: [
        "Quantum Computing",
        "Quantum Machine Learning",
        "Quantum Optimization",
        "Quantum Security",
        "Neuromorphic Computing",
        "Next-Generation Computing Paradigms"
      ]
    },
    {
      title: "Track 9: Communication, Computing and Intelligent Systems",
      topics: [
        "5G/6G Networks",
        "Wireless Sensor Networks",
        "Intelligent Embedded Systems",
        "Computer Vision",
        "Autonomous Systems",
        "Human-Centered Computing"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <ContentBox>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Call for Papers</h2>
              <p className="text-foreground leading-relaxed mb-8 text-center text-lg">
                The regular sessions of the conference will cover a range of technical tracks, including but not limited to the following:
              </p>

              <div className="space-y-8">
                {themes.map((theme, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{theme.title}</h3>
                    <ul className="space-y-2">
                      {theme.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <p className="text-foreground leading-relaxed pt-6 border-t border-muted font-medium text-center text-lg">
                 ⮞ We encourage authors to submit papers on these and related tracks and look forward to welcoming you to our conference.
                </p>
              </div>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CallForPapers;
