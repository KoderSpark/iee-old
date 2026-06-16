import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import Index from "./pages/Index";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import OrganisingCommittee from "./pages/OrganisingCommittee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import PastConferences from "./pages/PastConferences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/organising-committee" element={<OrganisingCommittee />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/past-conferences" element={<PastConferences />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
