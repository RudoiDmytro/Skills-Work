import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import Logo from "./Logo";
import styles from "./RelatedJobsContainer.module.css";

const RelatedJobsContainer: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.reletedJobs}>
        <div className={styles.relatedJobs}>Related Jobs</div>
        <div className={styles.frameParent}>
          <CardContainer
            jobTitle="Techical Support Specialist"
            employmentType="Part-time"
            employeeRole="Senior UX Designer"
            jobStatus="Full-Time"
            marketingOfficerTitle="Marketing Officer"
            internshipTitle="Internship"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor="unset"
            propOverflow="unset"
            propBackground1="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor1="unset"
            propBackgroundColor2="#fff"
            propBackground2="unset"
          />
          <CardContainer
            jobTitle="Junior Graphic Designer"
            employmentType="Internship"
            employeeRole="Interaction Designer"
            jobStatus="Part-time"
            marketingOfficerTitle="Project Manager"
            internshipTitle="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
            propBackground1="unset"
            propBackgroundColor1="#fff"
            propBackgroundColor2="#fff"
            propBackground2="unset"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
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
          <div className={styles.employers}>
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
          <div className={styles.support}>
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
        <div className={styles.copyRight}>
          <div
            className={styles.skillsworkAllRights}
          >{`@ 2023 Skills&Work. All rights Rserved`}</div>
          <div className={styles.socialMedia}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.youtube1Icon} alt="" src="/youtube-1.svg" />
            <img
              className={styles.youtube1Icon}
              alt=""
              src="/instagram-1.svg"
            />
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedJobsContainer;
