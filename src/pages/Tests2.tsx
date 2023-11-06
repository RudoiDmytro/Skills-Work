import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import FormContainer4 from "../components/FormContainer4";
import AdvancedFilterForm from "../components/AdvancedFilterForm";
import Header3 from "../components/Header3";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Tests2.module.css";

const Tests2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/homepage2");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers2");
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  return (
    <div className={styles.tests2}>
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
        label="Пошук Тестів"
        prop="/"
        label2="Пошук тестів"
        showLabel
        breadcrumbPosition="absolute"
        breadcrumbTop="138px"
        breadcrumbLeft="0px"
        breadcrumbWidth="1920px"
        breadcrumbAlignSelf="unset"
      />
      <div className={styles.tests2Inner} onClick={onFrameContainer10Click}>
        <FormContainer4 />
      </div>
      <AdvancedFilterForm
        searchByJobTittlePosition="Пошук за: назвою посади, посадою, ключовим словом..."
        city="Місто"
        primary={["Фільтри", "Пошук Тестів"]}
        adbanceFilterTop="238px"
        adbanceFilterGap="12px"
        inputFieldBackgroundColor="#fff"
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
        propJustifyContent="flex-start"
        propGap="240px"
        propWidth="unset"
        propAlignSelf="stretch"
        propWidth1="756px"
        propBoxShadow="0px -2px 0px #0a65cc inset"
        propColor="#0a65cc"
        propFontWeight="bold"
        propWidth2="unset"
        propWidth3="unset"
        propFlexShrink="unset"
        propBoxShadow1="unset"
        propCursor="pointer"
        propColor1="#5e6670"
        propFontWeight1="unset"
        propWidth4="130px"
        propCursor1="pointer"
        onNavLinkContainerClick={onNavLinkContainerClick}
        onNavLinkContainer2Click={onNavLinkContainer2Click}
        onNavLinkContainer3Click={onNavLinkContainer3Click}
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

export default Tests2;
