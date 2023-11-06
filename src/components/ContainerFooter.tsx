import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Logo from "./Logo";
import styles from "./ContainerFooter.module.css";

type ContainerFooterType = {
  dimensionCode?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const ContainerFooter: FunctionComponent<ContainerFooterType> = ({
  dimensionCode,
  propAlignSelf,
  propFlex,
}) => {
  const footer1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={styles.footer} style={footer1Style}>
      <div className={styles.footer1}>
        <div className={styles.jendo}>
          <Logo
            briefcase1="/briefcase-11.svg"
            jobpilot={`Skills&Work`}
            jobpilotColor="#eee"
          />
          <div className={styles.phoneNumberWrapper}>
            <div className={styles.phoneNumber}>
              <div className={styles.callNow}>Подзвони зараз:</div>
              <div className={styles.div}>000-00-000-00-00</div>
            </div>
          </div>
        </div>
        <div className={styles.com}>
          <div className={styles.quickLink}>Швидке посилання</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Про нас</div>
            </div>
            <div className={styles.footerLink1}>
              <div className={styles.footerLink}>
                <img
                  className={styles.fiarrowRightIcon}
                  alt=""
                  src="/fiarrowright3.svg"
                />
                <div className={styles.about}>Контакти</div>
              </div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Ціноутворення</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Блог</div>
            </div>
          </div>
        </div>
        <div className={styles.candidate}>
          <div className={styles.quickLink}>Кандидат</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Перегляньте вакансії</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Перегляньте роботодавців</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Перевірка навичок</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Збережені вакансії</div>
            </div>
          </div>
        </div>
        <div className={styles.employers}>
          <div className={styles.quickLink}>Роботодавці</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Опублікувати вакансію</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Огляд кандидатів</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Оцінка</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Додатково</div>
            </div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.quickLink}>Підтримка</div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Часті запитання</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Політика конфіденційності</div>
            </div>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright3.svg"
              />
              <div className={styles.about}>Правила та умови</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div
          className={styles.skillsworkAllRights}
        >{`@ 2023 Skills&Work. Усі права захищені`}</div>
        <div className={styles.socialMedia}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.youtube1Icon} alt="" src="/youtube-1.svg" />
          <img className={styles.youtube1Icon} alt="" src="/instagram-1.svg" />
          <img className={styles.image2Icon} alt="" src={dimensionCode} />
        </div>
      </div>
    </div>
  );
};

export default ContainerFooter;
