import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CandidateContainer1.module.css";

type CandidateContainer1Type = {
  candidateNameEmployerName?: string;
  jobListingButtonText?: string;
  employerImageUrl?: string;
  skillCheckTitle?: string;
  savedVacanciesButtonText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const CandidateContainer1: FunctionComponent<CandidateContainer1Type> = ({
  candidateNameEmployerName,
  jobListingButtonText,
  employerImageUrl,
  skillCheckTitle,
  savedVacanciesButtonText,
  propLeft,
}) => {
  const candidateStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.candidate} style={candidateStyle}>
      <div className={styles.candidate1}>{candidateNameEmployerName}</div>
      <div className={styles.link}>
        <div className={styles.footerLink}>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
          <div className={styles.browseJobs}>{jobListingButtonText}</div>
        </div>
        <div className={styles.footerLink}>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
          <div className={styles.browseJobs}>{employerImageUrl}</div>
        </div>
        <div className={styles.footerLink}>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
          <div className={styles.browseJobs}>{skillCheckTitle}</div>
        </div>
        <div className={styles.footerLink}>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
          <div className={styles.browseJobs}>{savedVacanciesButtonText}</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateContainer1;
