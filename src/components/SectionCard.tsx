import { FunctionComponent } from "react";
import styles from "./SectionCard.module.css";

const SectionCard: FunctionComponent = () => {
  return (
    <div className={styles.infoParent}>
      <div className={styles.info}>
        <div className={styles.findAJobThatSuitsYourIntParent}>
          <div className={styles.findAJob}>
            Знайдіть роботу, яка відповідає вашим інтересам і навичкам.
          </div>
          <div className={styles.aliquamVitaeTurpis}>
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.search1}>
            <div className={styles.inputFieldParent}>
              <div className={styles.inputField}>
                <div className={styles.jobTittleKeyword}>
                  Посада, ключове слово...
                </div>
                <img
                  className={styles.fisearchIcon}
                  alt=""
                  src="/fisearch.svg"
                />
              </div>
              <div className={styles.frameChild} />
              <div className={styles.inputField1}>
                <div className={styles.jobTittleKeyword}>
                  Ваше місцезнаходження
                </div>
                <img
                  className={styles.fisearchIcon}
                  alt=""
                  src="/fimappin.svg"
                />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.findJob}>Знайти роботу</div>
            </div>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestion1}>Пропозиція:</div>
            <div className={styles.designer}>дизайнер,</div>
            <div className={styles.designer}>програмування,</div>
            <div className={styles.digitalMarketing}>цифровий маркетинг,</div>
            <div className={styles.designer}>відео,</div>
            <div className={styles.designer}>анімація.</div>
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
              src="/briefcaseduotone-11.svg"
            />
          </div>
          <div className={styles.info1}>
            <div className={styles.div}>1,75,324</div>
            <div className={styles.liveJob}>Кількість робіт</div>
          </div>
        </div>
        <div className={styles.feature1}>
          <div className={styles.icon1}>
            <img
              className={styles.briefcaseDuotone1Icon}
              alt=""
              src="/buildingsduotone-1.svg"
            />
          </div>
          <div className={styles.info1}>
            <div className={styles.div}>97,354</div>
            <div className={styles.liveJob}>Компаній</div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img
              className={styles.briefcaseDuotone1Icon}
              alt=""
              src="/usersduotone-11.svg"
            />
          </div>
          <div className={styles.info1}>
            <div className={styles.div}>38,47,154</div>
            <div className={styles.liveJob}>Кандидатів</div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img
              className={styles.briefcaseDuotone1Icon}
              alt=""
              src="/briefcaseduotone-11.svg"
            />
          </div>
          <div className={styles.info1}>
            <div className={styles.div}>7,532</div>
            <div className={styles.liveJob}>Нових робочіх місць</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
