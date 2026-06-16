import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const OrganisingCommittee = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-[1.05rem] sm:text-[1.1rem] leading-relaxed">
      <Navbar />

      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">International Conference on Computational and Emerging Technologies for Sustainable Energy</h1>
            <h2 className="text-xl sm:text-2xl font-bold">(ICCETSE-2026)</h2>
            <p className="text-lg font-semibold text-foreground/80">15th - 16th May 2026</p>
            <div className="text-foreground/90 mt-4">
              <p>Organized by</p>
              <p className="font-medium text-lg">Department of Electrical & Electronics Engineering, Annamacharya University</p>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-10 mt-12 border-t border-border pt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              ORGANIZING COMMITTEE
            </h1>
          </div>

          <ContentBox>
            <div className="space-y-8 sm:space-y-10 text-left">
              <div className="flex flex-col items-center justify-center text-center my-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Chief Patron(s)</h2>
                <div className="space-y-1">
                  <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
                  <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center my-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Patron(s)</h2>
                <div className="space-y-1">
                  <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
                  <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">General Chair(s)</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
                    <p>Dr. Bhuvan Unhelkar, Professor, University of South Florida, USA</p>
                    <p>Dr. Ton Duc Do, Professor, Nazarbayev University, Astana, Kazakhstan</p>
                    <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Program Chair(s)</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. P. Balachennaiah , HoD- EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. B.K Panigrahi, Professor, IIT Delhi</p>
                    <p>Dr. Ir. Krismadinata, Professor and Rector, Universitas Negeri Padang, Indonesia</p>
                    <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Organizing Convenor(s)</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Conference Secretary</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. S. Suresh, Associate Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">International Advisory Committee</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. Apel Mahmud, Professor, Flinders University, Australia</p>
                    <p>Dr. Yanxia Sun, Professor, University of Johannesburg, South Africa</p>
                    <p>Dr. Meisam Mahdavi, Professor, University of Jaen, Spain</p>
                    <p>Dr. Cristina Efremov, Associate Professor, Technical University of Moldova, Moldova.</p>
                    <p>Dr. Sanjeevikumar Padmanaban, Professor, University of South-Eastern Norway, Norway</p>
                    <p>Dr. Geno Peter, Professor, University of Technology Sarawak, Malaysia</p>
                    <p>Dr. Atif Iqbal, Professor, Qatar University.</p>
                    <p>Dr. Kassian T.T. Amesho, University of Namibia, Namibia.</p>
                    <p>Dr. Akhtar kalam, Professor, Victoria university, Australia.</p>
                    <p>Dr. Amjad Anvari-Moghaddam, Aalborg University, Denmark</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">National Advisory Committee</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. B. Ravi Kumar, Professor, IIT Hyderabad</p>
                    <p>Dr. Chandrashekhar N. Bhende, Professor, IIT Bhubaneswar</p>
                    <p>Dr. Abdul Gafoor Shaik, Professor, IIT Jodhpur</p>
                    <p>Dr.M.Veerachari , Professor, IIT Delhi</p>
                    <p>Dr. K. Srinivas Reddy, Professor, IIT Madras</p>
                    <p>Dr. S.T.G. Raghukanth, Professor, IIT Madras</p>
                    <p>Dr. D. Thukaram, Rtd, Professor, IISc Bangalore</p>
                    <p>Dr. K. R. Murali Mohan, Rtd, Scientist-G, DST</p>
                    <p>Dr. N.V Srikanth Professor, NIT Warangal</p>
                    <p>Dr. M. Suryakalavathi, Professor, JNTUH</p>
                    <p>Dr. K. Vaisakh, Professor, Andhra University</p>
                    <p>Dr. P. Sujatha, Professor, JNTUA</p>
                    <p>Dr. C. Shoba Bindu, Professor, JNTUA</p>
                    <p>Dr. V.C. Usha Reddy, Associate Professor, SVU</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Technical Program Committee</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. Andriy Lotnyk, Leibniz Institute of Surface Engineering, Germany</p>
                    <p>Dr. Karthikeyan.T, University of Technology & Applied Sciences, Muscat.</p>
                    <p>Dr. Mahajan Sagar Bhaskar, Prince Sultan University, Saudi Arabia</p>
                    <p>Mr. Subhas Chandra Bose, Technical Lead, Meta, USA</p>
                    <p>Mr. Shree Ramalingam.B, ASM America Inc., USA</p>
                    <p>Dr. C. C. Reddy, IIT Ropar</p>
                    <p>Dr. R. Gnanadass, PTU, Puducherry</p>
                    <p>Dr. V. Sandeep, NIT AP</p>
                    <p>Dr. R.Siddharth, IIIT Dharwad</p>
                    <p>Dr. A.Manju, SRM-Ramapuram, Chennai</p>
                    <p>Dr. K. Muruga perumal, Vardhaman College of Engineering, Hyderabad</p>
                    <p>Dr. P. Bhaskara Prasad, AU, Rajampet</p>
                    <p>Dr. S.Sarada, AU, Rajampet</p>
                    <p>Dr.K. Harinath Reddy, AU, Rajampet</p>
                    <p>Dr. P. Suresh Babu, AU, Rajampet</p>
                    <p>Dr. C. Ganesh, AU, Rajampet</p>
                    <p>Dr. N. Chinna Alluraiah, AU, Rajampet</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Publication Committee</h2>
                  <div className="ml-3 sm:ml-6 space-y-1">
                    <p>Dr. G.Vijayakumar, University of Hertfordshire, UK</p>
                    <p>Mr. Bhushan B Chavan, Director of Cybersecurity Eng, MGM Resorts International, USA</p>
                    <p>Mr. Karthiganesh, Director, Kwantumg research lab, Bengaluru</p>
                    <p>Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
                    <p>Dr. S. Jeevananthan, PTU, Puducherry</p>
                    <p>Dr. M. Venkatesan, NIT, Puducherry</p>
                    <p>Dr. P. Gopi, AU, Rajampet</p>
                    <p>Dr. Dhanunjaya Babu, AU, Rajampet</p>
                    <p>Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
                  </div>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrganisingCommittee;
