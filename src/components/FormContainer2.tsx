import { FunctionComponent } from "react";
import styles from "./FormContainer2.module.css";

const FormContainer2: FunctionComponent = () => {
  return (
    <div className={styles.jobParent}>
      <div className={styles.job}>
        <div className={styles.heading}>
          <div className={styles.englishBasicFreeContainer}>
            <span>{`English (Basic) `}</span>
            <span className={styles.free}>FREE</span>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.heading}>
          <div className={styles.englishBasicFreeContainer}>
            <span>{`English (Basic) `}</span>
            <span className={styles.free}>FREE</span>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.heading}>
          <div className={styles.englishBasicFreeContainer}>
            <span>{`English (Basic) `}</span>
            <span className={styles.free}>FREE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
