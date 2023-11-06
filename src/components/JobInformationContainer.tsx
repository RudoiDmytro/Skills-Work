import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./JobInformationContainer.module.css";

type JobInformationContainerType = {
  jobOverview?: string;
  jobPosted?: string;
  jun2021?: string;
  jobExpireIn?: string;
  aug2021?: string;
  jobLevel?: string;
  entryLevel?: string;
  experience?: string;
  k80kmonth?: string;
  education?: string;
  graduation?: string;
  shareThisJob?: string;
  copyLinks?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  socialButtonWidth?: CSSProperties["width"];
  socialButtonFlexShrink?: CSSProperties["flexShrink"];
  socialButtonFlex?: CSSProperties["flex"];
};

const JobInformationContainer: FunctionComponent<
  JobInformationContainerType
> = ({
  jobOverview,
  jobPosted,
  jun2021,
  jobExpireIn,
  aug2021,
  jobLevel,
  entryLevel,
  experience,
  k80kmonth,
  education,
  graduation,
  shareThisJob,
  copyLinks,
  frameDivWidth,
  frameDivGap,
  socialButtonWidth,
  socialButtonFlexShrink,
  socialButtonFlex,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivWidth, frameDivGap]);

  const socialButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: socialButtonWidth,
      flexShrink: socialButtonFlexShrink,
      flex: socialButtonFlex,
    };
  }, [socialButtonWidth, socialButtonFlexShrink, socialButtonFlex]);

  return (
    <div className={styles.jobInformation}>
      <div className={styles.jobOverviewParent}>
        <div className={styles.jobOverview}>{jobOverview}</div>
        <div className={styles.infoParent}>
          <div className={styles.info}>
            <img
              className={styles.calendarblankIcon}
              alt=""
              src="/calendarblank1.svg"
            />
            <div className={styles.heading}>
              <div className={styles.jobPosted}>{jobPosted}</div>
              <div className={styles.entryLevel}>{jun2021}</div>
            </div>
          </div>
          <div className={styles.info}>
            <img
              className={styles.calendarblankIcon}
              alt=""
              src="/calendarblank1.svg"
            />
            <div className={styles.heading}>
              <div className={styles.jobPosted}>{jobExpireIn}</div>
              <div className={styles.entryLevel}>{aug2021}</div>
            </div>
          </div>
          <div className={styles.info}>
            <img
              className={styles.calendarblankIcon}
              alt=""
              src="/calendarblank1.svg"
            />
            <div className={styles.heading}>
              <div className={styles.jobPosted}>{jobLevel}</div>
              <div className={styles.entryLevel}>{entryLevel}</div>
            </div>
          </div>
        </div>
        <div className={styles.infoGroup}>
          <div className={styles.info3}>
            <img
              className={styles.calendarblankIcon}
              alt=""
              src="/wallet1.svg"
            />
            <div className={styles.heading3}>
              <div className={styles.experience}>{experience}</div>
              <div className={styles.k80kmonth}>{k80kmonth}</div>
            </div>
          </div>
          <div className={styles.info3}>
            <img
              className={styles.briefcaseIcon}
              alt=""
              src="/calendarblank1.svg"
            />
            <div className={styles.heading3}>
              <div className={styles.experience}>{education}</div>
              <div className={styles.k80kmonth}>{graduation}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.jobInformationChild} />
      <div className={styles.shareThisJobParent}>
        <div className={styles.shareThisJob}>{shareThisJob}</div>
        <div className={styles.socialButtonParent} style={frameDiv5Style}>
          <div className={styles.socialButton} style={socialButtonStyle}>
            <div className={styles.copyLinks}>{copyLinks}</div>
          </div>
          <div className={styles.socialButton1}>
            <img className={styles.socialIcon} alt="" src="/social-icon.svg" />
          </div>
          <div className={styles.socialButton2}>
            <img className={styles.socialIcon} alt="" src="/social-icon1.svg" />
          </div>
          <div className={styles.socialButton1}>
            <img className={styles.socialIcon} alt="" src="/social-icon2.svg" />
          </div>
          <div className={styles.socialButton4}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformationContainer;
