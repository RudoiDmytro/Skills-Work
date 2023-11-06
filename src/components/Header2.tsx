import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Breadcrumb1 from "./Breadcrumb1";
import styles from "./Header2.module.css";

const Header2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <Header />
      <Breadcrumb1
        label="Job Details"
        label1="Home"
        label2="Find Job"
        label4={`Graphics & Design`}
        label6="Job Details"
        label3
        div
        label5
        div1
        showLabel
      />
      <img className={styles.frameChild} alt="" src="/frame-684.svg" />
    </div>
  );
};

export default Header2;
