import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StatusFalsePositionPrimary.module.css";

type StatusFalsePositionPrimaryType = {
  fiarrowRight?: string;

  /** Style props */
  statusFalsePositionPrimarBackgroundColor?: CSSProperties["backgroundColor"];
  statusFalsePositionPrimarTransform?: CSSProperties["transform"];
  statusFalsePositionPrimarTransformOrigin?: CSSProperties["transformOrigin"];
  statusFalsePositionPrimarBoxSizing?: CSSProperties["boxSizing"];
};

const StatusFalsePositionPrimary: FunctionComponent<
  StatusFalsePositionPrimaryType
> = ({
  fiarrowRight,
  statusFalsePositionPrimarBackgroundColor,
  statusFalsePositionPrimarTransform,
  statusFalsePositionPrimarTransformOrigin,
  statusFalsePositionPrimarBoxSizing,
}) => {
  const statusFalsePositionPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusFalsePositionPrimarBackgroundColor,
      transform: statusFalsePositionPrimarTransform,
      transformOrigin: statusFalsePositionPrimarTransformOrigin,
      boxSizing: statusFalsePositionPrimarBoxSizing,
    };
  }, [
    statusFalsePositionPrimarBackgroundColor,
    statusFalsePositionPrimarTransform,
    statusFalsePositionPrimarTransformOrigin,
    statusFalsePositionPrimarBoxSizing,
  ]);

  return (
    <div
      className={styles.statusfalsePositionprimary}
      style={statusFalsePositionPrimaryStyle}
    >
      <img className={styles.fiarrowRightIcon} alt="" src={fiarrowRight} />
    </div>
  );
};

export default StatusFalsePositionPrimary;
