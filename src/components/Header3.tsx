import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import Pricing2 from "./Pricing2";
import PortalPopup from "./PortalPopup";
import EN from "./EN";
import styles from "./Header3.module.css";

type Header3Type = {
  pageTitles?: string;
  testLibraryTitle?: string;
  jobSearchTitle?: string;
  employerNames?: string;
  pricingPlansTitle?: string;
  customerSupportTitle?: string;
  pageTitleDimensions?: string;
  languageOptions?: string;
  countryName?: string;
  jobInfoKeywords?: string;

  /** Style props */
  propJustifyContent?: CSSProperties["justifyContent"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propFlexShrink?: CSSProperties["flexShrink"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propCursor?: CSSProperties["cursor"];
  propColor1?: CSSProperties["color"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propWidth4?: CSSProperties["width"];
  propCursor1?: CSSProperties["cursor"];

  /** Action props */
  onNavLinkContainerClick?: () => void;
  onNavLinkContainer2Click?: () => void;
  onNavLinkContainer3Click?: () => void;
};

const Header3: FunctionComponent<Header3Type> = ({
  pageTitles,
  testLibraryTitle,
  jobSearchTitle,
  employerNames,
  pricingPlansTitle,
  customerSupportTitle,
  pageTitleDimensions,
  languageOptions,
  countryName,
  jobInfoKeywords,
  propJustifyContent,
  propGap,
  propWidth,
  propAlignSelf,
  propWidth1,
  propBoxShadow,
  propColor,
  propFontWeight,
  propWidth2,
  propWidth3,
  propFlexShrink,
  propBoxShadow1,
  propCursor,
  propColor1,
  propFontWeight1,
  propWidth4,
  propCursor1,
  onNavLinkContainerClick,
  onNavLinkContainer2Click,
  onNavLinkContainer3Click,
}) => {
  const [isPricing2Open, setPricing2Open] = useState(false);
  const [isENOpen, setENOpen] = useState(false);
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propJustifyContent, propGap, propWidth, propAlignSelf]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const navLinkStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const employersStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const navLink1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const testLibraryStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      flexShrink: propFlexShrink,
    };
  }, [propWidth3, propFlexShrink]);

  const navLink2Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow1,
      cursor: propCursor,
    };
  }, [propBoxShadow1, propCursor]);

  const home1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      fontWeight: propFontWeight1,
    };
  }, [propColor1, propFontWeight1]);

  const navLink3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      cursor: propCursor1,
    };
  }, [propWidth4, propCursor1]);

  const openPricing2 = useCallback(() => {
    setPricing2Open(true);
  }, []);

  const closePricing2 = useCallback(() => {
    setPricing2Open(false);
  }, []);

  const openEN = useCallback(() => {
    setENOpen(true);
  }, []);

  const closeEN = useCallback(() => {
    setENOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.frameParent} style={frameDiv3Style}>
          <div className={styles.navLinkParent} style={frameDiv4Style}>
            <div className={styles.navLink} onClick={onNavLinkContainerClick}>
              <div className={styles.testLibrary}>{pageTitles}</div>
            </div>
            <div className={styles.navLink1} style={navLinkStyle}>
              <div className={styles.testLibrary} style={employersStyle}>
                {testLibraryTitle}
              </div>
            </div>
            <div
              className={styles.navLink}
              onClick={onNavLinkContainer2Click}
              style={navLink1Style}
            >
              <div className={styles.testLibrary} style={testLibraryStyle}>
                {jobSearchTitle}
              </div>
            </div>
            <div
              className={styles.navLink3}
              style={navLink2Style}
              onClick={onNavLinkContainer3Click}
            >
              <b className={styles.testLibrary} style={home1Style}>
                {employerNames}
              </b>
            </div>
            <div className={styles.navLink} onClick={openPricing2}>
              <div className={styles.testLibrary}>{pricingPlansTitle}</div>
            </div>
            <div className={styles.navLink1}>
              <div className={styles.testLibrary}>{customerSupportTitle}</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.phonecallParent}>
              <img
                className={styles.phonecallIcon}
                alt=""
                src="/phonecall.svg"
              />
              <div className={styles.div}>+380-63-619-04-36</div>
            </div>
            <div
              className={styles.navLink6}
              onClick={openEN}
              style={navLink3Style}
            >
              <img
                className={styles.image1Icon}
                alt=""
                src={pageTitleDimensions}
              />
              <div className={styles.englishParent}>
                <div className={styles.testLibrary}>{languageOptions}</div>
                <img
                  className={styles.fichevronDownIcon}
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation1}>
          <div className={styles.logoParent}>
            <div className={styles.phonecallParent}>
              <img
                className={styles.briefcase1Icon}
                alt=""
                src="/briefcase-1.svg"
              />
              <div className={styles.skillswork}>{`Skills&Work`}</div>
            </div>
            <div className={styles.search}>
              <div className={styles.frameContainer}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <div className={styles.div}>{countryName}</div>
                  <img
                    className={styles.caretdownIcon}
                    alt=""
                    src="/caretdown.svg"
                  />
                </div>
                <div className={styles.frameChild} />
                <div className={styles.fisearchParent}>
                  <img
                    className={styles.fisearchIcon}
                    alt=""
                    src="/fisearch.svg"
                  />
                  <div className={styles.jobTittleKeyword}>
                    {jobInfoKeywords}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <img
              className={styles.bellringingIcon}
              alt=""
              src="/property-1true.svg"
            />
            <img
              className={styles.buttonChild}
              alt=""
              src="/ellipse-18@2x.png"
            />
          </div>
        </div>
      </div>
      {isPricing2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing2}
        >
          <Pricing2 />
        </PortalPopup>
      )}
      {isENOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEN}
        >
          <EN/>
        </PortalPopup>
      )}
    </>
  );
};

export default Header3;
