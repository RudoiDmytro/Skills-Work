import { FunctionComponent } from "react";
import styles from "./MostPopularVacanciesContainer.module.css";

const MostPopularVacanciesContainer: FunctionComponent = () => {
  return (
    <section className={styles.mostPopularVacancies}>
      <div className={styles.mostPopularVacancies1}>Most Popular Vacancies</div>
      <div className={styles.vacancies}>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>
              Full-Stack Developer
            </div>
            <div className={styles.openPositions}>45,904 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Front-end Developer</div>
            <div className={styles.openPositions}>50,364 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Data Analysis</div>
            <div className={styles.openPositions}>4,339 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Orthodontists</div>
            <div className={styles.openPositions}>20,079 Open Positions</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Golang Developer</div>
            <div className={styles.openPositions}>74,875 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Back-end Developer</div>
            <div className={styles.openPositions}>43359 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>PHP engineer</div>
            <div className={styles.openPositions}>18,599 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>IT Project Manager</div>
            <div className={styles.openPositions}>28,200 Open Positions</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Q/A automation</div>
            <div className={styles.openPositions}>61,391 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Management Analysis</div>
            <div className={styles.openPositions}>93,046 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>IT Manager</div>
            <div className={styles.openPositions}>50,963 Open Positions</div>
          </div>
          <div className={styles.vacancies1}>
            <div className={styles.fullStackDeveloper}>Business Analysis</div>
            <div className={styles.openPositions}>16,627 Open Positions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopularVacanciesContainer;
