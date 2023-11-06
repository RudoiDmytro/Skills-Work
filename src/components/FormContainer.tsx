import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Logo from "./Logo";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const copyRightStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footer1}>
        <div className={styles.frame}>
          <div className={styles.jendo}>
            <Logo
              briefcase1="/briefcase-11.svg"
              jobpilot={`Skills&Work`}
              jobpilotColor="#eee"
            />
            <div className={styles.phoneNumberWrapper}>
              <div className={styles.phoneNumber}>
                <div className={styles.callNow}>Call now:</div>
                <div className={styles.div}>000 -00-000-00-00</div>
              </div>
            </div>
          </div>
          <div className={styles.com}>
            <div className={styles.quickLink}>Quick Link</div>
            <div className={styles.link}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.footerLink1}>
                <div className={styles.footerLink}>
                  <img
                    className={styles.fiarrowRightIcon}
                    alt=""
                    src="/fiarrowright3.svg"
                  />
                  <div className={styles.about}>Contact</div>
                </div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Pricing</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Blog</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.candidate}>
            <div className={styles.quickLink}>Candidate</div>
            <div className={styles.link}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Browse Jobs</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Browse Employers</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Skills testing</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Saved Jobs</div>
              </div>
            </div>
          </div>
          <div className={styles.candidate}>
            <div className={styles.quickLink}>Employers</div>
            <div className={styles.link}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Post a Job</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Browse Candidates</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Assessment</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Applications</div>
              </div>
            </div>
          </div>
          <div className={styles.candidate}>
            <div className={styles.quickLink}>Support</div>
            <div className={styles.link}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Faqs</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Privacy Policy</div>
              </div>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>{`Terms & Conditions`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight} style={copyRightStyle}>
        <div
          className={styles.skillsworkAllRights}
        >{`@ 2023 Skills&Work. All rights Rserved`}</div>
        <div className={styles.socialMedia}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.youtube1Icon} alt="" src="/youtube-1.svg" />
          <img className={styles.youtube1Icon} alt="" src="/instagram-1.svg" />
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
