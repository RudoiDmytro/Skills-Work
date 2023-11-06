import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DribbbleContainer.module.css";

type DribbbleContainerType = {
  featured?: string;
  ukraineKyiv?: string;
  openPosition3?: string;
  featured1?: string;
  ukraineKyiv1?: string;
  openPosition31?: string;
  featured2?: string;
  ukraineKyiv2?: string;
  openPosition32?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  employerFalse01TrueFalseFFlex?: CSSProperties["flex"];
  employerFalse01TrueFalseFWidth?: CSSProperties["width"];
  employersLogoBoxSizing?: CSSProperties["boxSizing"];
  openPosition3Flex?: CSSProperties["flex"];
  openPosition3TextAlign?: CSSProperties["textAlign"];
  employerFalse01TrueFalseFFlex1?: CSSProperties["flex"];
  employerFalse01TrueFalseFWidth1?: CSSProperties["width"];
  employersLogoBoxSizing1?: CSSProperties["boxSizing"];
  openPosition3Flex1?: CSSProperties["flex"];
  openPosition3TextAlign1?: CSSProperties["textAlign"];
  employerFalse01TrueFalseFFlex2?: CSSProperties["flex"];
  employerFalse01TrueFalseFWidth2?: CSSProperties["width"];
  employersLogoBoxSizing2?: CSSProperties["boxSizing"];
  openPosition3Flex2?: CSSProperties["flex"];
  openPosition3TextAlign2?: CSSProperties["textAlign"];
};

const DribbbleContainer: FunctionComponent<DribbbleContainerType> = ({
  featured,
  ukraineKyiv,
  openPosition3,
  featured1,
  ukraineKyiv1,
  openPosition31,
  featured2,
  ukraineKyiv2,
  openPosition32,
  propWidth,
  frameDivAlignSelf,
  employerFalse01TrueFalseFFlex,
  employerFalse01TrueFalseFWidth,
  employersLogoBoxSizing,
  openPosition3Flex,
  openPosition3TextAlign,
  employerFalse01TrueFalseFFlex1,
  employerFalse01TrueFalseFWidth1,
  employersLogoBoxSizing1,
  openPosition3Flex1,
  openPosition3TextAlign1,
  employerFalse01TrueFalseFFlex2,
  employerFalse01TrueFalseFWidth2,
  employersLogoBoxSizing2,
  openPosition3Flex2,
  openPosition3TextAlign2,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [propWidth, frameDivAlignSelf]);

  const employerFalse01TrueFalseFStyle: CSSProperties = useMemo(() => {
    return {
      flex: employerFalse01TrueFalseFFlex,
      width: employerFalse01TrueFalseFWidth,
    };
  }, [employerFalse01TrueFalseFFlex, employerFalse01TrueFalseFWidth]);

  const employersLogoStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: employersLogoBoxSizing,
    };
  }, [employersLogoBoxSizing]);

  const openPosition3Style: CSSProperties = useMemo(() => {
    return {
      flex: openPosition3Flex,
      textAlign: openPosition3TextAlign,
    };
  }, [openPosition3Flex, openPosition3TextAlign]);

  const employerFalse01TrueFalseF1Style: CSSProperties = useMemo(() => {
    return {
      flex: employerFalse01TrueFalseFFlex1,
      width: employerFalse01TrueFalseFWidth1,
    };
  }, [employerFalse01TrueFalseFFlex1, employerFalse01TrueFalseFWidth1]);

  const employersLogo1Style: CSSProperties = useMemo(() => {
    return {
      boxSizing: employersLogoBoxSizing1,
    };
  }, [employersLogoBoxSizing1]);

  const openPosition31Style: CSSProperties = useMemo(() => {
    return {
      flex: openPosition3Flex1,
      textAlign: openPosition3TextAlign1,
    };
  }, [openPosition3Flex1, openPosition3TextAlign1]);

  const employerFalse01TrueFalseF2Style: CSSProperties = useMemo(() => {
    return {
      flex: employerFalse01TrueFalseFFlex2,
      width: employerFalse01TrueFalseFWidth2,
    };
  }, [employerFalse01TrueFalseFFlex2, employerFalse01TrueFalseFWidth2]);

  const employersLogo2Style: CSSProperties = useMemo(() => {
    return {
      boxSizing: employersLogoBoxSizing2,
    };
  }, [employersLogoBoxSizing2]);

  const openPosition32Style: CSSProperties = useMemo(() => {
    return {
      flex: openPosition3Flex2,
      textAlign: openPosition3TextAlign2,
    };
  }, [openPosition3Flex2, openPosition3TextAlign2]);

  return (
    <div
      className={styles.employerfalse01truefalsefParent}
      style={frameDiv2Style}
    >
      <div
        className={styles.employerfalse01truefalsef}
        style={employerFalse01TrueFalseFStyle}
      >
        <div className={styles.company}>
          <div className={styles.employersLogo} style={employersLogoStyle}>
            <img
              className={styles.employersLogoIcon}
              alt=""
              src="/employers-logo1.svg"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.dribbbleParent}>
              <div className={styles.dribbble}>Dribbble</div>
              <div className={styles.badge}>
                <div className={styles.featured}>{featured}</div>
              </div>
            </div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.ukraineKyiv}>{ukraineKyiv}</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.openPosition3} style={openPosition3Style}>
            {openPosition3}
          </div>
        </div>
      </div>
      <div
        className={styles.employerfalse01truefalsef}
        style={employerFalse01TrueFalseF1Style}
      >
        <div className={styles.company}>
          <div className={styles.employersLogo} style={employersLogo1Style}>
            <img
              className={styles.employersLogoIcon}
              alt=""
              src="/employers-logo1.svg"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.dribbbleParent}>
              <div className={styles.dribbble}>Dribbble</div>
              <div className={styles.badge}>
                <div className={styles.featured}>{featured1}</div>
              </div>
            </div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.ukraineKyiv}>{ukraineKyiv1}</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.openPosition3} style={openPosition31Style}>
            {openPosition31}
          </div>
        </div>
      </div>
      <div
        className={styles.employerfalse01truefalsef}
        style={employerFalse01TrueFalseF2Style}
      >
        <div className={styles.company}>
          <div className={styles.employersLogo} style={employersLogo2Style}>
            <img
              className={styles.employersLogoIcon}
              alt=""
              src="/employers-logo1.svg"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.dribbbleParent}>
              <div className={styles.dribbble}>Dribbble</div>
              <div className={styles.badge}>
                <div className={styles.featured}>{featured2}</div>
              </div>
            </div>
            <div className={styles.loaction}>
              <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
              <div className={styles.ukraineKyiv}>{ukraineKyiv2}</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.openPosition3} style={openPosition32Style}>
            {openPosition32}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DribbbleContainer;
