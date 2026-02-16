import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";
import ChairmanMessage from "@/pages/chairman-message";
import MissionVision from "@/pages/mission-vision";
import BankDetails from "@/pages/bank-details";
import WhyJYCSM from "@/pages/why-jycsm";
import AffiliationProcess from "@/pages/affiliation-process";
import ApplyOnline from "@/pages/apply-online";
import CenterLogin from "@/pages/center-login";
import PartnerLogin from "@/pages/partner-login";
import RegistrationProcess from "@/pages/registration-process";
import ExamResult from "@/pages/exam-result";
import EnrollmentVerification from "@/pages/enrollment-verification";
import StudentIdCard from "@/pages/student-id-card";
import AdmissionEnquiry from "@/pages/admission-enquiry";
import OnlineExam from "@/pages/online-exam";
import StudentOnlineResult from "@/pages/student-online-result";
import StudentOnlineAdmit from "@/pages/student-online-admit";
import StudentStudyMaterial from "@/pages/student-study-material";
import StudentSupport from "@/pages/student-support";
import StudentScholarshipExam from "@/pages/student-scholarship-exam";
import StudentScholarshipAdmit from "@/pages/student-scholarship-admit";
import StudentEshikshaVerify from "@/pages/student-eshiksha-verify";
import StudentEshikshaResult from "@/pages/student-eshiksha-result";
import Contact from "@/pages/contact";
import Downloads from "@/pages/downloads";
import Centers from "@/pages/centers";
import GraduateCourses from "@/pages/graduate-courses";
import CertificateCourses from "@/pages/certificate-courses";
import SchoolCourses from "@/pages/school-courses";
import DiplomaCourses from "@/pages/diploma-courses";
import AbacusCourses from "@/pages/abacus-courses";
import SpokenEnglishCourses from "@/pages/spoken-english-courses";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/chairman-message" component={ChairmanMessage} />
      <Route path="/mission-vision" component={MissionVision} />
      <Route path="/bank-details" component={BankDetails} />
      <Route path="/franchise/why-jycsm" component={WhyJYCSM} />
      <Route path="/franchise/affiliation" component={AffiliationProcess} />
      <Route path="/franchise/apply-online" component={ApplyOnline} />
      <Route path="/franchise/center-login" component={CenterLogin} />
      <Route path="/franchise/partner-login" component={PartnerLogin} />
      <Route path="/student/registration" component={RegistrationProcess} />
      <Route path="/student/result" component={ExamResult} />
      <Route path="/student/verify" component={EnrollmentVerification} />
      <Route path="/student/id-card" component={StudentIdCard} />
      <Route path="/student/enquiry" component={AdmissionEnquiry} />
      <Route path="/student/online-exam" component={OnlineExam} />
      <Route path="/student/online-result" component={StudentOnlineResult} />
      <Route path="/student/online-admit" component={StudentOnlineAdmit} />
      <Route path="/student/study-material" component={StudentStudyMaterial} />
      <Route path="/student/support" component={StudentSupport} />
      <Route path="/student/scholarship-exam" component={StudentScholarshipExam} />
      <Route path="/student/scholarship-admit" component={StudentScholarshipAdmit} />
      <Route path="/student/eshiksha-verify" component={StudentEshikshaVerify} />
      <Route path="/student/eshiksha-result" component={StudentEshikshaResult} />
      <Route path="/contact" component={Contact} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/centers" component={Centers} />
      <Route path="/courses/graduate" component={GraduateCourses} />
      <Route path="/courses/certificate" component={CertificateCourses} />
      <Route path="/courses/school" component={SchoolCourses} />
      <Route path="/courses/diploma" component={DiplomaCourses} />
      <Route path="/courses/Abacus" component={AbacusCourses} />
      <Route path="/courses/spoken-english" component={SpokenEnglishCourses} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
