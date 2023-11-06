import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import PopularCategoryContainer1 from "../components/PopularCategoryContainer1";
import FeaturedJobContainer1 from "../components/FeaturedJobContainer1";
import FeaturedCompaniesContainer from "../components/FeaturedCompaniesContainer";
import MostPopularVacanciesContainer from "../components/MostPopularVacanciesContainer";
import TestimonialCard from "../components/TestimonialCard";
import CandidateContainer from "../components/CandidateContainer";
import FormContainer from "../components/FormContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <main className={styles.homepage}>
      <MainHeader />
      <FrameComponent1 />
      <PopularCategoryContainer1 />
      <FeaturedJobContainer1 />
      <FeaturedCompaniesContainer />
      <MostPopularVacanciesContainer />
      <TestimonialCard />
      <section className={styles.callToAction}>
        <CandidateContainer
          ctaText="Become a Candidate"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
        />
        <CandidateContainer
          ctaText="Become a Employer"
          descriptionText="Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu."
          propBackgroundImage="url('/candidate--employers1@3x.png')"
          propColor="#fff"
          propColor1="#fff"
        />
      </section>
      <FormContainer />
    </main>
  );
};

export default Homepage;
