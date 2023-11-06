import { FunctionComponent } from "react";
import Property1Intern from "./Property1Intern";
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium";
import styles from "./FeaturedJobContainer.module.css";

const FeaturedJobContainer: FunctionComponent = () => {
  return (
    <div className={styles.featuredJob}>
      <div className={styles.heading}>
        <div className={styles.featuredJob1}>Рекомендована робота</div>
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
        <div className={styles.jobParent}>
          <div className={styles.job}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Спеціаліст технічної підтримки
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Неповний робочий день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Старший дизайнер UX
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Офіцер з маркетингу
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Стажування" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.jobParent}>
          <div className={styles.job3}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Молодший графічний дизайнер
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Стажування" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Дизайнер взаємодії
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Неповний робочий день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Керівник проекту
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.jobParent}>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Інженер-програміст
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Візуальний дизайнер
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Керівник проекту
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.jobParent}>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Front End розробник
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Неповний робочий день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Старший дизайнер UX
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Повний день" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className={styles.job2}>
            <div className={styles.heading1}>
              <div className={styles.techicalSupportSpecialist}>
                Менеджер з маркетингу
              </div>
              <div className={styles.typeParent}>
                <Property1Intern internship="Стажування" />
                <div className={styles.salary20000}>
                  Зарплата: $20 000 - $25 000
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <EmployersGoogleSizeMedium
                employersGoogleSizeMediumPadding="12px"
                employersGoogleSizeMediumBoxSizing="border-box"
              />
              <div className={styles.info}>
                <div className={styles.googleInc}>{`Google Inc{{крапка}}`}</div>
                <div className={styles.loaction}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.dhakaBangladesh}>Дакка, Бангладеш</div>
                </div>
              </div>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobContainer;
