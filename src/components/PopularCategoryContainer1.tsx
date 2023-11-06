import { FunctionComponent } from "react";
import PopularCategoryContainer from "./PopularCategoryContainer";
import styles from "./PopularCategoryContainer1.module.css";

const PopularCategoryContainer1: FunctionComponent = () => {
  return (
    <section className={styles.category}>
      <div className={styles.heading}>
        <div className={styles.popularCategory}>Popular category</div>
        <button className={styles.button}>
          <div className={styles.viewAll}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright.svg"
          />
        </button>
      </div>
      <div className={styles.frameParent}>
        <PopularCategoryContainer
          iconImageUrl="/pennibduotone-1.svg"
          categoryIconImageUrl={`Graphics & Design`}
          jobCountText="357 Open position"
          imageIconUrl="/codeduotone-1.svg"
          categoryImageUrl={`Code & Programing`}
          jobCountText2="312 Open position"
          itemImageUrl="/megaphonesimpleduotone-1.svg"
          serviceImageUrl="Digital Marketing"
          openPositionText="297 Open position"
          itemIconUrl="/monitorplayduotone-1.svg"
          categoryImageText={`Video & Animation`}
          openPositionCountText="247 Open position"
        />
        <PopularCategoryContainer
          iconImageUrl="/musicnotesduotone-1.svg"
          categoryIconImageUrl={`Music & Audio`}
          jobCountText="204 Open position"
          imageIconUrl="/chartbarhorizontalduotone-1.svg"
          categoryImageUrl={`Account & Finance`}
          jobCountText2="167 Open position"
          itemImageUrl="/firstaidkitduotone-1.svg"
          serviceImageUrl={`Health & Care`}
          openPositionText="125 Open position"
          itemIconUrl="/databaseduotone-1.svg"
          categoryImageText={`Data & Science`}
          openPositionCountText="57 Open position"
          propTextAlign="justify"
          propTextAlign1="justify"
          propFlex="unset"
          propBoxShadow="0px 12px 48px rgba(0, 44, 109, 0.1)"
          propBackgroundColor="#d14d72"
          propColor="#d14d72"
        />
      </div>
    </section>
  );
};

export default PopularCategoryContainer1;
