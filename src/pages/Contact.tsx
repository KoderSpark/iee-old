import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 border-t border-border pt-8">
            {/* Contact Information */}
            <ContentBox className="h-fit">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Contact Details</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Contact List */}
                <div className="space-y-4">
                  {/* Contact Card 1 */}
                  <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-base">OH</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-1">Dr. O. Hemakesavulu</h3>
                        <p className="text-muted-foreground text-base sm:text-lg mb-2">Professor, EEE</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:+919441522066" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg">+91 9441522066</span>
                          </a>
                          <a href="mailto:hkesavulu6@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg break-words">hkesavulu6@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card 2 */}
                  <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-base">SM</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-1">Dr. S. Muqthiar Ali</h3>
                        <p className="text-muted-foreground text-base sm:text-lg mb-2">Assistant Professor, EEE</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:+917799963786" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg">+91 7799963786</span>
                          </a>
                          <a href="mailto:shaikmuq@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg break-words">shaikmuq@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card 3 */}
                  <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-base">SV</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-1">Dr. S. Venkateswarlu</h3>
                        <p className="text-muted-foreground text-base sm:text-lg mb-2">Assistant Professor, EEE</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:+917010256116" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg">+91 7010256116</span>
                          </a>
                          <a href="mailto:chvreddy237@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg break-words">chvreddy237@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card 4 */}
                  <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-base">NC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-1">Dr. N. Chinna Alluraiah</h3>
                        <p className="text-muted-foreground text-base sm:text-lg mb-2">Assistant Professor, EEE</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:+919989298997" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg">+91 9989298997</span>
                          </a>
                          <a href="mailto:alluraiah.207@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-base sm:text-lg break-words">alluraiah.207@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-muted/30 rounded-lg border border-border">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-3">Address</h3>
                      <div className="text-muted-foreground space-y-2 text-base sm:text-lg">
                        <p>Department of Electrical & Electronics Engineering</p>
                        <p>Annamacharya University</p>
                        <p>Thallapaka Panchayath, New Boyanapalli</p>
                        <p>Rajampet, Annamayya Dist., A.P. – 516126</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ContentBox>

            {/* Contact Form */}
            <ContentBox>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
                Thank you for your interest in getting in touch with us. Please send your message here.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base sm:text-lg">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="transition-all duration-300 focus:scale-[1.02] text-base sm:text-lg py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base sm:text-lg">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-300 focus:scale-[1.02] text-base sm:text-lg py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base sm:text-lg">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="transition-all duration-300 focus:scale-[1.02] text-base sm:text-lg py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base sm:text-lg">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="transition-all duration-300 focus:scale-[1.02] resize-none text-base sm:text-lg p-4"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-lg h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ContentBox>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
