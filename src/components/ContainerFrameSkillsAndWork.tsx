import { FunctionComponent, useState, useCallback } from "react";
import Pricing from "./Pricing";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import StatusActiveIconFalse from "./StatusActiveIconFalse";
import SizeMediumPositionPrimary from "./SizeMediumPositionPrimary";
import styles from "./ContainerFrameSkillsAndWork.module.css";

const ContainerFrameSkillsAndWork: FunctionComponent = () => {
  const [isPricingOpen, setPricingOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers");
  }, [navigate]);

  const openPricing = useCallback(() => {
    setPricingOpen(true);
  }, []);

  const closePricing = useCallback(() => {
    setPricingOpen(false);
  }, []);

  return (
    <>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <Breadcrumb
              label="Skills assessment"
              label1="Home"
              prop="/"
              label2="Skills assessment"
              showLabel
              breadcrumbPosition="unset"
              breadcrumbTop="unset"
              breadcrumbLeft="unset"
              breadcrumbWidth="1920px"
              breadcrumbAlignSelf="unset"
            />
          </div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <div className={styles.frame3}>
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
                  <StatusActiveIconFalse
                    home="Test library"
                    statusActiveIconFalseBoxShadow="0px -2px 0px #0a65cc inset"
                    statusActiveIconFalseCursor="unset"
                    homeFontWeight="bold"
                    homeColor="#0a65cc"
                  />
                  <div
                    className={styles.navLink}
                    onClick={onNavLinkContainer2Click}
                  >
                    <div className={styles.findJob}>Find job</div>
                  </div>
                  <div
                    className={styles.navLink}
                    onClick={onNavLinkContainer3Click}
                  >
                    <div className={styles.findJob}>Employers</div>
                  </div>
                  <div className={styles.navLink} onClick={openPricing}>
                    <div className={styles.findJob}>Pricing Plans</div>
                  </div>
                  <div className={styles.navLink3}>
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
                  <div className={styles.navLink4}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/image-1@2x.png"
                    />
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
          </div>
          <div className={styles.frame4}>
            <div className={styles.job}>
              <div className={styles.heading}>
                <div className={styles.englishBasicFreeContainer}>
                  <span>{`English (Basic) `}</span>
                  <span className={styles.free}>FREE</span>
                </div>
              </div>
              <div className={styles.company}>
                <div className={styles.info}>
                  <div className={styles.theEnglishLanguage}>
                    The English Language proficiency test is designed to assess
                    the ability of candidates to use and understand the English
                    language. The test will help people assess their English
                    language proficiency. This test contains 15 questions. You
                    will have 10 minutes to complete the test. You have to
                    achieve 50% marks to pass the test.
                  </div>
                </div>
              </div>
              <div className={styles.company1}>
                <div className={styles.info}>
                  <div className={styles.theEnglishLanguage}>
                    Note: Changing tabs, minimizing or any other unfair means
                    will terminate the examination immediately
                  </div>
                </div>
              </div>
              <img
                className={styles.jobChild}
                alt=""
                src="/calendarblank1.svg"
              />
              <div className={styles.adbanceFilter}>
                <div className={styles.inputField}>
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className={styles.jobTittleKeyword}>10 Minute(s)</div>
                </div>
                <div className={styles.inputField1}>
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="/image-311@2x.png"
                  />
                  <div className={styles.jobTittleKeyword}>20 Question(s)</div>
                </div>
                <div className={styles.devider} />
                <div className={styles.buttonWrapper}>
                  <SizeMediumPositionPrimary
                    primary="Start Now"
                    sizeMediumPositionPrimaryBackgroundColor="#d14d72"
                  />
                </div>
              </div>
              <img
                className={styles.jobChild}
                alt=""
                src="/calendarblank1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
      {isPricingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing}
        >
          <Pricing />
        </PortalPopup>
      )}
    </>
  );
};

export default ContainerFrameSkillsAndWork;
