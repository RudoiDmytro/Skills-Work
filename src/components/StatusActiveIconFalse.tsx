import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StatusActiveIconFalse.module.css";

type StatusActiveIconFalseType = {
  home?: string;

  /** Style props */
  statusActiveIconFalseBoxShadow?: CSSProperties["boxShadow"];
  statusActiveIconFalseCursor?: CSSProperties["cursor"];
  homeFontWeight?: CSSProperties["fontWeight"];
  homeColor?: CSSProperties["color"];

  /** Action props */
  onNavLinkContainerClick?: () => void;
};

const StatusActiveIconFalse: FunctionComponent<StatusActiveIconFalseType> = ({
  home,
  statusActiveIconFalseBoxShadow,
  statusActiveIconFalseCursor,
  homeFontWeight,
  homeColor,
  onNavLinkContainerClick,
}) => {
  const statusActiveIconFalseStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: statusActiveIconFalseBoxShadow,
      cursor: statusActiveIconFalseCursor,
    };
  }, [statusActiveIconFalseBoxShadow, statusActiveIconFalseCursor]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: homeFontWeight,
      color: homeColor,
    };
  }, [homeFontWeight, homeColor]);

  return (
    <div
      className={styles.statusactiveIconfalse}
      style={statusActiveIconFalseStyle}
      onClick={onNavLinkContainerClick}
    >
      <div className={styles.home} style={homeStyle}>
        {home}
      </div>
    </div>
  );
};

export default StatusActiveIconFalse;
