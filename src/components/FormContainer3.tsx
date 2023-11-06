import { FunctionComponent } from "react";
import Logo from "./Logo";
import CandidateContainer1 from "./CandidateContainer1";
import styles from "./FormContainer3.module.css";

const FormContainer3: FunctionComponent = () => {
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
        <CandidateContainer1
          candidateNameEmployerName="Кандидат"
          jobListingButtonText="Перегляньте вакансії"
          employerImageUrl="Перегляньте роботодавців"
          skillCheckTitle="Перевірка навичок"
          savedVacanciesButtonText="Збережені вакансії"
        />
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
        <CandidateContainer1
          candidateNameEmployerName="Роботодавці"
          jobListingButtonText="Опублікувати вакансію"
          employerImageUrl="Огляд кандидатів"
          skillCheckTitle="Оцінка"
          savedVacanciesButtonText="Додатково"
          propLeft="882px"
        />
      </div>
      <div className={styles.copyRight}>
        <div
          className={styles.skillsworkAllRights}
        >{`@ 2023 Skills&Work. Усі права захищені`}</div>
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

export default FormContainer3;
