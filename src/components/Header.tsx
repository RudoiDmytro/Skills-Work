import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.briefcase1Icon}
              alt=""
              src="/briefcase-1.svg"
            />
            <div className={styles.skillswork}>{`Skills&Work`}</div>
          </div>
          <div className={styles.search}>
            <div className={styles.frameParent}>
              <div className={styles.image1Parent}>
                <img
                  className={styles.image1Icon}
                  alt=""
                  src="/image-11@2x.png"
                />
                <div className={styles.ukraine}>Україна</div>
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
                  Назва роботи, ключове слово, компанія
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
          <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
