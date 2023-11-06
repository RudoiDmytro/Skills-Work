import { FunctionComponent } from "react";
import styles from "./Property1Intern.module.css";

type Property1InternType = {
  internship?: string;
};

const Property1Intern: FunctionComponent<Property1InternType> = ({
  internship,
}) => {
  return (
    <div className={styles.property1intern}>
      <div className={styles.internship}>{internship}</div>
    </div>
  );
};

export default Property1Intern;
