import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SizeMediumPositionPrimary.module.css";

type SizeMediumPositionPrimaryType = {
  primary?: string;

  /** Style props */
  sizeMediumPositionPrimaryBackgroundColor?: CSSProperties["backgroundColor"];
};

const SizeMediumPositionPrimary: FunctionComponent<
  SizeMediumPositionPrimaryType
> = ({ primary, sizeMediumPositionPrimaryBackgroundColor }) => {
  const sizeMediumPositionPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sizeMediumPositionPrimaryBackgroundColor,
    };
  }, [sizeMediumPositionPrimaryBackgroundColor]);

  return (
    <div
      className={styles.sizemediumPositionprimary}
      style={sizeMediumPositionPrimaryStyle}
    >
      <div className={styles.primary}>{primary}</div>
    </div>
  );
};

export default SizeMediumPositionPrimary;
