import { FunctionComponent, useState, useCallback } from "react";
import Pricing from "./Pricing";
import PortalPopup from "./PortalPopup";
import UA from "./UA";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader: FunctionComponent = () => {
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isUAOpen, setUAOpen] = useState(false);
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLink1Click = useCallback(() => {
    navigate("/tests");
  }, [navigate]);

  const onNavLink2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  const onNavLink3Click = useCallback(() => {
    navigate("/employers");
  }, [navigate]);

  const openPricing = useCallback(() => {
    setPricingOpen(true);
  }, []);

  const closePricing = useCallback(() => {
    setPricingOpen(false);
  }, []);

  const openUA = useCallback(() => {
    setUAOpen(true);
  }, []);

  const closeUA = useCallback(() => {
    setUAOpen(false);
  }, []);

  const openSignInPopup = useCallback(() => {
    setSignInPopupOpen(true);
  }, []);

  const closeSignInPopup = useCallback(() => {
    setSignInPopupOpen(false);
  }, []);

  const onButton1Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/tests");
  }, [navigate]);

  return (
    <>
      <section className={styles.navigation}>
        <header className={styles.frameParent}>
          <nav className={styles.navLinkParent}>
            <button className={styles.navLink} autoFocus={true} disabled={true}>
              <b className={styles.skillswork}>{`Skills&Work`}</b>
            </button>
            <button className={styles.navLink1} onClick={onNavLink1Click}>
              <div className={styles.testLibrary}>Test library</div>
            </button>
            <button className={styles.navLink2} onClick={onNavLink2Click}>
              <div className={styles.findJob}>Find Job</div>
            </button>
            <button className={styles.navLink2} onClick={onNavLink3Click}>
              <div className={styles.findJob}>Employers</div>
            </button>
            <button className={styles.navLink2} onClick={openPricing}>
              <div className={styles.findJob}>Pricing Plans</div>
            </button>
            <button className={styles.navLink2}>
              <div className={styles.findJob}>Customer Supports</div>
            </button>
          </nav>
          <div className={styles.frameGroup}>
            <div className={styles.phonecallParent}>
              <img
                className={styles.phonecallIcon}
                alt=""
                src="/phonecall.svg"
              />
              <div className={styles.div}>+380-63-619-04-36</div>
            </div>
            <div className={styles.navLink6} onClick={openUA}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.englishParent}>
                <div className={styles.english}>English</div>
                <img
                  className={styles.fichevronDownIcon}
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.navigation1}>
          <div className={styles.logoParent}>
            <div className={styles.phonecallParent}>
              <img
                className={styles.briefcase1Icon}
                alt=""
                src="/briefcase-1.svg"
              />
              <div className={styles.skillswork1}>{`Skills&Work`}</div>
            </div>
            <div className={styles.search}>
              <div className={styles.frameContainer}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon}
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
            <button className={styles.button1} onClick={openSignInPopup}>
              <div className={styles.signIn}>Sign in</div>
            </button>
            <button className={styles.button2} onClick={onButton1Click}>
              <div className={styles.browseJobs}>Browse jobs</div>
            </button>
            <button className={styles.button2} onClick={onButton2Click}>
              <div className={styles.browseJobs}>Skill Assessment</div>
            </button>
          </div>
        </div>
      </section>
      {isPricingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing}
        >
          <Pricing />
        </PortalPopup>
      )}
      {isUAOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUA}
        >
          <UA />
        </PortalPopup>
      )}
      {isSignInPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopup}
        >
          <SignIn onClose={closeSignInPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainHeader;
