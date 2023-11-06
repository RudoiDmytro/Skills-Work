import { FunctionComponent } from "react";
import styles from "./PopularVacanciesContainer.module.css";

const PopularVacanciesContainer: FunctionComponent = () => {
  return (
    <div className={styles.mostPopularVacancies}>
      <div className={styles.mostPopularVacancies1}>
        Найпопулярніші вакансії
      </div>
      <div className={styles.vacancies}>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>
              Повноцінний розробник
            </div>
            <div className={styles.openPositions}>45 904 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Front-end розробник</div>
            <div className={styles.openPositions}>50 364 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Аналіз даних</div>
            <div className={styles.openPositions}>4339 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Ортодонти</div>
            <div className={styles.openPositions}>20 079 відкритих позицій</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Розробник Golang</div>
            <div className={styles.openPositions}>74 875 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Back-end розробник</div>
            <div className={styles.openPositions}>43359 Відкриті позиції</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Інженер PHP</div>
            <div className={styles.openPositions}>18 599 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>
              Менеджер ІТ-проектів
            </div>
            <div className={styles.openPositions}>28 200 відкритих позицій</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Автоматизація Q/A</div>
            <div className={styles.openPositions}>61 391 відкрита позиція</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Аналіз менеджменту</div>
            <div className={styles.openPositions}>93 046 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>ІТ менеджер</div>
            <div className={styles.openPositions}>50 963 відкритих позицій</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Бізнес-аналіз</div>
            <div className={styles.openPositions}>16 627 відкритих позицій</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVacanciesContainer;
