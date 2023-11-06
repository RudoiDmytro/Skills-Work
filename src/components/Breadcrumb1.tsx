import { FunctionComponent } from "react";
import styles from "./Breadcrumb1.module.css";

type Breadcrumb1Type = {
  label?: string;
  label1?: string;
  label2?: string;
  label4?: string;
  label6?: string;
  label3?: boolean;
  div?: boolean;
  label5?: boolean;
  div1?: boolean;
  showLabel?: boolean;
};

const Breadcrumb1: FunctionComponent<Breadcrumb1Type> = ({
  label,
  label1,
  label2,
  label4,
  label6,
  label3,
  div,
  label5,
  div1,
  showLabel,
}) => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.label}>{label}</div>
      <div className={styles.process}>
        {showLabel && <div className={styles.div}>{label1}</div>}
        <div className={styles.div}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        {!label3 && <div className={styles.label2}>{label2}</div>}
        {!div && <div className={styles.label2}>/</div>}
        {!label5 && <div className={styles.label2}>{label4}</div>}
        {!div1 && <div className={styles.label2}>/</div>}
        <div className={styles.label9}>{label6}</div>
      </div>
    </div>
  );
};

export default Breadcrumb1;
