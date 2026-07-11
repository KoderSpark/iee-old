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
      email: "Tor-Morten.Gronli@kristiania.no",
      talkTitle: "Scalable Intelligent Software Systems for Digital Innovation and Transformation",
      bio: "Dr. Tor-Morten Grønli is a Professor in the Department of Technology at Kristiania University College, Norway. He is a distinguished academician with expertise in software engineering and intelligent systems. His research focuses on artificial intelligence, mobile computing, and Internet of Things (IoT). He has contributed significantly to the development of smart and scalable software applications. Dr. Grønli has published numerous research papers in reputed international journals and conferences. His work emphasizes applied machine learning and emerging digital technologies. He actively supervises undergraduate, postgraduate, doctoral research scholars, His research supports advancements in digital transformation and smart computing systems He served as keynote speaker and technical committee member in global conferences involved in international collaborative research and innovation projects.",
      image: speaker1,
    },
    {
      name: "Dr. Ton Duc Do",
      title: "Professor, Department of Robotics and Mechatronics",
      affiliation: "School of Engineering and Digital Sciences, Nazarbayev University, Kazakhstan",
      email: "doduc.ton@nu.edu.kz",
      talkTitle: "Advanced Mechatronics and Control Systems for Sustainable Engineering Solutions",
      bio: "Dr. Ton Duc Do is a highly accomplished academic and researcher in electrical engineering, control systems, renewable energy conversion, robotics, and advanced mechatronic systems. He currently serves as Full Professor in the Department of Robotics and Mechatronics, School of Engineering and Digital Sciences at Nazarbayev University, Kazakhstan. His work spans control engineering, motor drives, renewable energy systems, and advanced robotics, with over 100 peer-reviewed publications that contribute to international knowledge in power electronics, drives, and control theory. Dr. Do has led and participated in multiple international research projects focusing on magnetic particle imaging systems, fault-tolerant control, high-torque motors for robotics, and energy conversion systems. His research aligns with UN Sustainable Development Goals – clean energy and good health, reflecting both engineering depth and societal impact.",
      image: speaker2,
    },
    {
      name: "Dr. B. K. Panigrahi",
      title: "Professor, Department of Electrical Engineering",
      affiliation: "Indian Institute of Technology Delhi",
      email: "bkpanigrahi@ee.iitd.ac.in",
      talkTitle: "AI and ML Applications for Sustainable Energy Systems",
      bio: "Dr. Bijaya Ketan Panigrahi has been working as a professor in the Department of Electrical Engineering since 2005 and was the founder head of Centre for Automotive Research and Tribology (CART) at the Indian Institute of Technology (IIT), New Delhi, India. He is the Indu Shrivastava & Serla Singh Chair Professor in Artificial Intelligence at IIT Delhi. Prior to joining IIT Delhi, he served as a faculty in Electrical Engineering Department, University College of Engineering, Burla, Sambalpur, Odisha, India from 1992 to 2005. His research focus is the design and develop artificial intelligence-based tools for the detection and classification of power quality events, fault diagnostics of induction motor drives, diagnostics of electric vehicle motors. He has investigated intelligent techniques for the design of maximum power point tracking controllers for the solar photovoltaic system. Professor Panigrahi is also actively involved in the research area of energy management in smart grid, EV charging infrastructures, impact of fast charging on the grid, EV battery technology, Battery Management Systemsetc. He is mentor of many startups working in the area of EV charger design, Battery pack design and IoT devices for EVs. Dr Panigrahi has published more than 750 research articles in various international journals and conference proceedings. He is serving as the editorial board member / associate editor/ special issue guest editor of different international journals published by IEEE, IET, Elsevier, Springer etc. He is also associated with various international conferences in various capacities. He is a fellow of IEEE, Indian National Academy of Engineering (INAE), National Academy of Sciences (NASI), India, and Asia-Pacific Artificial Intelligence Association (AAIA).",
      image: speaker4,
    },
    {
      name: "Dr. Nalin Behari Dev Choudhury",
      title: "Professor, Department of Electrical Engineering",
      affiliation: "National Institute of Technology Silchar, Assam",
      email: "nalin@ee.nits.ac.in",
      talkTitle: "Smart Grid and Energy Management in Modern Power Systems",
      bio: "Dr. N. B. Dev Choudhury is a distinguished Professor in the Department of Electrical Engineering at the National Institute of Technology Silchar, Assam, with extensive research expertise in modern power systems and energy management. His primary research focuses on deregulated power systems, power system economics, and power trading, addressing the challenges of efficient operation, planning, and market participation in competitive electricity environments. He has made significant contributions to the analysis and optimization of distributed generation and smart grid technologies, enabling reliable, efficient, and sustainable power delivery. His work also emphasizes the integration of renewable energy sources into conventional grids while maintaining system stability and reliability. Dr. Dev Choudhury’s research includes energy management systems in microgrids, power system reliability assessment, and the application of soft computing techniques for solving complex engineering problems. His contributions support the development of intelligent and adaptive power systems capable of handling variability in renewable energy sources and evolving energy demands. His research plays a vital role in advancing smart grid infrastructure, improving energy efficiency, and supporting sustainable power system operation. Through his academic and research activities, he continues to contribute to innovation and capacity building in the field of electrical power and energy systems.",
      image: speaker3,
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

            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full overflow-hidden border-4 border-teal-500 shadow-md">
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
                    
                    <div className="flex-1 mt-2 sm:mt-4">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#2d2a6e' }}>
                        {speaker.name}
                      </h3>
                      <p className="text-lg sm:text-xl font-bold text-teal-600 mb-1">
                        {speaker.title}
                      </p>
                      <p className="text-gray-700 font-bold text-base sm:text-lg mb-2">
                        {speaker.affiliation}
                      </p>
                      {speaker.email && (
                        <div className="flex items-center text-gray-500 text-sm sm:text-base mt-2">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{speaker.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {(speaker.talkTitle || speaker.bio) && (
                    <>
                      <hr className="my-6 border-t border-gray-200" />
                      
                      {speaker.talkTitle && (
                        <h4 className="text-lg sm:text-xl font-bold mb-4">
                          <span style={{ color: '#2d2a6e' }}>Title: </span>
                          <span className="text-teal-600">{speaker.talkTitle}</span>
                        </h4>
                      )}
                      
                      {speaker.bio && (
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
                          {speaker.bio}
                        </p>
                      )}
                    </>
                  )}
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
