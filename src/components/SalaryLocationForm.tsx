import { FunctionComponent } from "react";
import styles from "./SalaryLocationForm.module.css";

type SalaryLocationFormType = {
  salaryUSD?: string;
  prop?: string;
  yearlySalary?: string;
  jobLocation?: string;
  remote?: string;
};

const SalaryLocationForm: FunctionComponent<SalaryLocationFormType> = ({
  salaryUSD,
  prop,
  yearlySalary,
  jobLocation,
  remote,
}) => {
  return (
    <div className={styles.salaryLocation}>
      <div className={styles.salary}>
        <div className={styles.salaryUsd}>{salaryUSD}</div>
        <div className={styles.salary1}>
          <div className={styles.div}>{prop}</div>
          <div className={styles.yearlySalary}>{yearlySalary}</div>
        </div>
      </div>
      <div className={styles.salaryLocationChild} />
      <div className={styles.jobLocation}>
        <img className={styles.maptrifoldIcon} alt="" src="/maptrifold1.svg" />
        <div className={styles.jobLocation1}>
          <div className={styles.salaryUsd}>{jobLocation}</div>
          <div className={styles.remote}>{remote}</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryLocationForm;
