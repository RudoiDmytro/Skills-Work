import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Breadcrumb.module.css";

type BreadcrumbType = {
  label?: string;
  label1?: string;
  prop?: string;
  label2?: string;
  showLabel?: boolean;

  /** Style props */
  breadcrumbPosition?: CSSProperties["position"];
  breadcrumbTop?: CSSProperties["top"];
  breadcrumbLeft?: CSSProperties["left"];
  breadcrumbWidth?: CSSProperties["width"];
  breadcrumbAlignSelf?: CSSProperties["alignSelf"];
};

const Breadcrumb: FunctionComponent<BreadcrumbType> = ({
  label,
  label1,
  prop,
  label2,
  showLabel,
  breadcrumbPosition,
  breadcrumbTop,
  breadcrumbLeft,
  breadcrumbWidth,
  breadcrumbAlignSelf,
}) => {
  const breadcrumbStyle: CSSProperties = useMemo(() => {
    return {
      position: breadcrumbPosition,
      top: breadcrumbTop,
      left: breadcrumbLeft,
      width: breadcrumbWidth,
      alignSelf: breadcrumbAlignSelf,
    };
  }, [
    breadcrumbPosition,
    breadcrumbTop,
    breadcrumbLeft,
    breadcrumbWidth,
    breadcrumbAlignSelf,
  ]);

  return (
    <div className={styles.breadcrumb} style={breadcrumbStyle}>
      <div className={styles.label}>{label}</div>
      <div className={styles.process}>
        {showLabel && <div className={styles.div}>{label1}</div>}
        <div className={styles.div}>{prop}</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label2}>/</div>
        <div className={styles.label9}>{label2}</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
