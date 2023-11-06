import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CandidateContainer.module.css";

type CandidateContainerType = {
  ctaText?: string;
  descriptionText?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const CandidateContainer: FunctionComponent<CandidateContainerType> = ({
  ctaText,
  descriptionText,
  propBackgroundImage,
  propColor,
  propColor1,
}) => {
  const candidateEmployersStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const becomeACandidateStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.candidateEmployers} style={candidateEmployersStyle}>
      <div className={styles.heading}>
        <div className={styles.becomeACandidate} style={becomeACandidateStyle}>
          {ctaText}
        </div>
        <div className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
          {descriptionText}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.registerNow}>Register now</div>
        <img
          className={styles.fiarrowRightIcon}
          alt=""
          src="/fiarrowright2.svg"
        />
      </div>
    </div>
  );
};

export default CandidateContainer;
