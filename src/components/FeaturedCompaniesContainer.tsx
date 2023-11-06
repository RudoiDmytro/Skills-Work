import { FunctionComponent } from "react";
import DribbbleContainer from "./DribbbleContainer";
import styles from "./FeaturedCompaniesContainer.module.css";

const FeaturedCompaniesContainer: FunctionComponent = () => {
  return (
    <section className={styles.featuredCompanies}>
      <div className={styles.topCompanies}>Top companies</div>
      <div className={styles.frameParent}>
        <DribbbleContainer
          featured="Featured"
          ukraineKyiv="Ukraine, Kyiv"
          openPosition3="Open Position (3)"
          featured1="Featured"
          ukraineKyiv1="Ukraine, Kyiv"
          openPosition31="Open Position (3)"
          featured2="Featured"
          ukraineKyiv2="Ukraine, Kyiv"
          openPosition32="Open Position (3)"
        />
        <DribbbleContainer
          featured="Featured"
          ukraineKyiv="Ukraine, Kyiv"
          openPosition3="Open Position (3)"
          featured1="Featured"
          ukraineKyiv1="Ukraine, Kyiv"
          openPosition31="Open Position (3)"
          featured2="Featured"
          ukraineKyiv2="Ukraine, Kyiv"
          openPosition32="Open Position (3)"
          propWidth="unset"
          frameDivAlignSelf="stretch"
          employerFalse01TrueFalseFFlex="1"
          employerFalse01TrueFalseFWidth="unset"
          employersLogoBoxSizing="border-box"
          openPosition3Flex="1"
          openPosition3TextAlign="center"
          employerFalse01TrueFalseFFlex1="1"
          employerFalse01TrueFalseFWidth1="unset"
          employersLogoBoxSizing1="border-box"
          openPosition3Flex1="1"
          openPosition3TextAlign1="center"
          employerFalse01TrueFalseFFlex2="1"
          employerFalse01TrueFalseFWidth2="unset"
          employersLogoBoxSizing2="border-box"
          openPosition3Flex2="1"
          openPosition3TextAlign2="center"
        />
      </div>
    </section>
  );
};

export default FeaturedCompaniesContainer;
