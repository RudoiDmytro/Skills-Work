import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tracker.module.css";

type TrackerType = {
  div?: boolean;
  div1?: boolean;

  /** Style props */
  divBackgroundColor?: CSSProperties["backgroundColor"];
  divBackgroundColor1?: CSSProperties["backgroundColor"];
  divBackgroundColor2?: CSSProperties["backgroundColor"];
  divBackgroundColor3?: CSSProperties["backgroundColor"];
  divBackgroundColor4?: CSSProperties["backgroundColor"];
};

const Tracker: FunctionComponent<TrackerType> = ({
  div,
  div1,
  divBackgroundColor,
  divBackgroundColor1,
  divBackgroundColor2,
  divBackgroundColor3,
  divBackgroundColor4,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor,
    };
  }, [divBackgroundColor]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor1,
    };
  }, [divBackgroundColor1]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor2,
    };
  }, [divBackgroundColor2]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor3,
    };
  }, [divBackgroundColor3]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor4,
    };
  }, [divBackgroundColor4]);

  return (
    <div className={styles.tracker}>
      <div className={styles.div} style={div1Style} />
      <div className={styles.div1} />
      {!div && <div className={styles.div1} style={div2Style} />}
      <div className={styles.div3} style={div3Style} />
      {!div1 && <div className={styles.div1} style={div4Style} />}
      <div className={styles.div} style={div5Style} />
      <div className={styles.div1} />
    </div>
  );
};

export default Tracker;
