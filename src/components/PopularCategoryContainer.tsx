import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PopularCategoryContainer.module.css";

type PopularCategoryContainerType = {
  iconImageUrl?: string;
  categoryIconImageUrl?: string;
  jobCountText?: string;
  imageIconUrl?: string;
  categoryImageUrl?: string;
  jobCountText2?: string;
  itemImageUrl?: string;
  serviceImageUrl?: string;
  openPositionText?: string;
  itemIconUrl?: string;
  categoryImageText?: string;
  openPositionCountText?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propTextAlign1?: CSSProperties["textAlign"];
  propFlex?: CSSProperties["flex"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const PopularCategoryContainer: FunctionComponent<
  PopularCategoryContainerType
> = ({
  iconImageUrl,
  categoryIconImageUrl,
  jobCountText,
  imageIconUrl,
  categoryImageUrl,
  jobCountText2,
  itemImageUrl,
  serviceImageUrl,
  openPositionText,
  itemIconUrl,
  categoryImageText,
  openPositionCountText,
  propTextAlign,
  propTextAlign1,
  propFlex,
  propBoxShadow,
  propBackgroundColor,
  propColor,
}) => {
  const digitalMarketingStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const openPositionStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  const categoryStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      boxShadow: propBoxShadow,
    };
  }, [propFlex, propBoxShadow]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const videoAnimationStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.categoryParent}>
      <div className={styles.category}>
        <div className={styles.icon}>
          <img
            className={styles.penNibDuotone1Icon}
            alt=""
            src={iconImageUrl}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.graphicsDesign}>{categoryIconImageUrl}</div>
          <div className={styles.openPosition}>{jobCountText}</div>
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.icon}>
          <img
            className={styles.penNibDuotone1Icon}
            alt=""
            src={imageIconUrl}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.graphicsDesign}>{categoryImageUrl}</div>
          <div className={styles.openPosition}>{jobCountText2}</div>
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.icon}>
          <img
            className={styles.penNibDuotone1Icon}
            alt=""
            src={itemImageUrl}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.graphicsDesign} style={digitalMarketingStyle}>
            {serviceImageUrl}
          </div>
          <div className={styles.openPosition} style={openPositionStyle}>
            {openPositionText}
          </div>
        </div>
      </div>
      <div className={styles.category} style={categoryStyle}>
        <div className={styles.icon} style={iconStyle}>
          <img className={styles.penNibDuotone1Icon} alt="" src={itemIconUrl} />
        </div>
        <div className={styles.info}>
          <div className={styles.graphicsDesign} style={videoAnimationStyle}>
            {categoryImageText}
          </div>
          <div className={styles.openPosition}>{openPositionCountText}</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryContainer;
