import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UA.module.css";

const UA: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUAContainerClick = useCallback(() => {
    navigate("/homepage2");
  }, [navigate]);

  return (
    <div className={styles.ua} onClick={onUAContainerClick}>
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <div className={styles.englishWrapper}>
        <div className={styles.english}>Українська</div>
      </div>
    </div>
  );
};

export default UA;
