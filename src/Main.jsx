import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Featuredd from "./Features/Featuredd";
import Solutions from "./Solutions/Solutions";
import SolutionByIndustries from "./Solutions/SolutionByIndustries";
import SolutionBysize from "./Solutions/SolutionBysize";
import SolutionByusecases from "./Solutions/SolutionByusecases";
import Login from "./utils/Login";
import Signup from "./utils/Signup";
import Resources from "./Resources/Resources";
import Videos from "./Resources/Videos/Videos";
import Pricing from "./Pricing/Pricing";
import BecomeAPartner from "./Partner/BecomeAPartner";
import IndustriesByrole from "./Solutions/IndustriesByrole/IndustriesByrole";
import Career from "./Resources/Career/Career";
import Blog from "./Blog/Blog";
import CaseStudy from "./CaseStudy/CaseStudy";
import JobDetails from "./Resources/Career/JobDetails";
import FeaturesBilling from "./Features/parts/FeaturesBilling";
import BlogContent from "./Blog/BlogContent";
import CaseStudyUserExperience from "./CaseStudy/CaseStudyUserExperience";
import Faq from "./Faq/Faq";
import FaqActivities from "./Faq/FaqActivities";
import Testimonials from "./Testimonials/Testimonials";
import Updates from "./Updates/Updates";
import UpdatesActivities from "./Updates/UpdatesActivities";
import HelpAndTraining from "./HelpAndTraining/HelpAndTraining";
import WatchMoreVideos from "./Resources/Videos/WatchMoreVideos";
import PlayVideo from "./Resources/Videos/PlayVideo";
import CaseStudyForm1 from "./Forms/CaseStudyForm1";
import Legal from "./SubFooter/Legal";
import LegalEmployeeLogin from "./SubFooter/EmployeeLogin";
import CancalationRefundPolicy from "./SubFooter/CancalationRefundPolicy";
import PrivacyPolicy from "./SubFooter/PrivacyPolicy";
import TnC from "./SubFooter/TnC";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Sign-up" element={<Signup />} />
        <Route exact path="/About-us" element={<About />} />
        <Route exact path="/Contact-us" element={<Contact />} />
        <Route exact path="/Features" element={<Featuredd />} />
        <Route exact path="/Features/Billing" element={<FeaturesBilling />} />
        <Route exact path="/Solutions" element={<Solutions />} />
        <Route exact path="/Resources" element={<Resources />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/Resources/Videos" element={<Videos />} />
        <Route
          exact
          path="/Resources/Videos/WatchMoreVideos"
          element={<WatchMoreVideos />}
        />
        <Route
          exact
          path="/Resources/Videos/WatchMoreVideos/PlayVideo/:id"
          element={<PlayVideo />}
        />

        <Route exact path="/Resources/Career" element={<Career />} />
        <Route
          exact
          path="/Resources/Career/job-details"
          element={<JobDetails />}
        />
        <Route
          exact
          path="/Resources/BecomeAPartner"
          element={<BecomeAPartner />}
        />
        <Route
          exact
          path="/Solutions/By-Industries"
          element={<SolutionByIndustries />}
        />
        <Route exact path="/Solutions/By-Size" element={<SolutionBysize />} />
        <Route exact path="/Solutions/By-role" element={<IndustriesByrole />} />

        <Route
          exact
          path="/Solutions/By-usecases"
          element={<SolutionByusecases />}
        />
        <Route exact path="/Resources/Blog" element={<Blog />} />
        <Route exact path="/Resources/Blog/:id" element={<BlogContent />} />
        <Route exact path="/Resources/BlogContent" element={<BlogContent />} />

        <Route exact path="/Resources/faq" element={<Faq />} />
        <Route exact path="/Resources/faq/:id" element={<FaqActivities />} />

        <Route exact path="/Resources/CaseStudy" element={<CaseStudy />} />
        <Route exact path="/CaseStudyForm1" element={<CaseStudyForm1 />} />
        <Route
          exact
          path="/Resources/CaseStudy/:id"
          element={<CaseStudyUserExperience />}
        />
        <Route
          exact
          path="/Resources/Testimonials"
          element={<Testimonials />}
        />
        <Route exact path="/Updates" element={<Updates />} />
        <Route exact path="/Updates/:id" element={<UpdatesActivities />} />

        <Route exact path="/HelpAndTraining" element={<HelpAndTraining />} />

        {/* SubFooter pages  */}
        <Route exact path="/subfooter/legal" element={<Legal />} />
        <Route exact path="/subfooter/terms-and-conditions" element={<TnC />} />
        <Route
          exact
          path="/subfooter/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          exact
          path="/subfooter/cancalation-and-refund-policy"
          element={<CancalationRefundPolicy />}
        />
        <Route
          exact
          path="/subfooter/employee-login"
          element={<LegalEmployeeLogin />}
        />
      </Routes>
    </>
  );
};

export default Main;
