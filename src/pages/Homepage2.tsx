import { FunctionComponent } from "react";
import Header4 from "../components/Header4";
import SectionCard from "../components/SectionCard";
import PopularCategoryContainer2 from "../components/PopularCategoryContainer2";
import FeaturedJobContainer from "../components/FeaturedJobContainer";
import FeaturedCompaniesContainer1 from "../components/FeaturedCompaniesContainer1";
import PopularVacanciesContainer from "../components/PopularVacanciesContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./Homepage2.module.css";

const Homepage2: FunctionComponent = () => {
  return (
    <div className={styles.homepage2}>
      <Header4 />
      <SectionCard />
      <PopularCategoryContainer2 />
      <FeaturedJobContainer />
      <FeaturedCompaniesContainer1 />
      <PopularVacanciesContainer />
      <TestimonialContainer />
      <div className={styles.callToAction}>
        <div className={styles.candidateEmployers}>
          <div className={styles.heading}>
            <div className={styles.becomeACandidate}>Стати кандидатом</div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus a dolor convallis efficitur.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.registerNow}>Зареєструватися зараз</div>
            <img
              className={styles.fiarrowRightIcon}
              alt=""
              src="/fiarrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.candidateEmployers1}>
          <div className={styles.heading}>
            <div className={styles.becomeACandidate}>Стати роботодавцем</div>
            <div className={styles.crasInMassa}>
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
              sed efficitur dolor. Pelque augue risus, aliqu.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.registerNow}>Зареєструватися зараз</div>
            <img
              className={styles.fiarrowRightIcon}
              alt=""
              src="/fiarrowright2.svg"
            />
          </div>
        </div>
      </div>
      <ContainerFooter
        dimensionCode="/image-21@2x.png"
        propAlignSelf="stretch"
        propFlex="1"
      />
    </div>
  );
};

export default Homepage2;
