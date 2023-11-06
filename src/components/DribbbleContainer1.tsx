import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DribbbleContainer from "./DribbbleContainer";
import styles from "./DribbbleContainer1.module.css";

const DribbbleContainer1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/job-detail");
  }, [navigate]);

  return (
    <div className={styles.frameParent} onClick={onFrameContainer1Click}>
      <div className={styles.frameWrapper}>
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
          propWidth="1320px"
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
  );
};

export default DribbbleContainer1;
