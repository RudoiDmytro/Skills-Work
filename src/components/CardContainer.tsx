import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1Intern from "./Property1Intern";
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  jobTitle?: string;
  employmentType?: string;
  employeeRole?: string;
  jobStatus?: string;
  marketingOfficerTitle?: string;
  internshipTitle?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propBackground1?: CSSProperties["background"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackground2?: CSSProperties["background"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  jobTitle,
  employmentType,
  employeeRole,
  jobStatus,
  marketingOfficerTitle,
  internshipTitle,
  propBackground,
  propBackgroundColor,
  propOverflow,
  propBackground1,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackground2,
}) => {
  const jobStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
    };
  }, [propBackground, propBackgroundColor, propOverflow]);

  const job1Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground1,
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackground1, propBackgroundColor1]);

  const job2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      background: propBackground2,
    };
  }, [propBackgroundColor2, propBackground2]);

  return (
    <div className={styles.jobParent}>
      <div className={styles.job} style={jobStyle}>
        <div className={styles.heading}>
          <div className={styles.techicalSupportSpecialist}>{jobTitle}</div>
          <div className={styles.typeParent}>
            <Property1Intern internship="Part-time" />
            <div className={styles.salary20000}>Salary: $20,000 - $25,000</div>
          </div>
        </div>
        <div className={styles.company}>
          <EmployersGoogleSizeMedium
            employersGoogleSizeMediumPadding="12px"
            employersGoogleSizeMediumBoxSizing="border-box"
          />
          <div className={styles.info}>
            <div className={styles.googleInc}>Google Inc.</div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.dhakaBangladesh}>Dhaka, Bangladesh</div>
            </div>
          </div>
          <img
            className={styles.bookmarksimpleIcon}
            alt=""
            src="/bookmarksimple.svg"
          />
        </div>
      </div>
      <div className={styles.job} style={job1Style}>
        <div className={styles.heading}>
          <div className={styles.techicalSupportSpecialist}>{employeeRole}</div>
          <div className={styles.typeParent}>
            <Property1Intern internship="Full-Time" />
            <div className={styles.salary20000}>Salary: $20,000 - $25,000</div>
          </div>
        </div>
        <div className={styles.company}>
          <EmployersGoogleSizeMedium
            employersGoogleSizeMediumPadding="12px"
            employersGoogleSizeMediumBoxSizing="border-box"
          />
          <div className={styles.info}>
            <div className={styles.googleInc}>Google Inc.</div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.dhakaBangladesh}>Dhaka, Bangladesh</div>
            </div>
          </div>
          <img
            className={styles.bookmarksimpleIcon}
            alt=""
            src="/bookmarksimple.svg"
          />
        </div>
      </div>
      <div className={styles.job2} style={job2Style}>
        <div className={styles.heading}>
          <div className={styles.techicalSupportSpecialist}>
            {marketingOfficerTitle}
          </div>
          <div className={styles.typeParent}>
            <Property1Intern internship="Internship" />
            <div className={styles.salary20000}>Salary: $20,000 - $25,000</div>
          </div>
        </div>
        <div className={styles.company}>
          <EmployersGoogleSizeMedium
            employersGoogleSizeMediumPadding="12px"
            employersGoogleSizeMediumBoxSizing="border-box"
          />
          <div className={styles.info}>
            <div className={styles.googleInc}>Google Inc.</div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.dhakaBangladesh}>Dhaka, Bangladesh</div>
            </div>
          </div>
          <img
            className={styles.bookmarksimpleIcon}
            alt=""
            src="/bookmarksimple.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
