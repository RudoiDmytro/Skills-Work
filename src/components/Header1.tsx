import { FunctionComponent, useState, useCallback } from "react";
import Pricing from "./Pricing";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import StatusActiveIconFalse from "./StatusActiveIconFalse";
import styles from "./Header1.module.css";

const Header1: FunctionComponent = () => {
  const [isPricingOpen, setPricingOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/tests");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  const openPricing = useCallback(() => {
    setPricingOpen(true);
  }, []);

  const closePricing = useCallback(() => {
    setPricingOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.frameParent}>
          <div className={styles.navLinkParent}>
            <StatusActiveIconFalse
              home="Home"
              statusActiveIconFalseBoxShadow="unset"
              statusActiveIconFalseCursor="pointer"
              homeFontWeight="unset"
              homeColor="#5e6670"
              onNavLinkContainerClick={onNavLinkContainerClick}
            />
            <div className={styles.navLink} onClick={onNavLinkContainer1Click}>
              <div className={styles.testLibrary}>Test library</div>
            </div>
            <div className={styles.navLink1} onClick={onNavLinkContainer2Click}>
              <div className={styles.findJob}>Find job</div>
            </div>
            <div className={styles.navLink2}>
              <StatusActiveIconFalse
                home="Employers"
                statusActiveIconFalseBoxShadow="0px -2px 0px #0a65cc inset"
                statusActiveIconFalseCursor="unset"
                homeFontWeight="bold"
                homeColor="#0a65cc"
              />
            </div>
            <div className={styles.navLink1} onClick={openPricing}>
              <div className={styles.findJob}>Pricing Plans</div>
            </div>
            <div className={styles.navLink4}>
              <div className={styles.findJob}>Customer Supports</div>
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
            <div className={styles.navLink5}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.englishParent}>
                <div className={styles.findJob}>English</div>
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
                  <div className={styles.div}>Ukraine</div>
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
                    Job tittle, keyword, company
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
      {isPricingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing}
        >
          <Pricing/>
        </PortalPopup>
      )}
    </>
  );
};

export default Header1;
