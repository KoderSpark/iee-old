import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const CallForPapers = () => {
  const themes = [
    {
      title: "Track 1: Power Electronics Controllers for Power Systems",
      topics: [
        "Advanced Control Techniques for Power Converters",
        "Grid-Tied Inverter Control and Synchronization",
        "Power Quality Improvement Using Power Electronics",
        "Control of Flexible AC Transmission Systems (FACTS)",
        "Fault Detection and Protection in Power Electronics Systems"
      ]
    },
    {
      title: "Track 2: Renewable Energy sources and Technology",
      topics: [
        "Solar Energy Technologies",
        "Wind Energy Systems",
        "Energy Storage Solutions for Renewables",
        "Bioenergy and Biomass Conversion Technologies",
        "Grid Integration and Smart Grid Technologies for Renewables"
      ]
    },
    {
      title: "Track 3: Electric and Hybrid Vehicles and Energy storage",
      topics: [
        "Battery Technologies and Management Systems",
        "Electric Drive Systems and Motor Control",
        "Energy Management Strategies in Hybrid Vehicles",
        "Charging Infrastructure and Wireless Charging Technologies",
        "Thermal Management Systems for Batteries and Power Electronics"
      ]
    },
    {
      title: "Track 4: Computation Intelligence in Electrical Engineering",
      topics: [
        "Neural Networks and Deep Learning Applications",
        "Fuzzy Logic and Soft Computing Techniques",
        "Evolutionary Algorithms and Optimization Methods",
        "Intelligent Control Systems and Automation",
        "Machine Learning for Power Systems and Smart Grids"
      ]
    },
    {
      title: "Track 5: Artificial Intelligence and Machine Learning",
      topics: [
        "Deep Learning Architectures and Applications",
        "Reinforcement Learning and Autonomous Systems",
        "Explainable AI and Model Interpretability",
        "AI in Predictive Maintenance and Fault Diagnosis",
        "Federated Learning and Privacy-Preserving AI"
      ]
    },
    {
      title: "Track 6: Edge Computing and IoT",
      topics: [
        "Edge AI and Real-Time Data Processing",
        "IoT Network Architectures and Protocols",
        "Security and Privacy in Edge and IoT Systems",
        "Resource Management and Optimization in Edge Computing",
        "Integration of Edge Computing with Cloud and Fog Computing"
      ]
    },
    {
      title: "Track 7: Quantum Computing and Information",
      topics: [
        "Quantum Algorithms and Complexity",
        "Quantum Cryptography and Secure Communication",
        "Quantum Hardware and Qubit Technologies",
        "Quantum Error Correction and Noise Mitigation",
        "Quantum Information Theory and Entanglement"
      ]
    },
    {
      title: "Track 8: Cloud Computing and Cyber security",
      topics: [
        "Cloud Security Architecture and Best Practices",
        "Data Privacy and Compliance in Cloud Environments",
        "Threat Detection and Incident Response in the Cloud",
        "Cloud Access Security Brokers (CASB) and Security Monitoring",
        "Secure Cloud Migration and Hybrid Cloud Security"
      ]
    },
    {
      title: "Track 9: Robotics and Autonomous Systems",
      topics: [
        "Robot Perception and Sensor Fusion",
        "Path Planning and Navigation Algorithms",
        "Human-Robot Interaction and Collaborative Robotics",
        "Autonomous Vehicles and Drone Systems",
        "Robotics in Industrial Automation and Manufacturing"
      ]
    },
    {
      title: "Track 10: Image Processing and VLSI Design",
      topics: [
        "Hardware Architectures for Real-Time Image Processing",
        "VLSI Implementation of Image Compression Algorithms",
        "Edge Detection and Feature Extraction in Hardware",
        "Low-Power VLSI Design for Embedded Vision Systems",
        "Integration of Machine Learning for Image Processing on VLSI Chips"
      ]
    },
    {
      title: "Track 11: Embedded Systems and Nano Technology",
      topics: [
        "Nano electronics in Embedded System Design",
        "Nano materials for Sensor Development in Embedded Systems",
        "Low-Power and Energy-Efficient Embedded Systems Using Nanotech",
        "Integration of NEMS (Nano electromechanical Systems) in Embedded Devices",
        "Nanotechnology-Enabled Security Features in Embedded Systems"
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
