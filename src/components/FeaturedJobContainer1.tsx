import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import styles from "./FeaturedJobContainer1.module.css";

const FeaturedJobContainer1: FunctionComponent = () => {
  return (
    <section className={styles.featuredJob}>
      <div className={styles.heading}>
        <div className={styles.featuredJob1}>Featured job</div>
        <div className={styles.button}>
          <div className={styles.viewAll}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <CardContainer
          jobTitle="Techical Support Specialist"
          employmentType="Part-time"
          employeeRole="Senior UX Designer"
          jobStatus="Full-Time"
          marketingOfficerTitle="Marketing Officer"
          internshipTitle="Internship"
        />
        <CardContainer
          jobTitle="Junior Graphic Designer"
          employmentType="Internship"
          employeeRole="Interaction Designer"
          jobStatus="Part-time"
          marketingOfficerTitle="Project Manager"
          internshipTitle="Full-Time"
          propBackground="unset"
          propBackgroundColor="#fff"
          propOverflow="hidden"
          propBackground1="unset"
          propBackgroundColor1="#fff"
          propBackgroundColor2="#fff"
          propBackground2="unset"
        />
        <CardContainer
          jobTitle="Software Engineer"
          employmentType="Full-Time"
          employeeRole="Visual Designer"
          jobStatus="Full-Time"
          marketingOfficerTitle="Project Manager"
          internshipTitle="Full-Time"
          propBackground="unset"
          propBackgroundColor="#fff"
          propOverflow="unset"
          propBackground1="unset"
          propBackgroundColor1="#fff"
          propBackgroundColor2="unset"
          propBackground2="linear-gradient(90deg, #fff6e6, #fff), #fff"
        />
        <CardContainer
          jobTitle="Front End Developer"
          employmentType="Part-time"
          employeeRole="Senior UX Designer"
          jobStatus="Full-Time"
          marketingOfficerTitle="Marketing Manager"
          internshipTitle="Internship"
          propBackground="unset"
          propBackgroundColor="#fff"
          propOverflow="unset"
          propBackground1="unset"
          propBackgroundColor1="#fff"
          propBackgroundColor2="#fff"
          propBackground2="unset"
        />
      </div>
    </section>
  );
};

export default FeaturedJobContainer1;
