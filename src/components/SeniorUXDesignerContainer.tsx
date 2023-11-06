import { FunctionComponent } from "react";
import SizeLargePositionPrimary from "./SizeLargePositionPrimary";
import PositionPrimary from "./PositionPrimary";
import styles from "./SeniorUXDesignerContainer.module.css";

type SeniorUXDesignerContainerType = {
  primary?: string;
  fiarrowRight?: string;
  seniorUXDesigner?: string;
  atFacebook?: string;
  fULLTIME?: string;
  featured?: string;
};

const SeniorUXDesignerContainer: FunctionComponent<
  SeniorUXDesignerContainerType
> = ({
  primary,
  fiarrowRight,
  seniorUXDesigner,
  atFacebook,
  fULLTIME,
  featured,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-43@2x.png" />
      <div className={styles.buttonWrapper}>
        <SizeLargePositionPrimary
          primary="Apply now"
          fiarrowRight="/fiarrowright5.svg"
          sizeLargePositionPrimaryBackgroundColor="#d14d72"
          sizeLargePositionPrimaryWidth="248px"
        />
      </div>
      <div className={styles.headingParent}>
        <div className={styles.heading}>
          <div className={styles.seniorUxDesigner}>{seniorUXDesigner}</div>
        </div>
        <div className={styles.atFacebookParent}>
          <div className={styles.atFacebook}>{atFacebook}</div>
          <div className={styles.fullTimeWrapper}>
            <div className={styles.fullTime}>{fULLTIME}</div>
          </div>
          <PositionPrimary
            featured="Featured"
            positionPrimaryBackgroundColor="#ffeded"
            positionPrimaryPadding="var(--padding-9xs) var(--padding-xs)"
            featuredColor="#e05151"
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorUXDesignerContainer;
