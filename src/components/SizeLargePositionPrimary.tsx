import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SizeLargePositionPrimary.module.css";

type SizeLargePositionPrimaryType = {
  primary?: string;
  fiarrowRight?: string;

  /** Style props */
  sizeLargePositionPrimaryBackgroundColor?: CSSProperties["backgroundColor"];
  sizeLargePositionPrimaryWidth?: CSSProperties["width"];
};

const SizeLargePositionPrimary: FunctionComponent<
  SizeLargePositionPrimaryType
> = ({
  primary,
  fiarrowRight,
  sizeLargePositionPrimaryBackgroundColor,
  sizeLargePositionPrimaryWidth,
}) => {
  const sizeLargePositionPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sizeLargePositionPrimaryBackgroundColor,
      width: sizeLargePositionPrimaryWidth,
    };
  }, [sizeLargePositionPrimaryBackgroundColor, sizeLargePositionPrimaryWidth]);

  return (
    <div
      className={styles.sizelargePositionprimary}
      style={sizeLargePositionPrimaryStyle}
    >
      <div className={styles.primary}>{primary}</div>
      <img className={styles.fiarrowRightIcon} alt="" src={fiarrowRight} />
    </div>
  );
};

export default SizeLargePositionPrimary;
