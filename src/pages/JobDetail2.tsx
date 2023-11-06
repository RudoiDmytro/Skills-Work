import { FunctionComponent, useState, useCallback } from "react";
import Pricing2 from "../components/Pricing2";
import PortalPopup from "../components/PortalPopup";
import EN from "../components/EN";
import { useNavigate } from "react-router-dom";
import Breadcrumb1 from "../components/Breadcrumb1";
import Property1Intern from "../components/Property1Intern";
import EmployersGoogleSizeMedium from "../components/EmployersGoogleSizeMedium";
import Logo from "../components/Logo";
import JobInformationContainer from "../components/JobInformationContainer";
import JobDescriptionCard from "../components/JobDescriptionCard";
import SeniorUXDesignerContainer from "../components/SeniorUXDesignerContainer";
import SalaryLocationForm from "../components/SalaryLocationForm";
import styles from "./JobDetail2.module.css";

const JobDetail2: FunctionComponent = () => {
  const [isPricing2Open, setPricing2Open] = useState(false);
  const [isENOpen, setENOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/job-list2");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/tests2");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers2");
  }, [navigate]);

  const openPricing2 = useCallback(() => {
    setPricing2Open(true);
  }, []);

  const closePricing2 = useCallback(() => {
    setPricing2Open(false);
  }, []);

  const openEN = useCallback(() => {
    setENOpen(true);
  }, []);

  const closeEN = useCallback(() => {
    setENOpen(false);
  }, []);

  return (
    <>
      <div className={styles.jobDetail2}>
        <main className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.navigation}>
              <div className={styles.frameParent}>
                <div className={styles.navLinkParent}>
                  <div
                    className={styles.navLink}
                    onClick={onNavLinkContainerClick}
                  >
                    <div className={styles.findJob}>Домашня сторінка</div>
                  </div>
                  <div
                    className={styles.navLink1}
                    onClick={onNavLinkContainer1Click}
                  >
                    <div className={styles.testLibrary}>Бібліотека тестів</div>
                  </div>
                  <div className={styles.navLink2}>
                    <b className={styles.findJob}>Пошук роботи</b>
                  </div>
                  <div
                    className={styles.navLink}
                    onClick={onNavLinkContainer3Click}
                  >
                    <div className={styles.findJob}>Роботодавці</div>
                  </div>
                  <div className={styles.navLink} onClick={openPricing2}>
                    <div className={styles.findJob}>Цінові плани</div>
                  </div>
                  <div className={styles.navLink5}>
                    <div className={styles.findJob}>Підтримка клієнтів</div>
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
                  <div className={styles.navLink6} onClick={openEN}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/image-12@2x.png"
                    />
                    <div className={styles.englishParent}>
                      <div className={styles.findJob}>Українська</div>
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
                          className={styles.image1Icon1}
                          alt=""
                          src="/image-11@2x.png"
                        />
                        <div className={styles.div}>Україна</div>
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
                  <img
                    className={styles.buttonChild}
                    alt=""
                    src="/ellipse-18@2x.png"
                  />
                </div>
              </div>
            </div>
            <Breadcrumb1
              label="Деталі роботи"
              label1="Home"
              label2="Пошук роботи"
              label4="Графіка та дизайн"
              label6="Деталі роботи"
              label3
              div
              label5
              div1
              showLabel={false}
            />
            <img className={styles.frameItem} alt="" src="/frame-684.svg" />
          </div>
          <div className={styles.frame2}>
            <div className={styles.reletedJobs}>
              <div className={styles.relatedJobs}>Схожі вакансії</div>
              <div className={styles.frameDiv}>
                <div className={styles.jobParent}>
                  <div className={styles.job}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Спеціаліст технічної підтримки
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Неповний робочий день" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.job}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Старший дизайнер UX
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Повний день" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.job2}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Офіцер з маркетингу
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Стажування" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.jobParent}>
                  <div className={styles.job2}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Молодший графічний дизайнер
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Стажування" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.job2}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Дизайнер взаємодії
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Неповний робочий день" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.job2}>
                    <div className={styles.heading}>
                      <div className={styles.techicalSupportSpecialist}>
                        Керівник проекту
                      </div>
                      <div className={styles.typeParent}>
                        <Property1Intern internship="Повний день" />
                        <div className={styles.findJob}>
                          Зарплата: $20 000 - $25 000
                        </div>
                      </div>
                    </div>
                    <div className={styles.company}>
                      <EmployersGoogleSizeMedium
                        employersGoogleSizeMediumPadding="12px"
                        employersGoogleSizeMediumBoxSizing="border-box"
                      />
                      <div className={styles.info}>
                        <div className={styles.googleInc}>Google Inc</div>
                        <div className={styles.loaction}>
                          <img
                            className={styles.mappinIcon}
                            alt=""
                            src="/mappin.svg"
                          />
                          <div className={styles.dhakaBangladesh}>
                            Дакка, Бангладеш
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/bookmarksimple.svg"
                      />
                    </div>
                  </div>
                </div>
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
                      <div className={styles.callNow}>Подзвони зараз:</div>
                      <div className={styles.div1}>000-00-000-00-00</div>
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
                      <div className={styles.jobTittleKeyword}>Про нас</div>
                    </div>
                    <div className={styles.footerLink1}>
                      <div className={styles.footerLink}>
                        <img
                          className={styles.fiarrowRightIcon}
                          alt=""
                          src="/fiarrowright3.svg"
                        />
                        <div className={styles.jobTittleKeyword}>Контакти</div>
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Ціноутворення
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>Блог</div>
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
                      <div className={styles.jobTittleKeyword}>
                        Перегляньте вакансії
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Перегляньте роботодавців
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Перевірка навичок
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Збережені вакансії
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.employers1}>
                  <div className={styles.quickLink}>Роботодавці</div>
                  <div className={styles.link}>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Опублікувати вакансію
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Огляд кандидатів
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>Оцінка</div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>Додатково</div>
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
                      <div className={styles.jobTittleKeyword}>
                        Часті запитання
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Політика конфіденційності
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                      <div className={styles.jobTittleKeyword}>
                        Правила та умови
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copyRight}>
                <div
                  className={styles.findJob}
                >{`@ 2023 Skills&Work. Усі права захищені`}</div>
                <div className={styles.socialMedia}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.youtube1Icon}
                    alt=""
                    src="/youtube-1.svg"
                  />
                  <img
                    className={styles.youtube1Icon}
                    alt=""
                    src="/instagram-1.svg"
                  />
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className={styles.jobInformationParent}>
          <JobInformationContainer
            jobOverview="Огляд роботи"
            jobPosted="Опублікована вакансія:"
            jun2021="14 червня 2021 р"
            jobExpireIn="Вакансія закінчується через:"
            aug2021="14 серпня 2021 р"
            jobLevel="Рівень роботи:"
            entryLevel="Базовий рівень"
            experience="Досвід"
            k80kmonth="$50k-80k/місяць"
            education="Освіта"
            graduation="Градація"
            shareThisJob="Поділіться цією вакансією:"
            copyLinks="Копіювати посилання"
            frameDivWidth="480px"
            frameDivGap="20px"
            socialButtonWidth="unset"
            socialButtonFlexShrink="unset"
            socialButtonFlex="1"
          />
          <JobDescriptionCard />
          <SeniorUXDesignerContainer
            primary="Відгукнутися"
            fiarrowRight="/fiarrowright6.svg"
            seniorUXDesigner="Старший дизайнер UX"
            atFacebook="у Facebook"
            fULLTIME="ПОВНИЙ ДЕНЬ"
            featured="Рекомендовані"
          />
          <SalaryLocationForm
            salaryUSD="Зарплата (USD)"
            prop="$100 000 - $120 000"
            yearlySalary="Річна зарплата"
            jobLocation="Місце роботи"
            remote="Дистанційно"
          />
        </div>
      </div>
      {isPricing2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing2}
        >
          <Pricing2 />
        </PortalPopup>
      )}
      {isENOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEN}
        >
          <EN />
        </PortalPopup>
      )}
    </>
  );
};

export default JobDetail2;
