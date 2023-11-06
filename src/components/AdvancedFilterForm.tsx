import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SizeMediumPositionSecondar from "./SizeMediumPositionSecondar";
import SizeMediumPositionPrimary from "./SizeMediumPositionPrimary";
import styles from "./AdvancedFilterForm.module.css";

type AdvancedFilterFormType = {
  searchByJobTittlePosition?: string;
  city?: string;
  primary?: string[];

  /** Style props */
  adbanceFilterTop?: CSSProperties["top"];
  adbanceFilterGap?: CSSProperties["gap"];
  inputFieldBackgroundColor?: CSSProperties["backgroundColor"];
};

const AdvancedFilterForm: FunctionComponent<AdvancedFilterFormType> = ({
  searchByJobTittlePosition,
  city,
  primary,
  adbanceFilterTop,
  adbanceFilterGap,
  inputFieldBackgroundColor,
}) => {
  const adbanceFilterStyle: CSSProperties = useMemo(() => {
    return {
      top: adbanceFilterTop,
      gap: adbanceFilterGap,
    };
  }, [adbanceFilterTop, adbanceFilterGap]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: inputFieldBackgroundColor,
    };
  }, [inputFieldBackgroundColor]);

  return (
    <div className={styles.adbanceFilter} style={adbanceFilterStyle}>
      <div className={styles.inputField} style={inputFieldStyle}>
        <div className={styles.searchByJob}>{searchByJobTittlePosition}</div>
        <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
      </div>
      <div className={styles.devider} />
      <div className={styles.inputField1}>
        <div className={styles.city}>{city}</div>
        <img className={styles.crosshairIcon} alt="" src="/crosshair1.svg" />
        <img className={styles.mappinIcon} alt="" src="/mappin2.svg" />
      </div>
      <div className={styles.buttonParent}>
        <SizeMediumPositionSecondar
          fiarrowRight="/sliders.svg"
          primary="Filters"
          sizeMediumPositionSecondaBackgroundColor="#f1f2f4"
          fiarrowRightIconOverflow="unset"
          fiarrowRightIconFlexShrink="unset"
          primaryColor="#18191c"
        />
        <SizeMediumPositionPrimary
          primary="Find Job"
          sizeMediumPositionPrimaryBackgroundColor="#d14d72"
        />
      </div>
    </div>
  );
};

export default AdvancedFilterForm;
