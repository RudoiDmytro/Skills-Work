import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer2 from "./FormContainer2";
import styles from "./FormContainer4.module.css";

const FormContainer4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer9Click = useCallback(() => {
    navigate("/job-detail2");
  }, [navigate]);

  return (
    <div className={styles.frameParent} onClick={onFrameContainer9Click}>
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
      <FormContainer2 />
    </div>
  );
};

export default FormContainer4;
