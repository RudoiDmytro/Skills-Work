import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import FormContainer1 from "../components/FormContainer1";
import DribbbleContainer1 from "../components/DribbbleContainer1";
import AdvancedFilterForm from "../components/AdvancedFilterForm";
import Header1 from "../components/Header1";
import styles from "./Employers.module.css";

const Employers: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.employers}>
      <Pagination
        fiarrowRight="/fiarrowright.svg"
        paginationPosition="absolute"
        paginationTop="1354px"
        paginationLeft="784px"
        paginationBackgroundColor="#d14d72"
        paginationBoxSizing="border-box"
        paginationBoxSizing1="border-box"
      />
      <Breadcrumb
        label="Find Job"
        label1="Home"
        prop="/"
        label2="Find job"
        showLabel
        breadcrumbPosition="absolute"
        breadcrumbTop="138px"
        breadcrumbLeft="0px"
        breadcrumbWidth="1920px"
        breadcrumbAlignSelf="unset"
      />
      <FormContainer1
        callNow="Call now:"
        prop="000 -00-000-00-00"
        quickLink="Quick Link"
        about="About"
        contact="Contact"
        pricing="Pricing"
        blog="Blog"
        candidate="Candidate"
        browseJobs="Browse Jobs"
        browseEmployers="Browse Employers"
        skillsTesting="Skills testing"
        savedJobs="Saved Jobs"
        employers="Employers"
        postAJob="Post a Job"
        browseCandidates="Browse Candidates"
        assessment="Assessment"
        applications="Applications"
        support="Support"
        faqs="Faqs"
        privacyPolicy="Privacy Policy"
        termsConditions={`Terms & Conditions`}
        skillsWorkAllRightsRser={`@ 2023 Skills&Work. All rights Rserved`}
      />
      <DribbbleContainer1 />
      <AdvancedFilterForm
        searchByJobTittlePosition="Search by: Job tittle, Position, Keyword..."
        city="City"
        primary={["Filters", "Find Job"]}
      />
      <Header1 />
    </div>
  );
};

export default Employers;
