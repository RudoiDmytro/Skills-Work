import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo.module.css";

type LogoType = {
  briefcase1?: string;
  jobpilot?: string;

  /** Style props */
  jobpilotColor?: CSSProperties["color"];
};

const Logo: FunctionComponent<LogoType> = ({
  briefcase1,
  jobpilot,
  jobpilotColor,
}) => {
  const jobpilotStyle: CSSProperties = useMemo(() => {
    return {
      color: jobpilotColor,
    };
  }, [jobpilotColor]);

  return (
    <div className={styles.logo}>
      <img className={styles.briefcase1Icon} alt="" src={briefcase1} />
      <div className={styles.jobpilot} style={jobpilotStyle}>
        {jobpilot}
      </div>
    </div>
  );
};

export default Logo;
