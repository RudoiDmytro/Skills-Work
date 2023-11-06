import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.infoParent}>
      <div className={styles.info}>
        <div className={styles.findAJobThatSuitsYourIntParent}>
          <div
            className={styles.findAJob}
          >{`Find a job that suits your interest & skills.`}</div>
          <div className={styles.aliquamVitaeTurpis}>
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.search1}>
            <div className={styles.inputFieldParent}>
              <div className={styles.inputField}>
                <img
                  className={styles.fisearchIcon}
                  alt=""
                  src="/fisearch1.svg"
                />
                <div className={styles.jobTittleKeyword}>
                  Job tittle, Keyword...
                </div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.inputField1}>
                <img
                  className={styles.fimapPinIcon}
                  alt=""
                  src="/fimappin.svg"
                />
                <div className={styles.yourLocation}>Your Location</div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.findJob}>Find Job</div>
            </button>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestion1}>Suggestion:</div>
            <div className={styles.designer}> Designer,</div>
            <div className={styles.designer}> Programing,</div>
            <div className={styles.digitalMarketing}> Digital Marketing,</div>
            <div className={styles.designer}> Video,</div>
            <div className={styles.designer}> Animation.</div>
          </div>
        </div>
      </div>
      <img className={styles.illustrationIcon} alt="" src="/illustration.svg" />
      <div className={styles.funFact}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img
              className={styles.briefcaseDuotone1Icon}
              alt=""
              src="/briefcaseduotone-1.svg"
            />
          </div>
          <div className={styles.info1}>
            <div className={styles.div}>1,75,324</div>
            <div className={styles.liveJob}>Live Job</div>
          </div>
        </div>
        <div className={styles.feature1}>
          <div className={styles.icon1}>
            <img
              className={styles.buildingsDuotone1Icon}
              alt=""
              src="/buildingsduotone-1.svg"
            />
          </div>
          <div className={styles.info2}>
            <div className={styles.div}>97,354</div>
            <div className={styles.liveJob}>Companies</div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon2}>
            <img
              className={styles.usersDuotone1Icon}
              alt=""
              src="/usersduotone-1.svg"
            />
          </div>
          <div className={styles.info2}>
            <div className={styles.div}>38,47,154</div>
            <div className={styles.liveJob}>Candidates</div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon2}>
            <img
              className={styles.usersDuotone1Icon}
              alt=""
              src="/briefcaseduotone-1.svg"
            />
          </div>
          <div className={styles.info2}>
            <div className={styles.div}>7,532</div>
            <div className={styles.liveJob}>New Jobs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
