import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmployersGoogleSizeMedium.module.css";

type EmployersGoogleSizeMediumType = {
  /** Style props */
  employersGoogleSizeMediumPadding?: CSSProperties["padding"];
  employersGoogleSizeMediumBoxSizing?: CSSProperties["boxSizing"];
};

const EmployersGoogleSizeMedium: FunctionComponent<
  EmployersGoogleSizeMediumType
> = ({
  employersGoogleSizeMediumPadding,
  employersGoogleSizeMediumBoxSizing,
}) => {
  const employersGoogleSizeMedium1Style: CSSProperties = useMemo(() => {
    return {
      padding: employersGoogleSizeMediumPadding,
      boxSizing: employersGoogleSizeMediumBoxSizing,
    };
  }, [employersGoogleSizeMediumPadding, employersGoogleSizeMediumBoxSizing]);

  return (
    <div
      className={styles.employersgoogleSizemedium}
      style={employersGoogleSizeMedium1Style}
    >
      <img
        className={styles.employersLogoIcon}
        alt=""
        src="/employers-logo.svg"
      />
    </div>
  );
};

export default EmployersGoogleSizeMedium;
