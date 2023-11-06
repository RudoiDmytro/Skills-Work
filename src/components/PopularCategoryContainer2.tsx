import { FunctionComponent } from "react";
import styles from "./PopularCategoryContainer2.module.css";

const PopularCategoryContainer2: FunctionComponent = () => {
  return (
    <div className={styles.category}>
      <div className={styles.heading}>
        <div className={styles.popularCategory}>Популярна категорія</div>
        <div className={styles.button}>
          <div className={styles.viewAll}>Переглянути всі</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.categoryParent}>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/pennibduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Графіка та дизайн</div>
              <div className={styles.openPosition}>357 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/codeduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Код і програмування</div>
              <div className={styles.openPosition}>312 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/megaphonesimpleduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Цифровий маркетинг</div>
              <div className={styles.openPosition}>297 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/monitorplayduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Відео та анімація</div>
              <div className={styles.openPosition}>247 Відкрита позиція</div>
            </div>
          </div>
        </div>
        <div className={styles.categoryParent}>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/musicnotesduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Музика та аудіо</div>
              <div className={styles.openPosition}>204 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category1}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/chartbarhorizontalduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>
                Обліковий запис і фінанси
              </div>
              <div className={styles.openPosition}>167 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category7}>
            <div className={styles.icon}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/firstaidkitduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Охорона здоров'я</div>
              <div className={styles.openPosition}>125 Відкрита позиція</div>
            </div>
          </div>
          <div className={styles.category8}>
            <div className={styles.icon7}>
              <img
                className={styles.penNibDuotone1Icon}
                alt=""
                src="/databaseduotone-1.svg"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.graphicsDesign}>Дані та наука</div>
              <div className={styles.openPosition}>57 Відкрита позиція</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryContainer2;
