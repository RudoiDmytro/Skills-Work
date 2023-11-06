import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SizeMediumPositionSecondar.module.css";

type SizeMediumPositionSecondarType = {
  fiarrowRight?: string;
  primary?: string;

  /** Style props */
  sizeMediumPositionSecondaBackgroundColor?: CSSProperties["backgroundColor"];
  fiarrowRightIconOverflow?: CSSProperties["overflow"];
  fiarrowRightIconFlexShrink?: CSSProperties["flexShrink"];
  primaryColor?: CSSProperties["color"];
};

const SizeMediumPositionSecondar: FunctionComponent<
  SizeMediumPositionSecondarType
> = ({
  fiarrowRight,
  primary,
  sizeMediumPositionSecondaBackgroundColor,
  fiarrowRightIconOverflow,
  fiarrowRightIconFlexShrink,
  primaryColor,
}) => {
  const sizeMediumPositionSecondarStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sizeMediumPositionSecondaBackgroundColor,
    };
  }, [sizeMediumPositionSecondaBackgroundColor]);

  const fiarrowRightIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: fiarrowRightIconOverflow,
      flexShrink: fiarrowRightIconFlexShrink,
    };
  }, [fiarrowRightIconOverflow, fiarrowRightIconFlexShrink]);

  const primaryStyle: CSSProperties = useMemo(() => {
    return {
      color: primaryColor,
    };
  }, [primaryColor]);

  return (
    <div
      className={styles.sizemediumPositionsecondar}
      style={sizeMediumPositionSecondarStyle}
    >
      <img
        className={styles.fiarrowRightIcon}
        alt=""
        src={fiarrowRight}
        style={fiarrowRightIconStyle}
      />
      <div className={styles.primary} style={primaryStyle}>
        {primary}
      </div>
    </div>
  );
};

export default SizeMediumPositionSecondar;
