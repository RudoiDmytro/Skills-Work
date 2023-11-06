import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import RelatedJobsContainer from "../components/RelatedJobsContainer";
import JobInformationContainer from "../components/JobInformationContainer";
import JobDescriptionFormContainer from "../components/JobDescriptionFormContainer";
import SeniorUXDesignerContainer from "../components/SeniorUXDesignerContainer";
import SalaryLocationForm from "../components/SalaryLocationForm";
import styles from "./JobDetail.module.css";

const JobDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  return (
    <div className={styles.jobDetail}>
      <main className={styles.frame}>
        <Header2 />
        <RelatedJobsContainer />
      </main>
      <div className={styles.jobInformationParent}>
        <JobInformationContainer
          jobOverview="Job Overview"
          jobPosted="Job Posted:"
          jun2021="14 Jun, 2021"
          jobExpireIn="Job expire in:"
          aug2021="14 Aug, 2021"
          jobLevel="Job Level:"
          entryLevel="Entry Level"
          experience="Experience"
          k80kmonth="$50k-80k/month"
          education="Education"
          graduation="Graduation"
          shareThisJob="Share this job:"
          copyLinks="Copy Links"
        />
        <JobDescriptionFormContainer />
        <SeniorUXDesignerContainer
          primary="Apply now"
          fiarrowRight="/fiarrowright5.svg"
          seniorUXDesigner="Senior UX Designer"
          atFacebook="at Facebook"
          fULLTIME="FULL-TIME"
          featured="Featured"
        />
        <SalaryLocationForm
          salaryUSD="Salary (USD)"
          prop="$100,000 - $120,000"
          yearlySalary="Yearly salary"
          jobLocation="Job Location"
          remote="Remote"
        />
      </div>
    </div>
  );
};

export default JobDetail;
