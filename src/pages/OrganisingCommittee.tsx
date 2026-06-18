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


          <ContentBox>
            <div className="space-y-10 sm:space-y-12 p-4 sm:p-8">
              
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                  Organizing Committee
                </h1>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-primary mb-3">Chief Patron(s)</h2>
                <div className="space-y-1 text-sm sm:text-base">
                  <p>Dr. C. Gangi Reddy, Chancellor, Annamacharya University, Rajampet</p>
                  <p>Sri. C. Abhishek Reddy, Pro-chancellor, Annamacharya University, Rajampet</p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-primary mb-3">Patron(s)</h2>
                <div className="space-y-1 text-sm sm:text-base">
                  <p>Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University, Rajampet</p>
                  <p>Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University, Rajampet</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">General Chair(s)</h2>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
                    <p>Dr. Bhuvan Unhelkar, Professor, University of South Florida, USA</p>
                    <p>Dr. Ton Duc Do, Professor, Nazarbayev University, Astana, Kazakhstan</p>
                    <p>Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Program Chair(s)</h2>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>Dr. P. Balachennaiah , HoD- EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. B.K Panigrahi, Professor, IIT Delhi</p>
                    <p>Dr. Ir. Krismadinata, Professor and Rector, Universitas Negeri Padang, Indonesia</p>
                    <p>Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Organizing Convenor(s)</h2>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>Dr. M. Padma Lalitha, Professor, EEE, Annamacharya University, Rajampet</p>
                    <p>Dr. S. Muqthiar Ali, Asst. Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Conference Secretary</h2>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>Dr. O. Hemakesavulu, Professor, EEE, Annamacharya University, Rajampet</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6">International Advisory Committee</h2>
                <div className="columns-1 md:columns-2 gap-8 text-sm sm:text-base space-y-2 text-left">
                  <p className="break-inside-avoid">Dr. Apel Mahmud, Professor, Flinders University, Australia</p>
                  <p className="break-inside-avoid">Dr. Yanxia Sun, Professor, University of Johannesburg, South Africa</p>
                  <p className="break-inside-avoid">Dr. Meisam Mahdavi, Professor, University of Jaen, Spain</p>
                  <p className="break-inside-avoid">Dr. Cristina Efremov, Associate Professor, Technical University of Moldova, Moldova.</p>
                  <p className="break-inside-avoid">Dr. Sanjeevikumar Padmanaban, Professor, University of South-Eastern Norway, Norway</p>
                  <p className="break-inside-avoid">Dr. Geno Peter, Professor, University of Technology Sarawak, Malaysia</p>
                  <p className="break-inside-avoid">Dr. Atif Iqbal, Professor, Qatar University.</p>
                  <p className="break-inside-avoid">Dr. Kassian T.T. Amesho, University of Namibia, Namibia.</p>
                  <p className="break-inside-avoid">Dr. Akhtar kalam, Professor, Victoria university, Australia.</p>
                  <p className="break-inside-avoid">Dr. Amjad Anvari-Moghaddam, Aalborg University, Denmark</p>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6">National Advisory Committee</h2>
                <div className="columns-1 md:columns-2 gap-8 text-sm sm:text-base space-y-2 text-left">
                  <p className="break-inside-avoid">Dr. B. Ravi Kumar, Professor, IIT Hyderabad</p>
                  <p className="break-inside-avoid">Dr. Chandrashekhar N. Bhende, Professor, IIT Bhubaneswar</p>
                  <p className="break-inside-avoid">Dr. Abdul Gafoor Shaik, Professor, IIT Jodhpur</p>
                  <p className="break-inside-avoid">Dr.M.Veerachari , Professor, IIT Delhi</p>
                  <p className="break-inside-avoid">Dr. K. Srinivas Reddy, Professor, IIT Madras</p>
                  <p className="break-inside-avoid">Dr. S.T.G. Raghukanth, Professor, IIT Madras</p>
                  <p className="break-inside-avoid">Dr. D. Thukaram, Rtd, Professor, IISc Bangalore</p>
                  <p className="break-inside-avoid">Dr. K. R. Murali Mohan, Rtd, Scientist-G, DST</p>
                  <p className="break-inside-avoid">Dr. N.V Srikanth Professor, NIT Warangal</p>
                  <p className="break-inside-avoid">Dr. M. Suryakalavathi, Professor, JNTUH</p>
                  <p className="break-inside-avoid">Dr. K. Vaisakh, Professor, Andhra University</p>
                  <p className="break-inside-avoid">Dr. P. Sujatha, Professor, JNTUA</p>
                  <p className="break-inside-avoid">Dr. C. Shoba Bindu, Professor, JNTUA</p>
                  <p className="break-inside-avoid">Dr. V.C. Usha Reddy, Associate Professor, SVU</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6">Technical Program Committee</h2>
                <div className="columns-1 md:columns-2 gap-8 text-sm sm:text-base space-y-2 text-left">
                  <p className="break-inside-avoid">Dr. Andriy Lotnyk, Leibniz Institute of Surface Engineering, Germany</p>
                  <p className="break-inside-avoid">Dr. Karthikeyan.T, University of Technology & Applied Sciences, Muscat.</p>
                  <p className="break-inside-avoid">Dr. Mahajan Sagar Bhaskar, Prince Sultan University, Saudi Arabia</p>
                  <p className="break-inside-avoid">Mr. Subhas Chandra Bose, Technical Lead, Meta, USA</p>
                  <p className="break-inside-avoid">Mr. Shree Ramalingam.B, ASM America Inc., USA</p>
                  <p className="break-inside-avoid">Dr. C. C. Reddy, IIT Ropar</p>
                  <p className="break-inside-avoid">Dr. R. Gnanadass, PTU, Puducherry</p>
                  <p className="break-inside-avoid">Dr. V. Sandeep, NIT AP</p>
                  <p className="break-inside-avoid">Dr. R.Siddharth, IIIT Dharwad</p>
                  <p className="break-inside-avoid">Dr. A.Manju, SRM-Ramapuram, Chennai</p>
                  <p className="break-inside-avoid">Dr. K. Muruga perumal, Vardhaman College of Engineering, Hyderabad</p>
                  <p className="break-inside-avoid">Dr. P. Bhaskara Prasad, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. S.Sarada, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr.K. Harinath Reddy, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. P. Suresh Babu, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. C. Ganesh, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. N. Chinna Alluraiah, AU, Rajampet</p>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6">Publication Committee</h2>
                <div className="columns-1 md:columns-2 gap-8 text-sm sm:text-base space-y-2 text-left">
                  <p className="break-inside-avoid">Dr. G.Vijayakumar, University of Hertfordshire, UK</p>
                  <p className="break-inside-avoid">Mr. Bhushan B Chavan, Director of Cybersecurity Eng, MGM Resorts International, USA</p>
                  <p className="break-inside-avoid">Mr. Karthiganesh, Director, Kwantumg research lab, Bengaluru</p>
                  <p className="break-inside-avoid">Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
                  <p className="break-inside-avoid">Dr. S. Jeevananthan, PTU, Puducherry</p>
                  <p className="break-inside-avoid">Dr. M. Venkatesan, NIT, Puducherry</p>
                  <p className="break-inside-avoid">Dr. P. Gopi, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. Dhanunjaya Babu, AU, Rajampet</p>
                  <p className="break-inside-avoid">Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
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
