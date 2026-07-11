import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/homepage_image.jpg";
import clgLogo from "@/assets/clg_logo.jpeg";
import eeeLogo from "@/assets/eee_logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground pt-4 pb-6 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/4 right-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-10 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10 animate-fade-in pt-0 pb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-snug animate-scale-in">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                International Conference on
              </span>
              <span className="block pb-1 sm:pb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-x">
                Computational and Emerging Technologies
              </span>
              <span className="block">for Sustainable Energy</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent animate-pulse">
                (ICCETSE 2026)
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              November 14th & 15th 2026 (Hybrid Mode)
            </p>
            <div
              className="text-base sm:text-lg font-bold mb-4 sm:mb-5 opacity-90 animate-slide-up max-w-4xl flex flex-col items-center gap-0.5 sm:gap-1"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="mb-1">Organized by</span>
              <span className="text-center">Department of Electrical & Electronics Engineering, Annamacharya University,</span>
              <span className="text-center">Rajampet, Andhra Pradesh, India</span>
            </div>
            <div
              className="animate-slide-up flex justify-center w-full"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto group text-base sm:text-lg font-bold px-6 py-5"
              >
                <span className="group-hover:animate-pulse">
                  Submit (Microsoft CMT)
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <ContentBox className="animate-fade-in">
            <div className="text-foreground leading-relaxed animate-slide-up text-justify hyphens-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                About the ICCETSE - 2026
              </h3>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground/90 mb-6 sm:mb-8">
                International Conference on Computational and Emerging Technologies for Sustainable Energy (ICCETSE 2026)
              </h4>
              <div className="space-y-4 sm:space-y-6 text-xl sm:text-2xl">
                <p>
                  The rapid rise of disruptive technologies across various
                  branches of engineering is poised to reshape industries in the
                  coming years. Increasing emphasis is being placed on exploring
                  the latest advancements in cutting-edge technologies that have
                  vast applications in Electrical and Electronics Engineering,
                  Electronics and Communication Engineering and Computer Science
                  and Engineering. Bridging the gap between academia and
                  industry has become essential to foster innovation and drive
                  societal development.
                </p>
                <p>
                  The International Conference on Computational and Emerging
                  Technologies for Sustainable Energy (ICCETSE – 2026) is envisioned
                  as a dynamic forum for technical exchange and research
                  discussions centered on innovations in engineering and
                  technology within the broad domains of Smart Grids, Renewable
                  Energy, Power Electronics, and Intelligent Systems.
                </p>
                <p>
                  The conference aims to bring together researchers,
                  academicians, scientists, practitioners, and students to share
                  and showcase their recent research outcomes. ICCETSE – 2026
                  aspires to provide an engaging and insightful platform for
                  interaction between experts from academia and industry, and
                  young researchers working in diverse areas such as Smart Grids,
                  Renewable Energy Systems, Power Electronics, Artificial Intelligence
                  and Machine Learning, IoT and Digital Twins, Cybersecurity,
                  Quantum Computing, and Intelligent Communication Systems.
                </p>
              </div>
            </div>
          </ContentBox>

          {/* Conference Proceedings */}
          <div className="mt-8 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Conference Proceedings
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="animate-slide-up">
                  <p className="text-foreground text-xl sm:text-2xl hover:text-primary transition-colors duration-300 leading-relaxed text-justify hyphens-auto">
                    All accepted and presented papers are planned to be published in the{" "}
                    <strong>Atlantis Press</strong> proceedings, subject to approval.
                  </p>
                </div>
              </div>
            </ContentBox>
          </div>

          {/* About Annamacharya University */}
          <div className="mt-8 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
              <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <div className="text-center">
                    <a
                      href="https://annamacharyauniversity.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={clgLogo}
                          alt="Annamacharya University Logo"
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </a>
                    <h3 className="text-2xl font-bold">ANNAMACHARYA</h3>
                    <p className="text-base font-medium text-muted-foreground">UNIVERSITY</p>
                  </div>
                </div>
                <div className="text-foreground leading-relaxed space-y-5 text-xl sm:text-2xl text-justify hyphens-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                    About the University
                  </h3>
                  <p>
                    Annamacharya Institute of Technology and Sciences (AITS),
                    Rajampet, is the first institution established by the
                    Annamacharya Educational Trust in 1998, near Tallapaka—the
                    birthplace of the revered singing saint, Sri Annamacharya.
                    The institute is approved by AICTE, New Delhi, and
                    affiliated with Jawaharlal Nehru Technological University
                    Anantapur (JNTUA), Ananthapuramu. AITS, known for providing
                    quality technical and management education, has been
                    Autonomous since 2011 and is accredited by NAAC (A+ Grade)
                    and NBA. It is recognized under Sections 2(f) and 12(B) of
                    the UGC Act, 1956.
                  </p>
                  <p>
                    The institute has been upgraded to Annamacharya University
                    under the brownfield category, as per the Andhra Pradesh
                    Private Universities (Establishment and Regulation) Act,
                    2016 (Act No. 3 of 2016), and its amendment (Act No. 2 of
                    2024). The University establishment was officially notified
                    via G.O.Ms. No. 13 (13.03.2024) and G.O.Ms. No. 19
                    (10.07.2024). Furthermore, Annamacharya University is
                    recognized by the UGC under Section 2(f) of the UGC Act,
                    1956.
                  </p>
                  <p>
                    <strong>Academic Excellence:</strong> Annamacharya
                    University is committed to academic innovation and
                    industry-relevant education. Its dynamic curriculum supports
                    experiential learning across diverse schools—Engineering,
                    Management, Law, Sciences, Agriculture, Health Sciences,
                    Humanities, and Social Sciences.
                  </p>
                  <p>
                    <strong>School of Engineering:</strong> The School of
                    Engineering offers B.Tech, M.Tech, and Ph.D. programs
                    focusing on innovation, research, and practical learning.
                    Major disciplines include:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Electrical and Electronics Engineering</li>
                    <li>Civil Engineering</li>
                    <li>Electronics and Communication Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>
                      Computer Science and Engineering and allied branches
                      (AIDS, AIML, CSE(AI), CSE(AIML), CSE(DS), CSE(IoT
                      Cybersecurity with Blockchain Technology))
                    </li>
                  </ul>
                  <p>
                    Through modern pedagogy, industry partnerships, and
                    hands-on experience, the School equips students with the
                    expertise and problem-solving skills required in today’s
                    technological world.
                  </p>
                </div>
              </div>
            </ContentBox>
          </div>

          {/* About EEE Department */}
          <div className="mt-8 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
              <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <div className="text-center">
                    <a
                      href="https://annamacharyauniversity.edu.in/courses/electrical-electronics-engineering/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={eeeLogo}
                          alt="EEE Department Logo"
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </a>
                    {/* <h3 className="text-xl font-semibold">ELECTRICAL &</h3>
                    <p className="text-sm text-muted-foreground">
                      ELECTRONICS ENGINEERING
                    </p> */}
                  </div>
                </div>
                <div className="text-foreground leading-relaxed space-y-5 text-xl sm:text-2xl text-justify hyphens-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                    About the Department
                  </h3>
                  <p>
                    The Department of Electrical and Electronics Engineering
                    (EEE) was established in 1998–99 as one of the founding
                    departments of Annamacharya Institute of Technology and
                    Sciences (AITS), under JNTU Hyderabad, with an initial
                    intake of 40 students. Over the years, the intake has grown
                    to 240, reflecting the department’s consistent growth and
                    popularity.
                  </p>
                  <p>
                    In 2024, the EEE Department received NBA re-accreditation
                    from National Board of Accreditation (NBA), New Delhi, reaffirming its commitment to academic
                    excellence. From 2024–25 onward, the programs formerly under
                    JNTUA are now offered under Annamacharya University, marking
                    a new chapter in the department’s development.
                  </p>
                  <p>
                    The department currently offers B.Tech (EEE), M.Tech
                    (Electrical Power Systems), and Ph.D. in Electrical
                    Engineering. It is supported by 32 highly qualified faculty
                    members, including 16 Ph.D. holders, with strong academic,
                    research, and industry experience.
                  </p>
                  <p>
                    The department regularly organizes international and
                    national conferences, faculty development programs (FDPs),
                    guest lectures, seminars, industrial visits, internships,
                    and consultancy projects in collaboration with leading
                    industries and research organizations. These initiatives aim
                    to enhance student learning, foster research capabilities,
                    and promote professional readiness.
                  </p>
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

export default Index;
