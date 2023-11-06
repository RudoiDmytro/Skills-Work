import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Divider.module.css";

type DividerType = {
  oR?: string;

  /** Style props */
  dividerWidth?: CSSProperties["width"];
  dividerAlignSelf?: CSSProperties["alignSelf"];
  oRFontSize?: CSSProperties["fontSize"];
  oRFontFamily?: CSSProperties["fontFamily"];
  oRFontWeight?: CSSProperties["fontWeight"];
};

const Divider: FunctionComponent<DividerType> = ({
  oR,
  dividerWidth,
  dividerAlignSelf,
  oRFontSize,
  oRFontFamily,
  oRFontWeight,
}) => {
  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      width: dividerWidth,
      alignSelf: dividerAlignSelf,
    };
  }, [dividerWidth, dividerAlignSelf]);

  const oRStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: oRFontSize,
      fontFamily: oRFontFamily,
      fontWeight: oRFontWeight,
    };
  }, [oRFontSize, oRFontFamily, oRFontWeight]);

  return (
    <div className={styles.divider} style={dividerStyle}>
      <div className={styles.divider1} />
      <div className={styles.or} style={oRStyle}>
        {oR}
      </div>
      <div className={styles.divider1} />
    </div>
  );
};

export default Divider;
