import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFrameSkillsAndWork from "../components/ContainerFrameSkillsAndWork";
import FormContainer from "../components/FormContainer";
import styles from "./Assessment.module.css";

const Assessment: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.assessment}>
      <ContainerFrameSkillsAndWork />
      <FormContainer
        propAlignSelf="stretch"
        propWidth="unset"
        propAlignSelf1="stretch"
      />
    </div>
  );
};

export default Assessment;
