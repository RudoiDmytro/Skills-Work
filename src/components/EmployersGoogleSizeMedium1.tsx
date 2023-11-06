import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmployersGoogleSizeMedium1.module.css";

type EmployersGoogleSizeMedium1Type = {
  /** Style props */
  employersGoogleSizeMediumPadding?: CSSProperties["padding"];
  employersGoogleSizeMediumBoxSizing?: CSSProperties["boxSizing"];
};

const EmployersGoogleSizeMedium1: FunctionComponent<
  EmployersGoogleSizeMedium1Type
> = ({
  employersGoogleSizeMediumPadding,
  employersGoogleSizeMediumBoxSizing,
}) => {
  const employersGoogleSizeMediumStyle: CSSProperties = useMemo(() => {
    return {
      padding: employersGoogleSizeMediumPadding,
      boxSizing: employersGoogleSizeMediumBoxSizing,
    };
  }, [employersGoogleSizeMediumPadding, employersGoogleSizeMediumBoxSizing]);

  return (
    <div
      className={styles.employersgoogleSizemedium}
      style={employersGoogleSizeMediumStyle}
    >
      <img
        className={styles.employersLogoIcon}
        alt=""
        src="/employers-logo.svg"
      />
    </div>
  );
};

export default EmployersGoogleSizeMedium1;
