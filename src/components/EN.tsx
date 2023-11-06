import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EN.module.css";

const EN: FunctionComponent = () => {
  const navigate = useNavigate();

  const onENContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.en} onClick={onENContainerClick}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.englishWrapper}>
        <div className={styles.english}>English</div>
      </div>
    </div>
  );
};

export default EN;
