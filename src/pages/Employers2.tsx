import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import DribbbleContainer from "../components/DribbbleContainer";
import AdvancedFilterForm from "../components/AdvancedFilterForm";
import Header3 from "../components/Header3";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Employers2.module.css";

const Employers2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/homepage2");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/job-detail2");
  }, [navigate]);

  return (
    <div className={styles.employers2}>
      <Pagination
        fiarrowRight="/fiarrowright.svg"
        paginationPosition="absolute"
        paginationTop="1354px"
        paginationLeft="784px"
        paginationBackgroundColor="#d14d72"
        paginationBoxSizing="border-box"
        paginationBoxSizing1="border-box"
      />
      <Breadcrumb
        label="Роботодавці"
        label1="Home"
        prop="/"
        label2="Роботодавці"
        showLabel={false}
        breadcrumbPosition="absolute"
        breadcrumbTop="138px"
        breadcrumbLeft="0px"
        breadcrumbWidth="1920px"
        breadcrumbAlignSelf="unset"
      />
      <div className={styles.frameParent} onClick={onFrameContainer22Click}>
        <div className={styles.frameGroup}>
          <div className={styles.employerfalse01truefalsefParent}>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
          </div>
          <div className={styles.employerfalse01truefalsefParent}>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
            <div className={styles.employerfalse01truefalsef}>
              <div className={styles.company}>
                <div className={styles.employersLogo}>
                  <img
                    className={styles.employersLogoIcon}
                    alt=""
                    src="/employers-logo1.svg"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.dribbbleParent}>
                    <div className={styles.dribbble}>Dribbble</div>
                    <div className={styles.badge}>
                      <div className={styles.featured}>Рекомендовані</div>
                    </div>
                  </div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.openPosition3}>Відкрити позиції (3)</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <DribbbleContainer
            featured="Рекомендовані"
            ukraineKyiv="Україна, Київ"
            openPosition3="Відкрити позиції (3)"
            featured1="Рекомендовані"
            ukraineKyiv1="Україна, Київ"
            openPosition31="Відкрити позиції (3)"
            featured2="Рекомендовані"
            ukraineKyiv2="Україна, Київ"
            openPosition32="Відкрити позиції (3)"
            propWidth="unset"
            frameDivAlignSelf="unset"
            employerFalse01TrueFalseFFlex="unset"
            employerFalse01TrueFalseFWidth="424px"
            employersLogoBoxSizing="border-box"
            openPosition3Flex="unset"
            openPosition3TextAlign="left"
            employerFalse01TrueFalseFFlex1="unset"
            employerFalse01TrueFalseFWidth1="424px"
            employersLogoBoxSizing1="border-box"
            openPosition3Flex1="unset"
            openPosition3TextAlign1="left"
            employerFalse01TrueFalseFFlex2="unset"
            employerFalse01TrueFalseFWidth2="424px"
            employersLogoBoxSizing2="border-box"
            openPosition3Flex2="unset"
            openPosition3TextAlign2="left"
          />
          <DribbbleContainer
            featured="Рекомендовані"
            ukraineKyiv="Україна, Київ"
            openPosition3="Відкрити позиції (3)"
            featured1="Рекомендовані"
            ukraineKyiv1="Україна, Київ"
            openPosition31="Відкрити позиції (3)"
            featured2="Рекомендовані"
            ukraineKyiv2="Україна, Київ"
            openPosition32="Відкрити позиції (3)"
            propWidth="unset"
            frameDivAlignSelf="unset"
            employerFalse01TrueFalseFFlex="unset"
            employerFalse01TrueFalseFWidth="424px"
            employersLogoBoxSizing="border-box"
            openPosition3Flex="unset"
            openPosition3TextAlign="left"
            employerFalse01TrueFalseFFlex1="unset"
            employerFalse01TrueFalseFWidth1="424px"
            employersLogoBoxSizing1="border-box"
            openPosition3Flex1="unset"
            openPosition3TextAlign1="left"
            employerFalse01TrueFalseFFlex2="unset"
            employerFalse01TrueFalseFWidth2="424px"
            employersLogoBoxSizing2="border-box"
            openPosition3Flex2="unset"
            openPosition3TextAlign2="left"
          />
          <DribbbleContainer
            featured="Рекомендовані"
            ukraineKyiv="Україна, Київ"
            openPosition3="Відкрити позиції (3)"
            featured1="Рекомендовані"
            ukraineKyiv1="Україна, Київ"
            openPosition31="Відкрити позиції (3)"
            featured2="Рекомендовані"
            ukraineKyiv2="Україна, Київ"
            openPosition32="Відкрити позиції (3)"
            propWidth="unset"
            frameDivAlignSelf="unset"
            employerFalse01TrueFalseFFlex="unset"
            employerFalse01TrueFalseFWidth="424px"
            employersLogoBoxSizing="border-box"
            openPosition3Flex="unset"
            openPosition3TextAlign="left"
            employerFalse01TrueFalseFFlex1="unset"
            employerFalse01TrueFalseFWidth1="424px"
            employersLogoBoxSizing1="border-box"
            openPosition3Flex1="unset"
            openPosition3TextAlign1="left"
            employerFalse01TrueFalseFFlex2="unset"
            employerFalse01TrueFalseFWidth2="424px"
            employersLogoBoxSizing2="border-box"
            openPosition3Flex2="unset"
            openPosition3TextAlign2="left"
          />
        </div>
      </div>
      <AdvancedFilterForm
        searchByJobTittlePosition="Пошук за: назвою посади, посадою, ключовим словом..."
        city="Місто"
        primary={["Фільтри", "Пошук роботодавців"]}
        adbanceFilterTop="238px"
        adbanceFilterGap="unset"
        inputFieldBackgroundColor="unset"
      />
      <Header3
        pageTitles="Домашня сторінка"
        testLibraryTitle="Бібліотека тестів"
        jobSearchTitle="Пошук роботи"
        employerNames="Роботодавці"
        pricingPlansTitle="Цінові плани"
        customerSupportTitle="Підтримка клієнтів"
        pageTitleDimensions="/image-12@2x.png"
        languageOptions="Українська"
        countryName="Україна"
        jobInfoKeywords="Назва роботи, ключове слово, компанія"
        onNavLinkContainerClick={onNavLinkContainerClick}
        onNavLinkContainer2Click={onNavLinkContainer2Click}
      />
      <FormContainer1
        callNow="Подзвони зараз:"
        prop="000-00-000-00-00"
        quickLink="Швидке посилання"
        about="Про нас"
        contact="Контакти"
        pricing="Ціноутворення"
        blog="Блог"
        candidate="Кандидат"
        browseJobs="Перегляньте вакансії"
        browseEmployers="Перегляньте роботодавців"
        skillsTesting="Перевірка навичок"
        savedJobs="Збережені вакансії"
        employers="Роботодавці"
        postAJob="Опублікувати вакансію"
        browseCandidates="Огляд кандидатів"
        assessment="Оцінка"
        applications="Додатково"
        support="Підтримка"
        faqs="Часті запитання"
        privacyPolicy="Політика конфіденційності"
        termsConditions="Правила та умови"
        skillsWorkAllRightsRser={`@ 2023 Skills&Work. Усі права захищені`}
      />
    </div>
  );
};

export default Employers2;
