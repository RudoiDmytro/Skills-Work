import { FunctionComponent } from "react";
import Logo from "./Logo";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  callNow?: string;
  prop?: string;
  quickLink?: string;
  about?: string;
  contact?: string;
  pricing?: string;
  blog?: string;
  candidate?: string;
  browseJobs?: string;
  browseEmployers?: string;
  skillsTesting?: string;
  savedJobs?: string;
  employers?: string;
  postAJob?: string;
  browseCandidates?: string;
  assessment?: string;
  applications?: string;
  support?: string;
  faqs?: string;
  privacyPolicy?: string;
  termsConditions?: string;
  skillsWorkAllRightsRser?: string;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  callNow,
  prop,
  quickLink,
  about,
  contact,
  pricing,
  blog,
  candidate,
  browseJobs,
  browseEmployers,
  skillsTesting,
  savedJobs,
  employers,
  postAJob,
  browseCandidates,
  assessment,
  applications,
  support,
  faqs,
  privacyPolicy,
  termsConditions,
  skillsWorkAllRightsRser,
}) => {
  return (
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
              <div className={styles.callNow}>{callNow}</div>
              <div className={styles.div}>{prop}</div>
            </div>
          </div>
        </div>
        <div className={styles.com}>
          <div className={styles.quickLink}>{quickLink}</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{about}</div>
            </div>
            <div className={styles.footerLink1}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>{contact}</div>
              </div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{pricing}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{blog}</div>
            </div>
          </div>
        </div>
        <div className={styles.candidate}>
          <div className={styles.quickLink}>{candidate}</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{browseJobs}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{browseEmployers}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{skillsTesting}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{savedJobs}</div>
            </div>
          </div>
        </div>
        <div className={styles.employers}>
          <div className={styles.quickLink}>{employers}</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{postAJob}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{browseCandidates}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{assessment}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{applications}</div>
            </div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.quickLink}>{support}</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{faqs}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{privacyPolicy}</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>{termsConditions}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.skillsworkAllRights}>
          {skillsWorkAllRightsRser}
        </div>
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

export default FormContainer1;
