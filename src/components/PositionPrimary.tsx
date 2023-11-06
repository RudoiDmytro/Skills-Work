import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PositionPrimary.module.css";

type PositionPrimaryType = {
  featured?: string;

  /** Style props */
  positionPrimaryBackgroundColor?: CSSProperties["backgroundColor"];
  positionPrimaryPadding?: CSSProperties["padding"];
  featuredColor?: CSSProperties["color"];
};

const PositionPrimary: FunctionComponent<PositionPrimaryType> = ({
  featured,
  positionPrimaryBackgroundColor,
  positionPrimaryPadding,
  featuredColor,
}) => {
  const positionPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: positionPrimaryBackgroundColor,
      padding: positionPrimaryPadding,
    };
  }, [positionPrimaryBackgroundColor, positionPrimaryPadding]);

  const featuredStyle: CSSProperties = useMemo(() => {
    return {
      color: featuredColor,
    };
  }, [featuredColor]);

  return (
    <div className={styles.positionprimary} style={positionPrimaryStyle}>
      <div className={styles.featured} style={featuredStyle}>
        {featured}
      </div>
    </div>
  );
};

export default PositionPrimary;
