import { FunctionComponent } from "react";
import styles from "./Property1Intern1.module.css";

type Property1Intern1Type = {
  internship?: string;
};

const Property1Intern1: FunctionComponent<Property1Intern1Type> = ({
  internship,
}) => {
  return (
    <div className={styles.property1intern}>
      <div className={styles.internship}>{internship}</div>
    </div>
  );
};

export default Property1Intern1;
